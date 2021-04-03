import React, { Fragment, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import DevConnector from '../assets/img/DevConnector.png';
import ReactNativeLibrary from '../assets/img/ReactNativeLibrary.png';
import Ideathon from '../assets/img/Ideathon.png';
import Istriwala from '../assets/img/Istriwala.jpg';

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
                <div className='row pr-header'>
                    <div className='col-12 col-md-6'>
                        <div className='projectGIF' ref={projectGIF}></div>
                    </div>
                    <div className='d-flex align justify-content-center col-12 col-md-6'>
                        <div className='pr-heading h1 text-center'>
                            Projects
                        </div>
                    </div>
                </div>
                {/* DevConnector */}
                <div className='row'>
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
                {/* Istriwala */}
                <div className='row mt-6'>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>Istriwala</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is mobile application made for laundry
                                owners. The app features basic necessities like
                                creating an order, filtering the orders over a
                                range of days and many more
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactts'
                            ></div>
                            <div class='iconify' data-icon='logos:redux'></div>
                            <div
                                className='iconify'
                                data-icon='logos:javascript'
                            ></div>
                            <div
                                class='iconify'
                                data-icon='logos:firebase'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://github.com/5iveD3velopers/EstreewalaApp'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                        <img
                            src={Istriwala}
                            alt='Istriwala'
                            className='pr-image-istri'
                        />
                    </div>
                </div>
                {/* React Native Library */}
                <div className='row mt-6'>
                    <div className='col-12 col-md-6'>
                        <img
                            src={ReactNativeLibrary}
                            alt='React Native Library'
                            className='pr-image'
                        />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>React Native Library</p>
                        </div>
                        <div>
                            <p className='lead'>
                                This is an Open-Source Project to make the open
                                source library for React Native, in which I've
                                implemented various ready to use components for
                                developers
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-reactts'
                            ></div>
                            <div
                                className='iconify'
                                data-icon='logos:typescript-icon'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://github.com/react-dev-community/utility-components'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Ideathon */}
                <div className='row mt-6'>
                    <div className='col-12 col-md-6'>
                        <div>
                            <p className='h1 title'>Ideathon</p>
                        </div>
                        <div>
                            <p className='lead'>
                                Created website for IDEATHON'20 - the Hackathon
                                conducted by PISB
                            </p>
                        </div>
                        <div className='icons'>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-html'
                            ></div>
                            <div
                                className='iconify'
                                data-icon='vscode-icons:file-type-css'
                            ></div>
                            <div
                                className='iconify'
                                data-icon='logos:bootstrap'
                            ></div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://hackathon-20-pisb.netlify.app/'>
                                <button type='button' className='pr-btn'>
                                    Link
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img
                            src={Ideathon}
                            alt='Ideathon'
                            className='pr-image'
                        />
                    </div>
                </div>
            </div>
            {/* More Projects */}
            <div className='d-flex justify-content-center mt-6'>
                <a
                    href='https://github.com/Sanketak08'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button type='button' class='custom-btn'>
                        More Projects
                    </button>
                </a>
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
