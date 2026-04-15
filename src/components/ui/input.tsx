import * as React from "react"

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`border border-slate-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${className || ""}`}
    />
  )
}
