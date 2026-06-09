FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
RUN addgroup -S devops && adduser -S devops -G devops
COPY --chown=devops:devops ./package.json package-lock.json /app/
COPY --chown=devops:devops --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --chown=devops:devops --from=build-env /app/build /app/build
WORKDIR /app
USER devops
CMD ["npm", "run", "start"]