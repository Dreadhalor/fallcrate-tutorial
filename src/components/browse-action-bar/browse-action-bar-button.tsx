import React from 'react';
import { Button, buttonVariants } from '@ui/button';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  primary?: boolean;
}
export const BrowseActionBarButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ primary = false, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'flex h-[76px] w-[140px] flex-col items-start justify-center gap-3 rounded-none p-[12px] font-semibold',
          primary && 'bg-blue-500 hover:bg-blue-600',
          !primary && 'border bg-transparent text-white hover:bg-gray-900',
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

BrowseActionBarButton.displayName = 'BrowseActionBarButton';
