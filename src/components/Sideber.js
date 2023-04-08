import React from 'react'
import { Link } from 'react-router-dom';

const Sideber = () => {
  return (
    <div className='text-light position-fixed'>
      <div className="d-flex justify-content-end">
        <p className='h6'>Active Friends <span className='text-success h2'>*</span></p>
      </div>
      <ul style={{color: 'rgb(30, 216, 30)'}}>
        <li ><Link className='link'>1: Shanto</Link></li>
        <li ><Link className='link'>2: Akash</Link></li>
        <li ><Link className='link'>3: Rajib</Link></li>
        <li ><Link className='link'>4: Badhom</Link></li>
      </ul>
    </div>
  )
}

export default Sideber;