import { Comment, Grid, Heart, Reels, Tagged } from '../../../../public/icons.tsx'
import bigNumsFormatter from '../../../pages/profile/model/bigNumsFormatter.ts'
import { Post } from '../../../entities/post/post.ts'

const Posts = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			<div className={'flex justify-center py-4 border-t-[1px] border-t-[#DBDBDB] mt-11'}>
				<div className={'group flex items-center active:opacity-50 cursor-pointer'}>
					<Grid /> <p className={'text-[11px] ml-1.5'}>POSTS</p>
				</div>
				<div className={'ml-[3.75rem] group flex items-center active:opacity-50 cursor-pointer'}>
					<Reels className={'stroke-[#8E8E8E] h-3 w-3'} />{' '}
					<p className={'text-[#8E8E8E] text-[11px] ml-1.5'}>REELS</p>
				</div>
				<div className={'ml-[3.75rem] group flex items-center active:opacity-50 cursor-pointer'}>
					<Tagged className={'stroke-[#8E8E8E]'} />{' '}
					<p className={'text-[#8E8E8E] text-[11px] ml-1.5'}>TAGGED</p>
				</div>
			</div>
			<ul className={'grid grid-cols-3 gap-1'}>
				{posts.map(post => (
					<li key={post.id} className={'relative group cursor-pointer'}>
						<img src={post.image} alt={`post${post.id}`} className={'group-hover:brightness-50'} />
						<div
							className={
								'opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex'
							}
						>
							<span className={'flex items-center text-white'}>
								<Heart className={'h-5 w-5 fill-white stroke-white'} />{' '}
								<p className={'ml-2 font-semibold'}>{bigNumsFormatter(post.likes)}</p>
							</span>
							<span className={'flex items-center ml-8 text-white'}>
								<Comment className={'h-4 w-4 fill-white stroke-white'} />{' '}
								<p className={'ml-2 font-bold'}>{bigNumsFormatter(post.comments)}</p>
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
