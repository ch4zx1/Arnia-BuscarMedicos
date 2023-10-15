import * as React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { children: React.ReactNode }

function Input({ children, ...props }: Props) {
  return (
    <>
      <input {...props} />
      <label> {children} </label>
    </>
  )
}

export default Input
