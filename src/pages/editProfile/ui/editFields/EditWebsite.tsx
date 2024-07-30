import Input from '../../../../shared/ui/Input/Input.tsx'

const EditWebsite = () => {
	return (
		<div className={'flex mt-8'}>
			<div className={'w-[194px] flex justify-end'}>
				<div className={'h-8 flex items-center'}>
					<p className={'font-semibold'}>Website</p>
				</div>
			</div>

			<div className={'w-[325px] ml-8'}>
				<Input className={'w-full'} value={'Website'} onChange={() => null} disabled={true} />
				<p className={'text-secondary text-[11px] mt-1.5'}>
					Editing your links is only available on mobile. Visit the Instagram app and edit your profile to
					change the websites in your bio.
				</p>
			</div>
		</div>
	)
}

export default EditWebsite
