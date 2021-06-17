import React, { useState } from 'react';
import FormEntering from './FormEntering';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    function submitForm() {
        setIsSubmitting(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>
                {!isSubmitting ? (<FormEntering submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
        </>
    )
}

export default Form
