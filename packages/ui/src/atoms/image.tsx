import type React from 'react';

export default function Image({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    // biome-ignore lint/a11y/useAltText: Image description not provided
    <img
      src={src}
      alt={alt || 'Image description not provided'}
      className="relative rounded-lg border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105
        before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
        before:bg-gradient-to-r before:from-primary before:via-accent before:to-secondary
        before:rounded-lg before:blur-md before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      {...props}
    />
  );
}
