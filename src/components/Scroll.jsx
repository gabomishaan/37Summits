import React from 'react';
/*to allow scrolling while keepoing the searchbar on top*/
const Scroll = (props) => {
	return (
		<div style ={{overflowY: 'scroll', height: '60rem'}}> 
			{props.children}
		</div>
		);
};

export default Scroll;