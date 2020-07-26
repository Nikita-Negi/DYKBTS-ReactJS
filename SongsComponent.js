import React from 'react';
import SongsCard from './SongsCardComponent';
import SongsButton from './SongsButtonComponent';


function Songs (props) {
	
    return(
      	<div className="songs-body">
            <p className="appname"> BTS Discography - BTS Discography - BTS Discography </p> 

            <SongsCard />

            <br /><br />
            <SongsButton videoId='rBG5L7UsUxA' /> 
            <SongsButton videoId='DOuhvBJqKVY'/> 
            <SongsButton videoId='hmE9f-TEutc'/> 
            <SongsButton videoId='xEeFrLSkMm8'/> 
            <SongsButton videoId='kTlv5_Bs8aw'/> 
            <SongsButton videoId='0lapF4DQPKQ'/> 
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       	</div>
    );
}

export default Songs;