import React from 'react';
import Card from './Card';

const CardList = ({volcanoes, markedAsClimbed, unmarkedAsClimbed}) => {
	return(
		<>
			{volcanoes.map((user, i) => {
				return(
						 <Card 
						 key={volcanoes[i].id} 
						 id={volcanoes[i].id} 
						 num={volcanoes[i].id}
						 name={volcanoes[i].name} 
						 elevation={volcanoes[i].elevation}
						 lastEruption={volcanoes[i].lastEruption} 
						 location={volcanoes[i].location} 
						 status={volcanoes[i].status}
						 markedAsClimbed={markedAsClimbed}
						 unmarkedAsClimbed={unmarkedAsClimbed}
						 />
					);
			})
				}
    	</>
	);
}

export default CardList;