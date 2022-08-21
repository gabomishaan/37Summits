import React from 'react';
import './ClimbedList.css';


const CLimbedListES = ({volcanoes, markedAsClimbed, unmarkedAsClimbed}) => {
  const totalElevation = [].concat(...volcanoes).reduce((a,   {elevation_number, status}) => status ? a + elevation_number*0.3048 : a+0, 0);
  const totalClimbed = [].concat(...volcanoes).reduce((a,   {status}) => status ? a + 1 : a+0, 0);
  

if(totalClimbed===37){
  let index=0;
  return(
    <>
      <h2 className='Climbed'>¡Felicidades!<br/>¡Has completado el reto 37 Cumbres!</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3 >{index}. {volcanoes[i].name}, {Math.round(volcanoes[i].elevation_number*0.3048).toLocaleString()} m</h3>

             </div>
          )}else{return(null)};
      })
        }

      <h3 className='Climbed'>Eso es una ganancia de elevación total de {Math.round(totalElevation).toLocaleString()} m, ¡Wow!</h3>
      </>
  )
}
else if(totalClimbed===1){
  let index=0;
  return(
    <>
      <h2 className='Climbed'>¡Felicidades! has logrado escalar {totalClimbed} de los 37 volcanes:</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3 className=''>{index}. {volcanoes[i].name},  {Math.round(volcanoes[i].elevation_number*0.3048).toLocaleString()} m</h3>

             </div>
          )}else{return(null)};
      })
        }
      </>
  )
}
else if(totalClimbed===0){
  return(
      <h2 className='Climbed'>¡Marca los volcanes como escalados en la página de inicio para mantener record de tu progreso!</h2>
    )
}
else{
    let index=0;
  return(
    <>
      <h2 className='Climbed'>¡Felicidades! has logrado escalar {totalClimbed} de los 37 volcanes:</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3>{index}. {volcanoes[i].name},  {Math.round(volcanoes[i].elevation_number*0.3048).toLocaleString()} m</h3>

             </div>
          )}else{return(null)};
      })
        }

      <h3 className='Climbed'>Eso es una ganancia de elevación total de {Math.round(totalElevation).toLocaleString()} m, ¡Wow!</h3>
      </>
  )
}
}

export default CLimbedListES;
