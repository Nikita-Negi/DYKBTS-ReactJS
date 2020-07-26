import React, { useState} from 'react';
import Modal from 'react-modal';

function Footer(props) {
    const [modalIsopen, setmodalIsOpen]=useState(false);
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-3">
                    <h5>Developer Info</h5>
                    <button onClick={() => setmodalIsOpen(true)} className="infobutton"><i className="fa fa-info-circle"></i> Click Here</button>
                    <Modal isOpen={modalIsopen} onRequestClose={() => setmodalIsOpen(false)}>
                        <br />
                        <button onClick={() => setmodalIsOpen(false)} className="closemodalbutton"><i className="fa fa-window-close "></i></button>
                        <br /><br />
                        <h2>About the Developer</h2>
                        <br />
                        <p>Hello, my name is Nikita Negi. I created this react application out of my love for BTS.</p>
                        <p>Contact me by mailing to: nikitanegi765@gmail.com</p>
                        
                    </Modal>
                </div>

                <div className="col-7 col-sm-3">
                    <h5>BigHit Address</h5>
                    <address>
		              13-20 Dosan-daero<br />
		              16-gil Gangnam-gu Seoul<br />
		              06040 Korea, Republic of (South)<br />
		              <i className="fa fa-phone fa-lg"></i> : 82-2-3444-0105<br />
		              <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:bighit@ibighit.com">
                         bighit@ibighit.com</a>
                    </address>
                </div>

                <div className="col-12 col-sm-3 ">
                    <h5>Social Media</h5>
                        <a className="btn btn-social-icon btn-google" href="https://en.wikipedia.org/wiki/BTS"><i className="fa fa-google-plus"></i></a>&nbsp;&nbsp;
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/bangtan.official"><i className="fa fa-facebook"></i></a>&nbsp;&nbsp;
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/BTS_twt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter"></i></a>&nbsp;&nbsp;
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/ibighit"><i className="fa fa-youtube"></i></a>                    
                </div>
            </div>
            <br />
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="copyright">© Copyright 2020 Nikita Negi</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;