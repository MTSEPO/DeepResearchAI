
'use client';

import * as React from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface PayhipButtonProps {
  productKey: string; // The Payhip product key (e.g., "XXXX")
  className?: string;
}

export function PayhipButton({ productKey, className }: PayhipButtonProps) {
  return (
    <>
      <Script 
        src="https://payhip.com/payhip.js" 
        strategy="afterInteractive"
      />
      <Button
        asChild
        size="lg"
        className={`w-full h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all payhip-buy-button ${className}`}
      >
        <a 
          href={`https://payhip.com/b/${productKey}`}
          data-product={productKey}
          data-theme="none"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Get Lifetime Access
        </a>
      </Button>
    </>
  );
}
