import React from 'react';

const Sort = ({searchChange, sortByName, sortByElevation }) => {
	return (
		<div className="dropdown">
  			<button className="dropbtn pa3 ba b--green bg-lightest-blue gray">Sort By ▼</button>
  				<div className="dropdown-content pa3 ba b--green bg-lightest-blue gray">
   					<p onClick={() => sortByName()}>Name</p>
    				<p onClick={() => sortByElevation()}>Elevation</p>
  				</div>
		</div>
	);
}

export default Sort;