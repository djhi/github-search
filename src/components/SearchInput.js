import { useRef } from 'react';
import { useSearchFieldState } from 'react-stately';
import { useSearchField } from 'react-aria';
import { tw } from 'twind';

export const SearchInput = (props) => {
	const { label, placeholder } = props;
	const state = useSearchFieldState(props);
	const ref = useRef();
	const { labelProps, inputProps } = useSearchField(props, state, ref);

	return (
		<div className={tw`w-full flex flex-col`}>
			<label className={tw`px-4`} {...labelProps}>
				{label}
			</label>
			<input
				className={tw`p-4 border border-blue-600 rounded-lg outline-none ring(blue-600 focus-visible:2)`}
				{...inputProps}
				placeholder={placeholder}
				ref={ref}
			/>
		</div>
	);
};
