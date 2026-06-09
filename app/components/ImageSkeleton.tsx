import { useState } from "react";

interface ImageSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function ImageSkeleton({ className, containerClassName, alt, src, ...props }: ImageSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-200 ${containerClassName || className || ""}`}>
      {/* The Skeleton Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
      )}
      
      {/* The Actual Image */}
      <img
        src={src}
        alt={alt || "Image"}
        className={`${className || "w-full h-full object-cover"} transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
