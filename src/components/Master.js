import React from 'react'
import Main from './Main'
import Sideber from './Sideber'

const Master = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    
                </div>
                <div className="col-md-8">
                    <Main />
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-end">
                    <Sideber />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master