import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div>
      {label && <label className="text-sm text-textSecondary">{label}</label>}

      <input
        className={`mt-1 w-full px-4 py-2 rounded-xl border transition
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}
          focus:outline-none focus:ring-2
          ${className}
        `}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
