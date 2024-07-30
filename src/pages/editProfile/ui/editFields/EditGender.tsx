import Input from '../../../../shared/ui/Input/Input.tsx'

type Props = {
	gender: string
	setGender: (gender: string) => void
}

const EditGender = ({ gender, setGender }: Props) => {
	return (
		<div className={'flex mt-4'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Gender</p>
				</div>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Input className={'w-full'} value={gender} onChange={e => setGender(e.target.value)} />
			</div>
		</div>
	)
}

export default EditGender
