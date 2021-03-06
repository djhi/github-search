import { tw } from 'twind';
import { FollowersIcon } from './FollowersIcon';
import { DefaultAvatar } from './DefaultAvatar';

export const SearchResultItem = (props) => {
	const { item } = props;

	return (
		<article className={tw`flex my-4 py-4`}>
			<a href={`https://github.com/${item.login}`}>
				{!!item.avatarUrl ? (
					<img
						src={item.avatarUrl}
						className={tw`rounded-full w-16 h-16`}
						alt=""
					/>
				) : (
					<DefaultAvatar className={tw`rounded-full w-16 h-16`} />
				)}
			</a>
			<div className={tw`flex flex-col flex-grow ml-4`}>
				<header className={tw`flex items-center relative`}>
					{!!item.name && (
						<a href={`https://github.com/${item.login}`}>
							<h2 className={tw`mr-1 text-blue-600 hover:underline`}>
								{item.name}
							</h2>
						</a>
					)}
					<a href={`https://github.com/${item.login}`}>
						<span className={tw`text-gray-600 font-semibold`}>
							@{item.login}
						</span>
					</a>
					{typeof item.followers?.totalCount !== 'undefined' ? (
						<span
							title="Number of followers"
							className={tw`absolute flex items-center text-gray-600 font-semibold top-1 right-1`}
						>
							<FollowersIcon className={tw`w-4 h-4 mr-1 inline-block`} />
							{item.followers.totalCount}
						</span>
					) : null}
				</header>
				<section>
					<p className={tw`text-sm`}>
						{item.bio || 'No public profile bio available'}
					</p>
					{!!item.location && (
						<p className={tw`text-sm text-gray-600`}>{item.location}</p>
					)}
				</section>
			</div>
		</article>
	);
};
