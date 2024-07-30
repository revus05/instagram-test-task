import { InputHTMLAttributes, ReactNode, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import checkedSVG from '../../../../public/checked.svg'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label: ReactNode
}

const Checkbox = ({ label, className, checked, ...props }: Props) => {
	const labelId = useId()
	return (
		<label htmlFor={labelId} className={'flex items-center cursor-pointer'}>
			<div className={'w-4'}>
				<input id={labelId} type={'checkbox'} className={'opacity-0 absolute'} {...props} />
				<span className={twMerge('flex h-4 w-4 rounded-[3px] border items-center justify-center', className)}>
					{checked ? <img src={checkedSVG} alt="checked" className={'h-3 w-3'} /> : null}
				</span>
			</div>
			<p className={'grow text-sm leading-4 font-semibold ml-2'}>{label}</p>
		</label>
	)
}

export default Checkbox
