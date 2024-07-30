import { Link } from 'react-router-dom'
import Button from '../shared/ui/Button/Button.tsx'
import { Meta } from '../../public/icons.tsx'

const SettingNavBar = () => {
	return (
		<div className={'w-[240px] border-r-[1px]'}>
			<div className={'px-8 py-7 border-b-[1px]'}>
				<Meta />
				<h3 className={'mt-2.5 font-semibold'}>Some account settings are moving</h3>
				<p className={'mt-2 text-sm'}>
					Soon, Accounts Center will be the primary place to manage your account info and settings.
				</p>
				<Button variant={'link'} className={'px-0 mt-1.5'}>
					Learn more
				</Button>
			</div>
			<nav className={'border-b-[1px]'}>
				<ul>
					<li className={'flex'}>
						<Link
							to={'/editProfile'}
							className={'px-8 py-3 text-sm font-semibold border-l-2 border-l-[#262626]'}
						>
							Edit profile
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Professional account
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Change password
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Apps and websites
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Email notifications
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Push notifications
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Manage contacts
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Privacy and security
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Ads
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Supervision
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Login activity
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Emails from Instagram
						</Link>
					</li>
					<li className={'flex'}>
						<Link to={'/editProfile'} className={'px-8 py-3 text-sm'}>
							Help
						</Link>
					</li>
					<li className={'flex'}>
						<Button variant={'link'} className={'px-8 py-3 text-sm h-auto'}>
							Switch to personal account
						</Button>
					</li>
				</ul>
			</nav>
			<div className={'px-8 py-7'}>
				<Meta />
				<Button variant={'link'} className={'px-0 mt-2.5'}>
					Accounts center
				</Button>
				<p className={'mt-2 text-xs text-[#8E8E8E]'}>
					Control settings for connected experiences across Instagram, the Facebook app and Messenger,
					including story and post sharing and logging in.
				</p>
			</div>
		</div>
	)
}

export default SettingNavBar
