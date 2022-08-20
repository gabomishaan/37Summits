import React from 'react';
import './Navigation.css';



const Navigation = ({language, onRouteChange, route, InHomepage, IsEnglish,  volcanoes, onLanguageChange}) => {
  const totalClimbed = [].concat(...volcanoes).reduce((a,   {status}) => status ? a + 1 : a+0, 0);
 

  if(InHomepage === true){
      return (
        <nav className='Nav Homepage' style={{display: 'flex', justifyContent: 'flex-end',}}>
          
          <h3 onClick={() => onLanguageChange('spanish')} className='Navigation link dim ejite underline pa3 pointer'>Español</h3>
          <h3 onClick={() => onRouteChange('about')} className='Navigation link dim ejite underline pa3 pointer'>About</h3>
          <h3 onClick={() => onRouteChange('climbedList')} className='Navigation link dim ejite underline pa3 pointer'>
          Climbed Volcanoes {totalClimbed ? (
             <button className='badge'> {totalClimbed}/37</button>
            ):('')
          }
          </h3>
          
        </nav>
      );
  } else {
    return(
        <nav className='Homepage' style={{display: 'flex', justifyContent: 'flex-end'}}> 
          <h2 onClick={() => onRouteChange('home')} className='Navigation link dim ejite underline pa3 pointer'>Back to Homepage</h2>
        </nav>
    );
  }










}

export default Navigation;