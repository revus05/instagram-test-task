import ProfileImage from '../../../../public/profileImage.jpeg'

const Avatar = () => {
	return (
		<div className={'relative flex items-center justify-center rounded-full cursor-pointer'}>
			<img src={ProfileImage} alt="profileImage" className={'rounded-full'} />
			<div className={'absolute h-[168px] w-[168px] bg-[url("../../../frame.png")]'}></div>
		</div>
	)
}

export default Avatar
