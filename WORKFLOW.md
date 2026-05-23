# Team Workflow & Guidelines

To maintain a consistent and high-quality codebase, please adhere to the following workflow and coding standards when contributing to the Voco Hotel frontend.

## 🎨 Styling Guidelines
We strictly enforce **Tailwind CSS v4**. 
- **NO Custom CSS**: Avoid creating new `.css` files. All styling must be handled via Tailwind utility classes.
- **NO Arbitrary Pixel Values**: Do not use bracketed pixel values like `w-[120px]` or `pt-[60px]`. Always use the standard Tailwind spacing scale (e.g., `w-30`, `pt-15`). Remember that 1 Tailwind unit = `0.25rem` or `4px`.
- **Typography Scale**: Use standard text classes (`text-sm`, `text-base`, `text-2xl`, `text-5xl`) instead of arbitrary font sizes (`text-[16px]`).
- **Theme Variables**: If a new color or font is needed globally, add it to the `@theme` block inside `app/app.css`. Do not hardcode custom hex colors inside components if they are brand colors.

## 🧩 Component Architecture
- **Pages**: Top-level route files belong in `app/routes/`. These files should assemble components but avoid deep, complex logic if it can be abstracted.
- **Components**: Reusable pieces of the UI (buttons, cards, navbars, sliders) go into `app/components/`. 
- **Icons**: Use `lucide-react`. Do not import SVGs manually unless it's a completely custom brand asset.

## 🚀 Git Flow & Version Control

### Branch Naming Convention
- `feature/<feature-name>`: For new features (e.g., `feature/booking-modal`)
- `fix/<issue-name>`: For bug fixes (e.g., `fix/navbar-mobile-menu`)
- `chore/<chore-name>`: For tooling, dependency updates, or formatting (e.g., `chore/update-tailwind`)

### Commit Messages
Write clear, descriptive commit messages. Use the imperative mood:
- ✅ `Add user testimonials component`
- ❌ `Added user testimonials component`

### Pull Requests (PRs)
1. Ensure your code builds locally without errors (`npm run build`).
2. Do not merge your own PRs. Require at least one approval from a team member.
3. Keep PRs small and focused on a single feature or bug fix.
