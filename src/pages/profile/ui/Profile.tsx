import { useUnit } from 'effector-react'
import store from '../../../app/store.ts'
import Footer from '../../../widgets/footer/ui/Footer.tsx'
import ProfileHeader from '../../../widgets/profileHeader/ui/ProfileHeader.tsx'
import Stories from '../../../widgets/stories/ui/Stories.tsx'
import Posts from '../../../widgets/posts/ui/posts.tsx'
import { follow } from '../../../features/profiles/follow/follow.ts'
import { unfollow } from '../../../features/profiles/unfollow/unfollow.ts'

const Profile = () => {
	const [{ profile }] = useUnit([store, follow, unfollow])

	return (
		<>
			<ProfileHeader profile={profile} />
			<Stories />
			<Posts posts={profile.posts.data} />
			<Footer />
		</>
	)
}

export default Profile
