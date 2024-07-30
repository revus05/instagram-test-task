import Textarea from '../../../../shared/ui/Textarea/Textarea.tsx'

type Props = {
	bio: string
	setBio: (value: string) => void
}

const EditBio = ({ bio, setBio }: Props) => {
	return (
		<div className={'flex mt-8'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Bio</p>
				</div>
			</div>

			<div className={'w-[325px] ml-8'}>
				<Textarea
					className={'px-3 py-2 w-full'}
					value={bio}
					onChange={e => {
						if (e.target.value.length <= 150) {
							setBio(e.target.value)
						}
					}}
				/>
				<p className={'text-secondary text-[11px] mt-1.5'}>{bio.length} / 150</p>
				<h4 className={'text-sm text-secondary font-semibold mt-8'}>Personal information</h4>
				<p className={'text-secondary text-[11px] mt-1.5'}>
					Provide your personal information, even if the account is used for a business, a pet or something
					else. This won't be a part of your public profile.
				</p>
			</div>
		</div>
	)
}

export default EditBio
