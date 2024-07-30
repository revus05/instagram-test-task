import { Post } from '../post/post.ts'

export type ProfileData = {
	username: string
	isVerified: boolean
	isFollowed: boolean
	posts: {
		quantity: number
		data: Post[]
	}
	followers: number
	following: number
	description: {
		name: string
		title: string
		links: Link[]
	}
	commonFollowers: CommonFollower[]
}

type Link = {
	id: number
	href: string
}

type CommonFollower = {
	id: number
	username: string
}
