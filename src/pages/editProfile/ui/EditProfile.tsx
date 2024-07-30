import Button from '../../../shared/ui/Button/Button.tsx'
import { useUnit } from 'effector-react'
import store from '../../../app/store.ts'
import { FormEvent, useState } from 'react'
import { editUser } from '../../../features/user/editUser/editUser.ts'
import SettingNavBar from '../../../widgets/SettingNavBar.tsx'
import EditAvatar from './editFields/EditAvatar.tsx'
import EditName from './editFields/EditName.tsx'
import EditUsername from './editFields/EditUsername.tsx'
import EditWebsite from './editFields/EditWebsite.tsx'
import EditBio from './editFields/EditBio.tsx'
import EditEmail from './editFields/EditEmail.tsx'
import EditPhoneNumber from './editFields/EditPhoneNumber.tsx'
import EditGender from './editFields/EditGender.tsx'
import EditAccountSuggestions from './editFields/EditAccountSuggestions.tsx'

const EditProfile = () => {
	const [{ user }] = useUnit([store, editUser])

	const [name, setName] = useState<string>(user.name)
	const [newUsername, setNewUsername] = useState<string>(user.username)
	const [bio, setBio] = useState<string>(user.bio)
	const [email, setEmail] = useState<string>(user.email)
	const [phoneNumber, setPhoneNumber] = useState<string>(user.phoneNumber)
	const [gender, setGender] = useState<string>(user.gender)
	const [accountSuggestions, setAccountSuggestions] = useState(user.accountSuggestions)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		editUser({
			name,
			username: newUsername,
			bio,
			email,
			phoneNumber,
			gender,
			accountSuggestions,
			image: user.image,
			id: user.id,
		})
	}

	return (
		<div className={'rounded-[3px] border-[1px] flex'}>
			<SettingNavBar />
			<form onSubmit={handleSubmit} className={'grow pt-8'}>
				<EditAvatar username={user.username} image={user.image} />
				<EditName name={name} setName={setName} />
				<EditUsername username={user.username} newUsername={newUsername} setNewUsername={setNewUsername} />
				<EditWebsite />
				<EditBio bio={bio} setBio={setBio} />
				<EditEmail email={email} setEmail={setEmail} />
				<EditPhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
				<EditGender gender={gender} setGender={setGender} />
				<EditAccountSuggestions
					accountSuggestions={accountSuggestions}
					setAccountSuggestions={setAccountSuggestions}
				/>
				<div className={'flex mt-8 pt-1.5'}>
					<div className={'w-[194px] flex justify-end'}></div>
					<div className={'grow ml-8 flex'}>
						<Button type={'submit'}>Submit</Button>
						<Button variant={'link'} className={'ml-[4rem] px-0'}>
							Temporarily deactivate my account
						</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default EditProfile
