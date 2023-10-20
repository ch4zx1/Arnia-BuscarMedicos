import * as React from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { children: React.ReactNode }

function Checkbox({ children, ...props }: Props) {
  return (
    <>
	<input type='checkbox' {...props} />
	<label> {children} </label>
    </>
  )
}

export default Checkbox
