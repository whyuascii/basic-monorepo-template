import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { cn } from '../lib/utils';

const AspectRatio = ({ className, ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) => {
  return (
    <AspectRatioPrimitive.Root
      className={cn('relative overflow-hidden rounded-lg transition-all duration-300', className)}
      {...props}
    />
  );
};

export { AspectRatio };
