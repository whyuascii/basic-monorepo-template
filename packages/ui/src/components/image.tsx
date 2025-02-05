import type React from 'react';

export default function Image({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  // biome-ignore lint/a11y/useAltText: <explanation>
  return <img src={src} alt={alt} className="rounded-md" {...props} />;
}
