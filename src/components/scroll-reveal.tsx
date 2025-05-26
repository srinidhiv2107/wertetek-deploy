"use client";

import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number; // in ms
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({ children, className, delay = 0, threshold = 0.1, once = true, ...props }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && currentRef) { // Check currentRef again before unobserve
            observer.unobserve(currentRef);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) { // Check currentRef again before unobserve
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
