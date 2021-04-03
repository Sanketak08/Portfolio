import React, { Fragment, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import ScrollTop from './utils/ScrollTop';

const AboutMe = () => {
    const frontendGIF = useRef(null);
    const backendGIF = useRef(null);
    const programmingGIF = useRef(null);
    const androidGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: frontendGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Frontend.json'),
        });
        lottie.loadAnimation({
            container: backendGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Backend.json'),
        });
        lottie.loadAnimation({
            container: programmingGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Programming.json'),
        });
        lottie.loadAnimation({
            container: androidGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Android.json'),
        });
    }, []);
    return (
        <Fragment>
            <ScrollTop />
            <div className='container'>
                <div className='heading h1 text-center'>What I Do?</div>
                <div className='mt-5 domain text-center'>Web Development</div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='h2 category mt-5'>
                            Frontend Technologies
                        </div>
                        <div className='description'>
                            <div className='icons mt-4'>
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
                                    data-icon='vscode-icons:file-type-sass'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='logos:javascript'
                                ></div>

                                <div
                                    className='iconify'
                                    data-icon='vscode-icons:file-type-reactjs'
                                ></div>
                                <div
                                    class='iconify'
                                    data-icon='logos:redux'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='logos:bootstrap'
                                ></div>
                            </div>
                            <div className='key-points mt-4'>
                                <ul>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I can also make my own components using
                                        ReactJS and make the website dynamic
                                        using Javascript
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='frontendGIF' ref={frontendGIF}></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='backendGIF' ref={backendGIF}></div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='h2 category mt-5'>
                            Backend Technologies
                            <div className='icons mt-4'>
                                <div
                                    className='iconify'
                                    data-icon='logos:nodejs-icon'
                                ></div>
                                <div
                                    className='iconify mongo'
                                    data-icon='cib:mongodb'
                                ></div>
                                <div
                                    class='iconify'
                                    data-icon='logos:firebase'
                                ></div>
                                <div
                                    class='iconify'
                                    data-icon='logos:postgresql'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='vscode-icons:file-type-npm'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='logos:yarn'
                                ></div>
                            </div>
                            <div className='key-points mt-4'>
                                <ul>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I'm good in setting up the database and
                                        fetching data using APIs
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I'm familiar with most of the node
                                        packages and their usage and also
                                        accessing them by npm or yarn
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 domain text-center'>
                    Android Development
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='description'>
                            <div className='h2 category mt-5'>Technologies</div>
                            <div className='icons mt-4'>
                                <div
                                    className='iconify'
                                    data-icon='vscode-icons:file-type-reactts'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='logos:typescript-icon'
                                ></div>
                            </div>
                            <div className='key-points mt-4'>
                                <ul>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I can make cross platform apps using
                                        React Native with great UI & UX
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I'm well-versed in using TypeScript to
                                        reduce the TypeError and reduce the time
                                        of development
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='androidGIF' ref={androidGIF}></div>
                    </div>
                </div>
                <div className='mt-5 domain text-center'>Programming</div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div
                            className='programmingGIF'
                            ref={programmingGIF}
                        ></div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='description'>
                            <div className='h2 category mt-5'>
                                Programming Languages
                            </div>
                            <div className='icons mt-4'>
                                <div
                                    className='iconify'
                                    data-icon='logos:c-plusplus'
                                ></div>
                                <div
                                    className='iconify'
                                    data-icon='logos:python'
                                ></div>
                            </div>
                            <div className='key-points mt-4'>
                                <ul>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I'm good in solving programming
                                        questions using C++ and Python, also
                                        I've interest in solving mathematical
                                        problems
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I'm trying to solve real world logical
                                        problems using OOPs and Data Structures
                                        and Algorithms
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default AboutMe;
