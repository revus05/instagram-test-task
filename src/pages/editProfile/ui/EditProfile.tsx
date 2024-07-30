import { Link } from 'react-router-dom'
import { Meta } from '../../../../public/icons.tsx'
import Button from '../../../shared/ui/Button/Button.tsx'
import { useUnit } from 'effector-react'
import store from '../../../app/store.ts'
import Input from '../../../shared/ui/Input/Input.tsx'
import { useState } from 'react'
import Textarea from '../../../shared/ui/Textarea/Textarea.tsx'
import Checkbox from '../../../shared/ui/Checkbox/Checkbox.tsx'

const EditProfile = () => {
	const [{ user }] = useUnit([store])

	const [name, setName] = useState<string>(user.name)
	const [username, setUsername] = useState<string>(user.username)
	const [bio, setBio] = useState<string>(user.bio)
	const [email, setEmail] = useState<string>(user.email)
	const [phoneNumber, setPhoneNumber] = useState<string>(user.phoneNumber)
	const [gender, setGender] = useState<string>(user.gender)
	const [accountSuggestions, setAccountSuggestions] = useState(user.accountSuggestions)

	return (
		<div className={'rounded-[3px] border-[1px] flex'}>
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
			<div className={'grow pt-8'}>
				<div className={'flex'}>
					<div className={'w-[194px] flex justify-end'}>
						<img src={user.image} alt="avatar" className={'rounded-full h-[2.375rem] w-[2.375rem]'} />
					</div>
					<div className={'w-[325px] ml-8'}>
						<p className={'h-5 line-clamp-1'}>{user.username}</p>
						<Button variant={'link'} className={'p-0 h-5 line-clamp-1 rounded-none'}>
							Change profile photo
						</Button>
					</div>
				</div>
				<div className={'flex mt-4 mb-1'}>
					<div className={'w-[194px] flex justify-end'}>
						<div className={'h-8 flex items-center'}>
							<p className={'font-semibold'}>Name</p>
						</div>
					</div>
					<div className={'w-[325px] ml-8'}>
						<Input
							className={'w-full'}
							placeholder={'Type in your name'}
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<p className={'text-secondary text-[11px] mt-3.5'}>
							Help people discover your account by using the name you're known by: either your full name,
							nickname, or business name.
						</p>
						<p className={'text-secondary text-[11px] mt-[11px]'}>
							You can only change your name twice within 14 days.
						</p>
					</div>
				</div>
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
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
						<p className={'text-secondary text-[11px] mt-3.5'}>
							In most cases, you'll be able to change your username back to {user.username} for another 14
							days.
						</p>
					</div>
				</div>
				<div className={'flex mt-8'}>
					<div className={'w-[194px] flex justify-end'}>
						<div className={'h-8 flex items-center'}>
							<p className={'font-semibold'}>Website</p>
						</div>
					</div>

					<div className={'w-[325px] ml-8'}>
						<Input className={'w-full'} value={'Website'} onChange={() => null} disabled={true} />
						<p className={'text-secondary text-[11px] mt-1.5'}>
							Editing your links is only available on mobile. Visit the Instagram app and edit your
							profile to change the websites in your bio.
						</p>
					</div>
				</div>
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
							Provide your personal information, even if the account is used for a business, a pet or
							something else. This won't be a part of your public profile.
						</p>
					</div>
				</div>
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
				<div className={'flex mt-4'}>
					<div className={'w-[194px] flex justify-end'}>
						<div className={'h-8 flex items-center'}>
							<p className={'font-semibold'}>Phone number</p>
						</div>
					</div>
					<div className={'w-[325px] ml-8'}>
						<Input
							className={'w-full'}
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
					</div>
				</div>
				<div className={'flex mt-4'}>
					<div className={'w-[194px] flex justify-end'}>
						<div className={'h-8 flex items-center'}>
							<p className={'font-semibold'}>Gender</p>
						</div>
					</div>
					<div className={'w-[325px] ml-8'}>
						<Input className={'w-full'} value={gender} onChange={e => setGender(e.target.value)} />
					</div>
				</div>
				<div className={'flex mt-4 pt-1.5'}>
					<div className={'w-[194px] flex justify-end'}>
						<p className={'font-semibold text-end leading-[18px]'}>
							Show account
							<br />
							suggestions on
							<br /> profiles
						</p>
					</div>
					<div className={'w-[325px] ml-8'}>
						<Checkbox
							label={
								'Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.'
							}
							checked={accountSuggestions}
							onChange={e => setAccountSuggestions(e.target.checked)}
						/>
					</div>
				</div>
				<div className={'flex mt-8 pt-1.5'}>
					<div className={'w-[194px] flex justify-end'}></div>
					<div className={'grow ml-8 flex'}>
						<Button type={'submit'}>Submit</Button>
						<Button variant={'link'} className={'ml-[4rem] px-0'}>
							Temporarily deactivate my account
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditProfile
