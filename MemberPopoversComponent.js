import React from 'react';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';

function MemberPopovers(props) {

    const popover1 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>RM</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover2 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>Jin</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover3 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>Suga</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover4 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>J-Hope</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover5 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>Jimin</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover6 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>V</strong>.
        </Popover.Content>
      </Popover>
    );
    const popover7 = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Hello!</Popover.Title>
        <Popover.Content>
          I am <strong>Jungkook</strong>.
        </Popover.Content>
      </Popover>
    );

    return(

            <div className="popover-container">        
                    <OverlayTrigger trigger="hover" placement="top" overlay={popover1}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover2}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover3}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover4}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover5}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover6}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>

                    <OverlayTrigger trigger="hover" placement="top" overlay={popover7}>
                        <Button variant="info" className="member-popovers"><i class="fa fa-heart" aria-hidden="true"></i></Button>
                    </OverlayTrigger>
            </div>
                   
                
    )
}

export default MemberPopovers;
