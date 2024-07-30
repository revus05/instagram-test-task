import Avatar from '../../../shared/ui/Avatar/Avatar.tsx'
import { Dots, MorePeople, VerificationCircle } from '../../../../public/icons.tsx'
import FollowButton from '../../followButton/ui/FollowButton.tsx'
import Button from '../../../shared/ui/Button/Button.tsx'
import numsFormatter from '../../../pages/profile/model/numsFormatter.ts'
import bigNumsFormatter from '../../../pages/profile/model/bigNumsFormatter.ts'
import { ProfileData } from '../../../entities/profile/profile.ts'

const ProfileHeader = ({ profile }: { profile: ProfileData }) => {
	const { username, isVerified, isFollowed, posts, followers, following, description, commonFollowers } = profile
	return (
		<div className={'ml-[4.5rem] flex'}>
			<Avatar />
			<div className={'ml-[6.25rem]'}>
				<div className={'flex items-center py-2'}>
					<h2 className="max-w-40 overflow-hidden text-ellipsis whitespace-nowrap text-xl">{username}</h2>
					{isVerified ? <VerificationCircle className={'ml-2'} /> : ''}
					<FollowButton isFollowed={isFollowed} username={username} />
					<Button className={'ml-2 cursor-pointer'} variant={'secondary'}>
						Message
					</Button>
					<Button className={'ml-2 cursor-pointer'} variant={'secondary'}>
						<MorePeople />
					</Button>
					<Button className={'ml-3 p-0'} variant={'empty'}>
						<Dots />
					</Button>
				</div>
				<div className={'flex mt-5'}>
					<p>
						<b>{numsFormatter(posts.quantity)}</b> posts
					</p>
					<p className={'ml-10'}>
						<b>{bigNumsFormatter(followers)}</b> followers
					</p>
					<p className={'ml-10'}>
						<b>{numsFormatter(following)}</b> following
					</p>
				</div>
				<div className={'mt-5 text-sm'}>
					<p className={'font-semibold'}>{description.name}</p>
					<p>{description.title}</p>
					{description.links.map(link => (
						<a key={link.id} href={`https://${link.href}`} className={'font-semibold text-[#00376B]'}>
							{link.href}
						</a>
					))}
				</div>
				<div className={'mt-3'}>
					<p className={'text-[#8E8E8E] text-xs'}>
						Followed by{' '}
						{commonFollowers.map(commonFollower => (
							<span key={commonFollower.id} className={'text-[#262626] font-medium'}>
								{commonFollower.username}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader
