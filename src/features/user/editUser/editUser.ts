import { createEvent } from 'effector'
import { State } from '../../../app/store.ts'
import { User } from '../../../entities/user/user.ts'

export const editUser = createEvent<User>()

export const handleEditUser = (state: State, updatedUserData: User) => ({
	...state,
	user: updatedUserData,
})
