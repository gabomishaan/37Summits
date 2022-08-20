import React from 'react';


const CardES = ({name, elevation, elevation_meters, lastEruption, location, id, num, status, markedAsClimbed, unmarkedAsClimbed}) => {
	if(!status){
	 return (

		<div className='tc card dib br3 pa3 ma2 grow bw2 shadow-1'>
			<h2> {name} </h2>
			<img  alt='Volcanoes' className='shadow-1' src={require(`../Photos/${name}.JPG`)} width={240} height={160} />
		 <div>
		 	  <p> <strong>Elevación:</strong> {elevation_meters}</p>
		 	  <p> <strong>Última Erupción:</strong> {lastEruption} </p>
		 	  <p> <strong>Ubicación:</strong> {location} </p>
		 	  <button className='addButton' onClick={() => markedAsClimbed(id)}>Mark as <br/> Climbed</button>
		 	 
			 
		 </div>
		</div>
	 );
	}else{
	 return (

		<div className='tc card cardClimbed dib br3 pa3 ma2 grow bw2 shadow-1'>
			<h2> {name} </h2>
			<img  alt='Volcanoes' className='shadow-1' src={require(`../Photos/${name}.JPG`)} width={240} height={160} />
		 <div>
		 	  <p> <strong>Elevación:</strong> {elevation_meters}</p>
		 	  <p> <strong>Última Erupción:</strong> {lastEruption} </p>
		 	  <p> <strong>Ubicación:</strong> {location} </p>
		 	  <button className='removeButton' onClick={() => unmarkedAsClimbed(id)}>Remove from Climbed List</button>
		 	 
			 
		 </div>
		</div>	
	 );	

	}
}

export default CardES