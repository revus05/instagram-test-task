import Input from '../../../../shared/ui/Input/Input.tsx'

type Props = {
	email: string
	setEmail: (email: string) => void
}

const EditEmail = ({ email, setEmail }: Props) => {
	return (
		<div className={'flex mt-3'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Email</p>
				</div>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Input className={'w-full'} value={email} onChange={e => setEmail(e.target.value)} />
			</div>
		</div>
	)
}

export default EditEmail
