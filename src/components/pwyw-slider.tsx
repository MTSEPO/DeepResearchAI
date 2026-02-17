'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';

export function PwywSlider() {
  const [value, setValue] = React.useState(15);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <span className="text-4xl font-bold">${value}</span>
      </div>
      <Slider
        defaultValue={[15]}
        min={5}
        max={50}
        step={1}
        onValueChange={(vals) => setValue(vals[0])}
        className="w-full"
      />
      <div className="flex justify-between w-full text-xs text-muted-foreground">
        <span>$5 Min</span>
        <span>$15 Suggested</span>
        <span>$50 Supporter</span>
      </div>
    </div>
  );
}
