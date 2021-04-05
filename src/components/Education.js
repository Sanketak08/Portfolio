import React, { Fragment, useEffect, useRef } from 'react';
import ScrollTop from './utils/ScrollTop';
import lottie from 'lottie-web';

const Education = () => {
    const projectGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: projectGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Education.json'),
        });
    }, []);
    return (
        <Fragment>
            <ScrollTop />
            <div className='container'>
                <div className='pr-header row'>
                    <div className='col-12 col-md-6'>
                        <div className='projectGIF' ref={projectGIF}></div>
                    </div>
                    <div className='col-12 col-md-6 ed-align'>
                        <div className='pr-heading h1 text-center'>
                            Education
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default Education;
