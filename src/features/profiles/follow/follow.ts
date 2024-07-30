import { createEvent } from 'effector'
import { State } from '../../../app/store.ts'

export const follow = createEvent()

export const handleFollow = (state: State) => {
	if (!state.profile.isFollowed) {
		return {
			...state,
			profile: {
				...state.profile,
				isFollowed: true,
				followers: state.profile.followers + 1,
			},
		}
	}
	return state
}
