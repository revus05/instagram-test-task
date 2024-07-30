import Input from '../../../../shared/ui/Input/Input.tsx'

type Props = {
	newUsername: string
	setNewUsername: (username: string) => void
	username: string
}

const EditUsername = ({ newUsername, setNewUsername, username }: Props) => {
	return (
		<div className={'flex mt-4'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Username</p>
				</div>
			</div>
			<div className={'w-[325px] ml-8'}>
				<Input
					className={'w-full'}
					placeholder={'Type in your name'}
					value={newUsername}
					onChange={e => setNewUsername(e.target.value)}
				/>
				<p className={'text-secondary text-[11px] mt-3.5'}>
					In most cases, you'll be able to change your username back to {username} for another 14 days.
				</p>
			</div>
		</div>
	)
}

export default EditUsername
