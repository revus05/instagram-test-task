import Button from '../../../../shared/ui/Button/Button.tsx'

type Props = {
	image: string
	username: string
}

const EditAvatar = ({ image, username }: Props) => {
	return (
		<div className={'flex'}>
			<div className={'w-[194px] flex justify-end'}>
				<img src={image} alt="avatar" className={'rounded-full h-[2.375rem] w-[2.375rem]'} />
			</div>
			<div className={'w-[325px] ml-8'}>
				<p className={'h-5 line-clamp-1'}>{username}</p>
				<Button variant={'link'} className={'p-0 h-5 line-clamp-1 rounded-none'}>
					Change profile photo
				</Button>
			</div>
		</div>
	)
}

export default EditAvatar
