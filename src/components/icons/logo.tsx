import * as React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-primary" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="currentColor"
        className="text-primary-foreground"
      >
        T
      </text>
    </svg>
  );
}
