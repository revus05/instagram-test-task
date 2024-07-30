import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({ className, disabled, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			type="text"
			className={twMerge(
				'px-3 py-2 border-[1px] rounded-[3px] h-8',
				disabled ? 'text-secondary cursor-not-allowed bg-[#EFEFEF] outline-none focus:outline-none' : '',
				className,
			)}
			{...props}
		/>
	)
}

export default Input
