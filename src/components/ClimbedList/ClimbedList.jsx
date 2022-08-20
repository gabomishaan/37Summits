import React from 'react';
import './ClimbedList.css';


const CLimbedList = ({volcanoes, markedAsClimbed, unmarkedAsClimbed}) => {
  const totalElevation = [].concat(...volcanoes).reduce((a,   {elevation_number, status}) => status ? a + elevation_number : a+0, 0);
  const totalClimbed = [].concat(...volcanoes).reduce((a,   {status}) => status ? a + 1 : a+0, 0);
  

if(totalClimbed===37){
  let index=0;
  return(
    <>
      <h2 className='Climbed'>Congratulations! You have climbed all of the 37 volcanoes, what an accomplishment!</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3 >{index}. {volcanoes[i].name}, {volcanoes[i].elevation}</h3>

             </div>
          )}else{return(null)};
      })
        }

      <h3 className='Climbed'>That is a total elevation gain of {totalElevation.toLocaleString()}ft, wow!</h3>
      </>
  )
}
else if(totalClimbed===1){
  let index=0;
  return(
    <>
      <h2 className='Climbed'>Congratulations! You have climbed {totalClimbed} out of 37 volcanoes:</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3 className=''>{index}. {volcanoes[i].name},  {volcanoes[i].elevation}</h3>

             </div>
          )}else{return(null)};
      })
        }
      </>
  )
}
else if(totalClimbed===0){
  return(
      <h2 className='Climbed'>Mark volcanoes as climbed in the homepage to keep track of your progress!</h2>
    )
}
else{
    let index=0;
  return(
    <>
      <h2 className='Climbed'>Congratulations! You have climbed {totalClimbed} out of 37 volcanoes:</h2>
      {volcanoes.map((user, i) => {
        if(volcanoes[i].status){
          index++
        return(
             <div className='list1'>

             <h3>{index}. {volcanoes[i].name},  {volcanoes[i].elevation}</h3>

             </div>
          )}else{return(null)};
      })
        }

      <h3 className='Climbed'>That is a total elevation gain of {totalElevation.toLocaleString()} ft, very impressive!</h3>
      </>
  )
}
}

export default CLimbedList;
