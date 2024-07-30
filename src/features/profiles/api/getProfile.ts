import { ProfileData } from '../../../entities/profile/profile.ts'
import getPosts from '../../posts/api/getPosts/getPosts.ts'

const getProfile = async () => {
	const initialProfile: ProfileData = {
		username: 'mkbhd',
		isVerified: true,
		isFollowed: true,
		posts: {
			quantity: 1861,
			data: await getPosts(),
		},
		followers: 4034534,
		following: 454,
		description: {
			name: 'Marques Brownlee',
			title: "I promise I won't overdo the filters.",
			links: [{ id: 1, href: 'mkbhd.com' }],
		},
		commonFollowers: [
			{
				id: 1,
				username: 'kurzgesagt',
			},
		],
	}

	return initialProfile
}

export default getProfile
