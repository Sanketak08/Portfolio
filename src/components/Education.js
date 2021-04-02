import React, { useState, useEffect, Fragment } from 'react';
import sanityClient from '../client';
import Moment from 'react-moment';

import ScrollTop from './utils/ScrollTop';

const Education = () => {
    const [eduData, setEducation] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="education"]{
            qualification,school,location,from,to,percentage,percentageLabel,cet
        }`
            )
            .then((data) => setEducation(data))
            .catch(console.error);
    }, []);
    return (
        <Fragment>
            <ScrollTop />
            <div className='text-center h1 heading mt-4'>
                <span
                    class='iconify'
                    data-icon='cil:education'
                    data-inline='false'
                ></span>
                Education
            </div>
            {eduData &&
                eduData.map((education) => (
                    <Fragment>
                        <div className='container'>
                            <div className='row my-5'>
                                <div className='col-md-6 col-12 qualification-content d-flex justify-content-center align-items-center'>
                                    <div className='qualification card'>
                                        <div className=' lead card-body'>
                                            {education.qualification}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
                                    <div className='school-content'>
                                        <div className='school h2 m-0'>
                                            {education.school}
                                            {','}
                                            {education.location}
                                        </div>
                                        <div className='year'>
                                            <Moment format='YYYY'>
                                                {education.from}
                                            </Moment>
                                            {' - '}

                                            <Moment format='YYYY'>
                                                {education.to}
                                            </Moment>
                                        </div>
                                        <div className='marks h4 mt-3'>
                                            {education.percentageLabel}
                                            {' : '}
                                            {education.percentage}
                                            {education.qualification === 'BE'
                                                ? ' CGPA'
                                                : '%'}
                                        </div>
                                        {education.cet && (
                                            <div className='marks h4'>
                                                {'CET : '}
                                                {education.cet}
                                                {'%ile'}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default Education;
