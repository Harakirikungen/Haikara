import React from 'react';

export function Button({ children, className, ...props }) {
  return <button className={`font-semibold rounded-xl px-4 py-2 transition ${className}`} {...props}>{children}</button>;
}
