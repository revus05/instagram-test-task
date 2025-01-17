import { createEvent, createStore } from 'effector'
import { ProfileData } from '../entities/profile/profile.ts'
import getProfile from '../features/profiles/api/getProfile.ts'
import { follow, handleFollow } from '../features/profiles/follow/follow.ts'
import { handleUnfollow, unfollow } from '../features/profiles/unfollow/unfollow.ts'
import { User } from '../entities/user/user.ts'
import getUser from '../features/user/api/getUser.ts'
import { editUser, handleEditUser } from '../features/user/editUser/editUser.ts'

export const event = createEvent()

export type State = {
	profile: ProfileData
	user: User
}

const initialStore: State = {
	profile: await getProfile(),
	user: await getUser(),
}

const store = createStore<State>(initialStore)
	.on(follow, handleFollow)
	.on(unfollow, handleUnfollow)
	.on(editUser, handleEditUser)

export default store
