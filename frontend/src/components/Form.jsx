import React from 'react'

const Form = () => {
  return (
    <div className='container my-6'>
      <h1 style={{ color: 'white', justifyContent: "center" }}>CONTACT <span style={{ color: 'orange' }}>US</span></h1>
      <br />
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <iframe className='img-fluid rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56514.19393222088!2d85.2353992486328!3d27.713052300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fde42abf81%3A0x4f5bfcf9f75f0772!2sTeafresho!5e0!3m2!1sen!2snp!4v1726044004388!5m2!1sen!2snp" style={{ width: "80%", height: "100%" }}></iframe>
        </div>
        <div className='col-md-6'>
          <form>
            <div className='col-6'>
              <div className="mb-3 signup-form">
                <i className='fa fa-user'></i>
                <input type="name" className="form-control login-form" name='name' id="name" aria-describedby="emailHelp" placeholder='Name' />
              </div>

              <div className="mb-3 signup-form">
                <i className='fa fa-envelope'></i>
                <input type="email" className="form-control login-form" name='email' id="email" aria-describedby="emailHelp" placeholder='Email' />
              </div>

              <div className="mb-3 signup-form" >
                <i className='fa fa-key'></i>
                <input type="string" className="form-control login-form" name='password' id="password" minLength={10} required placeholder='Phone number' />
              </div>

              <div className="mb-3 signup-form">
                <i className='fa fa-user'></i>
                <input type="name" className="form-control login-form" name='name' id="name" aria-describedby="emailHelp" placeholder='Any inquiry' />
              </div>
            </div>
            <button type="submit" className="mb-3 btn btn-warning">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
/* 
<div className='container'>
      <div className='col-md-6'>
        <p style={{ height: '150px', display: 'block' }}></p>
        <h3 style={{ whiteSpace: 'pre', width: "180px" }}> Get in Touch </h3>
        <p style={{ whiteSpace: 'pre-' }}>Feel free to submit a question or inquiry!</p>
      </div>

      <div className='col-md-6'>
        <form className="g-3">
          <div className='row offset'>
            <div className="col-3 ">
              <label htmlFor="inputNamel4" className="form-label">First name</label>
              <input type="name" className="form-control" id="inputNamel4" />
            </div>
            <div className="col-3 ">
              <label htmlFor="inputNamel4" className="form-label">Last name</label>
              <input type="name" className="form-control" id="inputNamel4" />
            </div>
            <div className="w-100"></div>
            <div className="col-6">
              <label htmlFor="inputEmai4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmai4" />
            </div>
            <div className="w-100"></div>
            <div className="col-6 col align-self-end">
              <label htmlFor="inputNumber" className="form-label">Phone number</label>
              <input type="text" className="form-control" id="inputNumber" />
            </div>
            <div className="w-100"></div>
            <div className="col-6">
              <label htmlFor="inputService" className="form-label">Service you're interested in</label>
              <input type="text" className="form-control" id="inputService" />
            </div>
            <div className="w-100"></div>
            <div className="col-6">
              <div className='mb-3'>
                <label htmlFor="inputService" className="form-label"></label>
                <input type="text" className="form-control" id="inputService" placeholder="Any inquiries you may have" />
              </div>
            </div>
            <div className='mb-3'>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
*/