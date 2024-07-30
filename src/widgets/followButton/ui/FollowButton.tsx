import * as Dialog from '@radix-ui/react-dialog'
import Button from '../../../shared/ui/Button/Button.tsx'
import { ArrowDown } from '../../../../public/icons.tsx'
import ProfileImage from '../../../../public/profileImage.jpeg'
import { unfollow } from '../../../features/profiles/unfollow/unfollow.ts'
import { follow } from '../../../features/profiles/follow/follow.ts'

const FollowButton = ({ isFollowed, username }: { isFollowed: boolean; username: string }) => {
	return (
		<>
			{isFollowed ? (
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<Button className={`ml-7`} variant={'secondary'}>
							<p>Following</p>
							<ArrowDown className={'ml-4'} />
						</Button>
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay className="fixed bg-[rgba(0,0,0,0.9)] left-0 top-0 w-full h-svh" />
						<Dialog.Content className="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] rounded-xl">
							<Dialog.Title
								className={'flex flex-col items-center p-4 border-b-[1px] border-b-secondary'}
							>
								<img src={ProfileImage} alt="profile image" className={'w-14 h-14 rounded-full'} />
								<p className={'font-bold mt-2'}>{username}</p>
							</Dialog.Title>
							<Dialog.Description></Dialog.Description>
							<Dialog.Close asChild>
								<button
									aria-label="Close"
									className={'p-4 hover:bg-secondary-btn rounded-b-xl w-full'}
									onClick={() => unfollow()}
								>
									Unfollow
								</button>
							</Dialog.Close>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			) : (
				<Button
					className={`ml-7 cursor-pointer bg-primary active:opacity-50 transition hover:bg-primary-active border-0`}
					onClick={() => follow()}
				>
					Follow
				</Button>
			)}
		</>
	)
}

export default FollowButton
