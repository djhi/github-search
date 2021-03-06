import { tw } from 'twind';
import { Button } from './Button';
import { SearchResultItem } from './SearchResultItem';

export const SearchResults = (props) => {
	const { hasNextPage, items, onLoadNextPage } = props;

	return (
		<>
			<ul className={tw`flex flex-col`}>
				{items.map((item) => (
					<li
						className={tw`border-b-1 last:border-b-0 border-gray-200`}
						key={item.id}
					>
						<SearchResultItem item={item} />
					</li>
				))}
			</ul>
			<div className={tw`flex`}>
				<Button disabled={!hasNextPage} onClick={onLoadNextPage}>
					Load more
				</Button>
			</div>
		</>
	);
};
