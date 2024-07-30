import Input from '../../../../shared/ui/Input/Input.tsx'

type Props = {
	name: string
	setName: (name: string) => void
}

const EditName = ({ name, setName }: Props) => {
	return (
		<div className={'flex mt-4 mb-1'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Name</p>
				</div>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Input
					className={'w-full'}
					placeholder={'Type in your name'}
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<p className={'text-secondary text-[11px] mt-3.5'}>
					Help people discover your account by using the name you're known by: either your full name,
					nickname, or business name.
				</p>
				<p className={'text-secondary text-[11px] mt-[11px]'}>
					You can only change your name twice within 14 days.
				</p>
			</div>
		</div>
	)
}

export default EditName
