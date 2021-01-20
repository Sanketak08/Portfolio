import React, { Fragment, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const AboutMe = () => {
    const frontendGIF = useRef(null);
    const backendGIF = useRef(null);
    const programmingGIF = useRef(null);

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
    }, []);
    return (
        <Fragment>
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
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
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
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 domain text-center'>Programming</div>
                <div className='row'>
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
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
                                    </li>
                                    <li>
                                        <i className='fa fa-arrow-right mt-4'></i>{' '}
                                        I build responsive static web pages
                                        using HTML, CSS and Bootstrap
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div
                            className='programmingGIF'
                            ref={programmingGIF}
                        ></div>
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
