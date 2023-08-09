import React from 'react';
import './Separator.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Separator = (props) => {
    useEffect(() => {
        AOS.init({
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
        });
        AOS.refresh();
    }, []);
    AOS.init({

    });
    return (
        <div className=' m-4 separator_style'
            data-aos="fade-right"
            data-aos-offset="300"
            id={props.id}>
                <h4 className='text_style_separator'>{props.seccion}</h4>
        </div>
    );
};

export default Separator;