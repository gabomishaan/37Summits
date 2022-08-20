import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2 inline sb'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Volcanoes'
				onChange={searchChange}
			/>

		</div>

		


	);
}

export default SearchBox;