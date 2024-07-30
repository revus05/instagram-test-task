import Input from '../../../../shared/ui/Input/Input.tsx'

type Props = {
	phoneNumber: string
	setPhoneNumber: (phoneNumber: string) => void
}

const EditPhoneNumber = ({ phoneNumber, setPhoneNumber }: Props) => {
	return (
		<div className={'flex mt-4'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Phone number</p>
				</div>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Input className={'w-full'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
			</div>
		</div>
	)
}

export default EditPhoneNumber
