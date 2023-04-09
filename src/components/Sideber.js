import React from 'react'
import { Link } from 'react-router-dom';

const Sideber = () => {
  return (
    <div className='text-light position-fixed card bg-dark px-5' style={{height: '100vh'}}>
      <div className="d-flex justify-content-start">
        <p className='h5'>Active Friends <span className='text-success h2'>*</span></p>
      </div>
      <ul className='text-light'>
        <li ><button className='btn '><Link className='link'>1: Shanto</Link></button></li>
        <li ><button className='btn '><Link className='link'>2: Akash</Link></button></li>
        <li ><button className='btn '><Link className='link'>3: Badhom</Link></button></li>
        <li ><button className='btn '><Link className='link'>4: Rajib</Link></button></li>
      </ul>
    </div>
  )
}

export default Sideber;