import { createEvent } from 'effector'
import { State } from '../../../app/store.ts'

export const unfollow = createEvent()

export const handleUnfollow = (state: State) => {
	if (state.profile.isFollowed) {
		return {
			...state,
			profile: {
				...state.profile,
				isFollowed: false,
				followers: state.profile.followers - 1,
			},
		}
	}
	return state
}
