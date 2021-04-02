import React, { Fragment, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import DevConnector from '../assets/img/DevConnector.png';

const Projects = () => {
    const projectGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: projectGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Project.json'),
        });
    }, []);

    return (
        <Fragment>
            <div className='container'>
                <div className='row pb-5'>
                    <div className='col-12 col-md-6'>
                        <div className='projectGIF' ref={projectGIF}></div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center col-12 col-md-6'>
                        <div className='pr-heading h1 text-center'>
                            Projects
                        </div>
                    </div>
                </div>
                {/* DevConnector */}
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <img
                            src={DevConnector}
                            alt='DevConnector'
                            className='pr-image'
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>DevConnector</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is the Web-App for the Developers. One can
                                build his profile and add posts, comments and
                                hit like.
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactjs'
                            ></div>
                            <div class='iconify' data-icon='logos:redux'></div>
                            <div
                                className='iconify'
                                data-icon='logos:nodejs-icon'
                            ></div>
                            <div
                                className='iconify mongo'
                                data-icon='cib:mongodb'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://devconnector08.herokuapp.com/'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* DevConnector */}
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>DevConnector</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is the Web-App for the Developers. One can
                                build his profile and add posts, comments and
                                hit like.
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactjs'
                            ></div>
                            <div class='iconify' data-icon='logos:redux'></div>
                            <div
                                className='iconify'
                                data-icon='logos:nodejs-icon'
                            ></div>
                            <div
                                className='iconify mongo'
                                data-icon='cib:mongodb'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://devconnector08.herokuapp.com/'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img
                            src={DevConnector}
                            alt='DevConnector'
                            className='pr-image'
                        />
                    </div>
                </div>
                {/* DevConnector */}
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <img
                            src={DevConnector}
                            alt='DevConnector'
                            className='pr-image'
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>DevConnector</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is the Web-App for the Developers. One can
                                build his profile and add posts, comments and
                                hit like.
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactjs'
                            ></div>
                            <div class='iconify' data-icon='logos:redux'></div>
                            <div
                                className='iconify'
                                data-icon='logos:nodejs-icon'
                            ></div>
                            <div
                                className='iconify mongo'
                                data-icon='cib:mongodb'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://devconnector08.herokuapp.com/'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* DevConnector */}
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <img
                            src={DevConnector}
                            alt='DevConnector'
                            className='pr-image'
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>DevConnector</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is the Web-App for the Developers. One can
                                build his profile and add posts, comments and
                                hit like.
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactjs'
                            ></div>
                            <div class='iconify' data-icon='logos:redux'></div>
                            <div
                                className='iconify'
                                data-icon='logos:nodejs-icon'
                            ></div>
                            <div
                                className='iconify mongo'
                                data-icon='cib:mongodb'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://devconnector08.herokuapp.com/'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default Projects;
