import { useUnit } from 'effector-react'
import store from '../../../app/store.ts'
import Footer from '../../../widgets/footer/ui/Footer.tsx'
import ProfileHeader from '../../../widgets/profileHeader/ui/ProfileHeader.tsx'
import Stories from '../../../widgets/stories/ui/Stories.tsx'
import Posts from '../../../widgets/posts/ui/posts.tsx'

const Profile = () => {
	const [{ profile }] = useUnit([store])

	return (
		<main className={'grow'}>
			<div className={'w-[935px] mx-auto pt-[1.875rem] px-5'}>
				<ProfileHeader profile={profile} />
				<Stories />
				<Posts posts={profile.posts.data} />
			</div>
			<Footer />
		</main>
	)
}

export default Profile
