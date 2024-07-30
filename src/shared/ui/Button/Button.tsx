import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

// Определение типов пропсов
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

// Компонент Button с поддержкой ref
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
		return (
			<button
				{...props}
				ref={ref} // Передача ref
				className={twMerge(`${button({ variant, size })} ${className}`)}
			>
				{children}
			</button>
		)
	},
)

// Функция cva для стилей кнопки
const button = cva(
	'py-[7px] font-roboto text-sm px-4 rounded-lg font-semibold active:opacity-50 text-black cursor-pointer flex items-center',
	{
		variants: {
			variant: {
				primary: 'bg-primary hover:bg-primary-active text-white',
				secondary: 'bg-secondary-btn hover:bg-secondary-btn-active',
				empty: 'bg-transparent p-2',
			},
			size: {
				md: 'h-8',
				sm: 'h-4',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
)

export default Button
