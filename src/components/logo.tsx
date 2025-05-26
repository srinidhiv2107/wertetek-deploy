import type { SVGProps } from 'react';

export function WertekLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="40"
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="150" height="40" rx="12" fill="hsl(var(--primary))" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="20"
        fontWeight="medium"
        fill="hsl(var(--primary-foreground))"
      >
        Wertetek
      </text>
    </svg>
  );
}
