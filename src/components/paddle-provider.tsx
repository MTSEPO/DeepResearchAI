'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializePaddle, Paddle, initializePaddleOptions } from '@paddle/paddle-js';

interface PaddleContextType {
  paddle: Paddle | null;
}

const PaddleContext = createContext<PaddleContextType>({ paddle: null });

export const usePaddle = () => useContext(PaddleContext);

export function PaddleProvider({ children }: { children: React.ReactNode }) {
  const [paddle, setPaddle] = useState<Paddle | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!token) {
      console.warn('NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is missing');
      return;
    }

    initializePaddle({ 
      environment: 'production', 
      token 
    } as initializePaddleOptions).then((paddleInstance) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  return (
    <PaddleContext.Provider value={{ paddle }}>
      {children}
    </PaddleContext.Provider>
  );
}