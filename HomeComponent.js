import React from 'react';
import ControlledCarousel from './CarouselComponent';
import CardComp from './CardsComponent';

function Home (props) {
    return(
      <div className="body">
            <p className="appname">Do You Know BTS? Do You Know BTS? Do You Know BTS?</p>  

            <ControlledCarousel /> 
            
            <CardComp /> 
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 

       </div>
    );
}

export default Home;