import React from 'react';
import CardDesc from './CardDescComponent';
import MemberTabs from './MemberTabsComponent';
import MemberPopovers from './MemberPopoversComponent';

function KnowAbout (props) {
    return(
      <div className="knowabout-body">
            <p className="appname"> Know About BTS - Know About BTS - Know About BTS </p> 

            <CardDesc />

            <MemberTabs />

            <MemberPopovers />

            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 

       </div>
    );
}

export default KnowAbout;