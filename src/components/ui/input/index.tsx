import * as React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { children: React.ReactNode }

function Input({ children, ...props }: Props) {
  return (
    <>
	<label> {children} </label>
    <input {...props} />
    </>
  )
}

export default Input
