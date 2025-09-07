import React from 'react';

export function Card({ children, className }) {
  return <div className={`rounded-2xl shadow-lg ${className}`}>{children}</div>;
}
