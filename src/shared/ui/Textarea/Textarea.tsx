import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Textarea = ({ className, rows = 4, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			className={twMerge('resize-none border-[1px] rounded-[3px]', className)}
			rows={rows}
			{...props}
		></textarea>
	)
}

export default Textarea
