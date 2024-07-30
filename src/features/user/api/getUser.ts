import { User } from '../../../entities/user/user.ts'
import image from '../../../../public/profile.jpeg'

const getUser = async () => {
	const authenticatedUser: User = {
		id: 1,
		username: 'upvox_',
		name: 'Upvox',
		bio: '',
		email: 'randommail@gmail.com',
		phoneNumber: '+91 971',
		gender: 'Prefer not to say',
		accountSuggestions: true,
		image,
	}

	return authenticatedUser
}

export default getUser
