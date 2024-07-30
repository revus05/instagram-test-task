import { createEvent } from 'effector'
import { State } from '../../../app/store.ts'

export const follow = createEvent()

export const handleFollow = (state: State) => {
	if (!state.profile.isFollowed) {
		return {
			...state,
			isFollowed: true,
			followers: state.profile.followers + 1,
		}
	}
}
