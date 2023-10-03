import React from 'react';

export const Input = ({ ...rest }) => {
	return (
		<input
			className="
    border
    border-gray-200
    rounded-md
    flex
    justify-between
    items-center
    my-1 px-2 py-1
    gap-2
    "
			{...rest}
		/>
	);
};
