import React from 'react'
import { Link } from 'react-router-dom';

const YourFriends = () => {
    const a = [1, 10, 100, 1000, 10000];
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-8">
                    <Link className='corcer-pointer link rounded-pill text-center' > <button className='text-light w-50 text-center my-3' style={{ backgroundColor: '#46194d' }}>Your Friends</button></Link>
                    <h2 className='text-light w-100' style={{ backgroundColor: '#2a1242' }}>All Friends <span className='text-danger ms-5 h2'>(50) </span></h2>
                    return <div className="row">
                        <div className="col">
                            {a.map(i => {
                                return <Link className='corcer-pointer link' key="{i}">
                                <div className="d-flex row rounded hover my-2 mx-1" style={{ backgroundColor: '#1b360b' }}>
                                    <div className="col-md-2">
                                        <img className="rounded-circle mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '50px', width: '40px' }} />
                                    </div>
                                    <div className="col-md-7 mt-6 ">
                                        <p className='text-info mb-0 mt-2'>Shanto Bepary</p>
                                        <span className='text-light mt-0'>10 Mitual Friends</span>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex justify-content-end">
                                            <p className='text-light me-3'>
                                                <button className='btn btn-dark mt-3'><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            })}
                        </div>
                        <div className="col">
                            {a.map(item => {
                                return <Link className='corcer-pointer link' key="{item}">
                                    <div className="d-flex row rounded hover my-2 mx-1" style={{ backgroundColor: '#1b360b' }}>
                                        <div className="col-md-2">
                                            <img className="rounded-circle mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '50px', width: '40px' }} />
                                        </div>
                                        <div className="col-md-7 mt-6 ">
                                            <p className='text-info mb-0 mt-2'>Shanto Bepary</p>
                                            <span className='text-light mt-0'>10 Mitual Friends</span>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="d-flex justify-content-end">
                                                <p className='text-light me-3'>
                                                    <button className='btn btn-dark mt-3'><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-end">
                    </div>
                </div>
            </div>
        </div >
    )
}

export default YourFriends