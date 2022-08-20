import React from 'react';

const SearchBoxES = ({searchChange}) => {
	return (
		<div className='pa2 inline sb'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Buscar Volcanes'
				onChange={searchChange}
			/>

		</div>

		


	);
}

export default SearchBoxES;