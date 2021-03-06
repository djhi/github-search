import { tw } from 'twind';

export const Button = (props) => (
	<button
		className={tw`flex items-center p-4 mr-4 text-blue-600 ring(blue-600 focus-visible:2) border-1 border-transparent hover:(border-blue-600) rounded-md disabled:(text-gray-500 hover:(border-transparent))`}
		{...props}
	/>
);
