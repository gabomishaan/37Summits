import React from 'react';
import CardES from './CardES';

const CardListES = ({volcanoes, markedAsClimbed, unmarkedAsClimbed}) => {
	return(
		<>
			{volcanoes.map((user, i) => {
				return(
						 <CardES 
						 key={volcanoes[i].id} 
						 id={volcanoes[i].id} 
						 num={volcanoes[i].id}
						 name={volcanoes[i].name} 
						 elevation={volcanoes[i].elevation}
						 lastEruptionES={volcanoes[i].lastEruptionES} 
						 location={volcanoes[i].location} 
						 status={volcanoes[i].status}
						 elevation_meters={volcanoes[i].elevation_meters}
						 markedAsClimbed={markedAsClimbed}
						 unmarkedAsClimbed={unmarkedAsClimbed}
						 />
					);
			})
				}
    	</>
	);
}

export default CardListES;