import React from 'react';

const SortES = ({searchChange, sortByName, sortByElevation }) => {
	return (
		<div className="dropdown">
  			<button className="dropbtn pa3 ba b--green bg-lightest-blue gray">Ordenar Por: ▼</button>
  				<div className="dropdown-content pa3 ba b--green bg-lightest-blue gray">
   					<p onClick={() => sortByName()}>Nombre:</p>
    				<p onClick={() => sortByElevation()}>Elevación:</p>
  				</div>
		</div>
	);
}

export default SortES;