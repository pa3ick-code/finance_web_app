"use client"
import React from 'react';
import CountUp from 'react-countup';

export default function AnimatedCounter({amount}: {amount:number}) {
  return (
    <div className='w-full'>
      <CountUp
        decimal='.'
        prefix='#'
        duration={1.5}
        decimals={2}
        end={amount}
      />
    </div>
  );
}
