import React from 'react'
import UseForm from './UseForm'
import validate from './validateInfo'
import './Form.css'

const FormEntering = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = UseForm(submitForm,validate)


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Save your data by filling below</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input id='username' type='text' name='username' className='form-input' placeholder='Enter your username' value={values.username} onChange={handleChange}/>
                </div>
                {errors.username && <p>{errors.username}</p>}
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email' value={values.email} onChange={handleChange}/>
                </div>
                {errors.email && <p>{errors.email}</p>}
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange}/>
                </div>
                {errors.password && <p>{errors.password}</p>}
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm your Password
                    </label>
                    <input id='password2' type='password' name='password2' className='form-input' placeholder='Enter your password' value={values.password2} onChange={handleChange}/>
                </div>
                {errors.password2 && <p>{errors.password2}</p>}
                <button className="form-input-btn" type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormEntering
