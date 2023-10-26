import * as React from 'react'

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { children: React.ReactNode }

function TextArea({ children, ...props }: Props) {
  return (
    <>
	<label> {children} </label>
    <textarea {...props} />
    </>
  )
}
export default TextArea
