import React from 'react'
import { Link } from 'react-router-dom';

const Messages = () => {
  const a = [1, 10, 100, 1000, 10000];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-8">
          <Link className='corcer-pointer link rounded-pill' to="#"> <button className='text-light w-50 text-center my-3' style={{ backgroundColor: '#46194d' }}>Massage Request (2) </button></Link>
          <h2 className='text-light w-100' style={{ backgroundColor: '#2a1242' }}>Massages<span className='text-danger ms-5 h2'>(5)</span></h2>
          {a.map(i => {
            return <Link className='corcer-pointer link'>
              <div className="d-flex row rounded hover my-2 mx-2" style={{ backgroundColor: '#2c2626' }}>
                <div className="col-md-1">
                  <img className="rounded-circle mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '50px', width: '40px' }} />
                </div>
                <div className="col-md-10 mt-3">
                  <p className='text-info mb-0'>Shanto Bepary</p>
                  <span className='text-light mt-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, quisquam.</span>
                </div>
                <div className="col-md-1">
                  <div className="d-flex justify-content-end">
                    <p className='text-light me-3'>
                      <button className="btn btn-dark mt-3 " type="button">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          })}
        </div>
        <div className="col-md-2">
          <div className="d-flex justify-content-end">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages