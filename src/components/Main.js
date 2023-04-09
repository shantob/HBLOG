import React from 'react'
import { Link } from 'react-router-dom';
import AddPost from './AddPost';

const Main = () => {
    const a = [1, 10, 100, 1000, 10000];
    return (
        <div >
            <AddPost />
            {a.map(item => {
                return <div className="card bg-dark my-2">
                    <div className="card-body bg-dark">
                        <div className="d-flex row">
                            <div className="col-md-1">
                                <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '60px', width: '50px' }} />
                            </div>
                            <div className="col-md-6">
                                <h3 className='text-info mb-0'>Shanto Bepary</h3>
                                <span className='text-light mt-0'>27 minute ago</span>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-dark btn-lg mt-1">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-light'>Lorem ipsum dolor sit amet.</h2>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='w-100' />
                        <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eum? Exercitationem alias suscipit magnam eius quasi maiores quaerat aspernatur nihil. <Link to="#" className='text-light'> ... See more </Link> </p>
                        <div className="row">
                            <div className="col-md-4">
                                <button className='w-100 btn btn-dark'><i className="fa-sharp fa-regular fa-heart"></i></button>
                            </div>
                            <div className="col-md-4">
                                <button className='w-100 btn btn-dark'><i className="fa-solid fa-comment-dots"></i></button>
                            </div>
                            <div className="col-md-4">
                                <button className='w-100 btn btn-dark'><i className="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                        <input type="text" className='w-100 bg-dark text-light py-2 my-3 input' placeholder='type Your Comment' />
                        <div className="d-flex justify-context-center">
                            <h5 className='text-light'>Comment List</h5>
                        </div>
                        <div className='card bg-dark border'>
                            <div className="d-flex row">
                                <div className="col-md-1">
                                    <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '50px', width: '40px' }} />
                                </div>
                                <div className="col-md-3">
                                    <p className='text-info mb-0'>Shanto Bepary</p>
                                    <span className='text-light mt-0'>27 minute ago</span>
                                </div>
                                <div className="col-md-8">
                                    <div className="d-flex justify-content-end">
                                        <p className='text-light me-3'>No : 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae.</p>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-dark btn-lg mb-1">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </button>
                                    <button className='bg-dark text-info'><i className="fa-solid fa-share"></i></button>
                                </div>
                            </div>
                            <hr className='text-light' />
                            {/* reply */}
                            <div className="d-flex justify-content-end mt-2">
                                <div className="col-md-8">
                                    <div className="d-flex justify-content-end">
                                        <span className='text-secondary me-3'>Replyed by</span>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <img className="rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" style={{ height: '50px', width: '40px' }} />
                                </div>
                                <div className="col-md-3">
                                    <p className='text-info mb-0'>Addmin Akash</p>
                                    <span className='text-light mt-0'>19 minute ago</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <button className='bg-dark text-primary'><i className="fa-solid fa-share"></i></button>
                                    <button className="btn btn-dark btn-lg mb-1">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className="col-md-10">
                                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae.</p>
                                </div>
                            </div>
                            <hr className='text-light' />
                            <div className="my-2 ms-5 ">
                                <div className="row " >
                                    <div className="col-md-10">
                                        <input type="text" className='input text-light bg-dark w-100' placeholder='Write Your Reply' />
                                    </div>
                                    <div className="col-md-1 ">
                                        <button className='bg-dark p-auto m-auto text-light'>
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='card bg-dark border my-2'>
                            <div className="d-flex row">
                                <div className="col-md-1">
                                    <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU" alt="" style={{ height: '50px', width: '40px' }} />
                                </div>
                                <div className="col-md-3">
                                    <p className='text-info mb-0'>Shanto Bepary</p>
                                    <span className='text-light mt-0'>27 minute ago</span>
                                </div>
                                <div className="col-md-8">
                                    <div className="d-flex justify-content-end">
                                        <p className='text-light me-3'>No : 2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae.</p>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-dark btn-lg mb-1">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </button>
                                    <button className='bg-dark text-info'><i className="fa-solid fa-share"></i></button>
                                </div>
                            </div>
                            <hr className='text-light' />
                            {/* reply */}
                            <div className="d-flex justify-content-end mt-2">
                                <div className="col-md-8">
                                    <div className="d-flex justify-content-end">
                                        <span className='text-secondary me-3'>Replyed by</span>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <img className="rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" style={{ height: '50px', width: '40px' }} />
                                </div>
                                <div className="col-md-3">
                                    <p className='text-info mb-0'>Addmin Akash</p>
                                    <span className='text-light mt-0'>19 minute ago</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <button className='bg-dark text-primary'><i className="fa-solid fa-share"></i></button>
                                </div>
                                <div className="col-md-11">
                                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae.</p>
                                </div>
                            </div>
                            <hr className='text-light' />
                            <div className="my-2 ms-5 ">
                                <div className="row " >
                                    <div className="col-md-10">
                                        <input type="text" className='input text-light bg-dark w-100' placeholder='Write Your Reply' />
                                    </div>
                                    <div className="col-md-1 ">
                                        <button className='bg-dark p-auto m-auto text-light'>
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Main;