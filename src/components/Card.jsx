import React from 'react';


const Card = ({name, elevation, lastEruption, location, id, num, status, markedAsClimbed, unmarkedAsClimbed}) => {
	if(!status){
	 return (

		<div className='tc card dib br3 pa3 ma2 grow bw2 shadow-1'>
			<h2> {name} </h2>
			<img  alt='Volcanoes' className='shadow-1' src={require(`./Photos/${name}.JPG`)} width={240} height={160} />
		 <div>
		 	  <p> <strong>Elevation:</strong> {elevation}</p>
		 	  <p> <strong>Last Eruption:</strong> {lastEruption} </p>
		 	  <p> <strong>Location:</strong> {location} </p>
		 	  <button className='addButton' onClick={() => markedAsClimbed(id)}>Mark as <br/> Climbed</button>
		 	 
			 
		 </div>
		</div>
	 );
	}else{
	 return (

		<div className='tc card cardClimbed dib br3 pa3 ma2 grow bw2 shadow-1'>
			<h2> {name} </h2>
			<img  alt='Volcanoes' className='shadow-1' src={require(`./Photos/${name}.JPG`)} width={240} height={160} />
		 <div>
		 	  <p> <strong>Elevation:</strong> {elevation}</p>
		 	  <p> <strong>Last Eruption:</strong> {lastEruption} </p>
		 	  <p> <strong>Location:</strong> {location} </p>
		 	  <button className='removeButton' onClick={() => unmarkedAsClimbed(id)}>Remove from Climbed List</button>
		 	 
			 
		 </div>
		</div>	
	 );	

	}
}

export default Card