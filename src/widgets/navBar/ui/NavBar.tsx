import { Link } from 'react-router-dom'

import { ReactNode } from 'react'
import { Burger, Create, Direct, Explore, Home, Notifications, Reels, Search } from '../../../../public/icons.tsx'
import { useUnit } from 'effector-react/compat'
import store from '../../../app/store.ts'

const NavBar = () => {
	const [{ user }] = useUnit([store])

	type Navigation = {
		id: number
		name: string
		href: string
		icon: ReactNode | 'string'
	}

	const navigation: Navigation[] = [
		{
			id: 1,
			name: 'Home',
			href: '/',
			icon: <Home className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 2,
			name: 'Search',
			href: '/',
			icon: <Search className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 3,
			name: 'Explore',
			href: '/',
			icon: <Explore className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 4,
			name: 'Reels',
			href: '/',
			icon: <Reels className={'stroke-[#262626] group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 5,
			name: 'Messages',
			href: '/',
			icon: <Direct className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 6,
			name: 'Notifications',
			href: '/',
			icon: <Notifications className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 7,
			name: 'Create',
			href: '/',
			icon: <Create className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
		{
			id: 8,
			name: 'Profile',
			href: '/editProfile',
			icon: user.image,
		},
		{
			id: 9,
			name: 'More',
			href: '/',
			icon: <Burger className={'group-hover:scale-110 transition group-active:scale-100'} />,
		},
	]

	return (
		<aside className={'px-3 pt-10 w-[244px] h-svh border-r-[1px] border-[#DBDBDB] fixed bg-white'}>
			<div className={'px-3'}>
				<Link to={'/'}>
					<img src="/logo.svg" alt="logo" />
				</Link>
			</div>
			<nav className={'mt-9'}>
				<ul>
					{navigation.map((item: Navigation) => (
						<li key={item.id}>
							<Link
								to={item.href}
								className={
									'flex items-center p-3 group rounded-lg hover:bg-[rgba(0,0,0,0.05)] transition active:opacity-50'
								}
							>
								{typeof item.icon === 'string' ? (
									<img
										src={item.icon}
										alt={'profileImage'}
										className={
											'h-6 w-6 rounded-full group-hover:scale-110 transition group-active:scale-100'
										}
									/>
								) : (
									item.icon
								)}
								<p className={'ml-4'}>{item.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}

export default NavBar
