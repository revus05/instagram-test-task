import Button from '../../../shared/ui/Button/Button.tsx'
import { ArrowDown } from '../../../../public/icons.tsx'

const Footer = () => {
	return (
		<footer className={'text-[#8E8E8E] text-xs mt-6 mb-16'}>
			<ul className={'flex justify-center'}>
				<li>Meta</li>
				<li className={'ml-4'}>About</li>
				<li className={'ml-4'}>Blog</li>
				<li className={'ml-4'}>Jobs</li>
				<li className={'ml-4'}>Help</li>
				<li className={'ml-4'}>API</li>
				<li className={'ml-4'}>Privacy</li>
				<li className={'ml-4'}>Terms</li>
				<li className={'ml-4'}>Top Accounts</li>
				<li className={'ml-4'}>Locations</li>
				<li className={'ml-4'}>Instagram Lite</li>
				<li className={'ml-4'}>Instagram Lite</li>
				<li className={'ml-4'}>Meta Verified</li>
			</ul>
			<div className={'flex justify-center mt-2.5'}>
				<Button className={'p-0 font-normal'} variant={'empty'} size={'sm'}>
					<p className={'text-[#8E8E8E]'}>English</p>
					<ArrowDown className={'stroke-[#8E8E8E] ml-2'} />
				</Button>
				<p className={'ml-4'}>© 2023 Instagram from Meta</p>
			</div>
		</footer>
	)
}

export default Footer
