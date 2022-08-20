import React from 'react';
import './Navigation.css';



const NavigationES = ({language, onRouteChange, route, InHomepage, IsEnglish,  volcanoes, onLanguageChange}) => {
  const totalClimbed = [].concat(...volcanoes).reduce((a,   {status}) => status ? a + 1 : a+0, 0);


  if(InHomepage === true){
      return (
        <nav className='Nav Homepage' style={{display: 'flex', justifyContent: 'flex-end',}}>
          
          <h3 onClick={() => onLanguageChange('english')} className='Navigation link dim ejite underline pa3 pointer'>English</h3>
          <h3 onClick={() => onRouteChange('about')} className='Navigation link dim ejite underline pa3 pointer'>Información</h3>
          <h3 onClick={() => onRouteChange('climbedList')} className='Navigation link dim ejite underline pa3 pointer'>
          Volcanes Escalados {totalClimbed ? (
             <button className='badge'> {totalClimbed}/37</button>
            ):('')
          }
          </h3>
          
        </nav>
      );
  } else {
    return(
        <nav className='Homepage' style={{display: 'flex', justifyContent: 'flex-end'}}> 
          <h2 onClick={() => onRouteChange('home')} className='Navigation link dim ejite underline pa3 pointer'>Página de Inicio</h2>
        </nav>
    );
  }

}

export default NavigationES;