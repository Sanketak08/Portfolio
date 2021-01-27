import React, { useState, useEffect, Fragment } from 'react';
import sanityClient from '../client';

const Education = () => {
    const [eduData, setEducation] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="education"]{
            qualification,school,from,to,percentage,cet
        }`
            )
            .then((data) => setEducation(data))
            .catch(console.error);
    }, []);
    return (
        <Fragment>
            <h1>Education</h1>
            {eduData &&
                eduData.map((education) => (
                    <Fragment>
                        <h3>{education.qualification}</h3>
                        <h3>{education.school}</h3>
                        <h3>{education.percentage}</h3>
                        <h3>{education.from}</h3>
                        <h3>{education.to}</h3>
                    </Fragment>
                ))}
        </Fragment>
    );
};

export default Education;
