import camera from '../../../../public/camera.jpeg'
import frisbee from '../../../../public/frisbee.jpeg'

const Stories = () => {
	return (
		<div className={'px-7 flex mt-10'}>
			<div className={'py-2.5 px-4 flex flex-col items-center'}>
				<div className={'relative flex items-center justify-center rounded-full cursor-pointer'}>
					<img src={camera} alt="camera" className={'w-[77px] h-[77px] rounded-full'} />
					<div className={'absolute w-[87px] h-[87px] bg-[url("../../../public/frameGray.png")]'}></div>
				</div>
				<h3 className={'mt-4 font-bold text-[10px]'}>BTS</h3>
			</div>
			<div className={'ml-4 py-2.5 px-4 flex flex-col items-center'}>
				<div className={'relative flex items-center justify-center rounded-full cursor-pointer'}>
					<img src={frisbee} alt="camera" className={'w-[77px] h-[77px] rounded-full'} />
					<div className={'absolute w-[87px] h-[87px] bg-[url("../../../public/frameGray.png")]'}></div>
				</div>
				<h3 className={'mt-4 font-bold text-[10px]'}>Frisbee</h3>
			</div>
		</div>
	)
}

export default Stories
