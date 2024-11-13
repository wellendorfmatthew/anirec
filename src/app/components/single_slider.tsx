'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '../../../lib/utils';

interface SingleRangeSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: 'top' | 'bottom';
  label?: (value: number | undefined) => React.ReactNode;
}

const SingleRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SingleRangeSliderProps
>(({ className, label, labelPosition = 'top', ...props }, ref) => {
  // Here, we assume that value will be a single number (not an array)
  const initialValue = Array.isArray(props.value) ? props.value[0] : props.value || props.min;

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      {/* Slider Track */}
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#E2D2DC]">
        {/* Slider Range */}
        <SliderPrimitive.Range className="absolute h-full bg-[#E2D2DC]" />
      </SliderPrimitive.Track>
      
      {/* Render a single Thumb */}
      <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border-2 border-[#E2D2DC] bg-[#E2D2DC] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        {label && (
          <span
            className={cn(
              'absolute flex w-full justify-center',
              labelPosition === 'top' && '-top-7',
              labelPosition === 'bottom' && 'top-4',
            )}
          >
            {label(initialValue)}
          </span>
        )}
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});

SingleRangeSlider.displayName = 'SingleRangeSlider';

export { SingleRangeSlider };
