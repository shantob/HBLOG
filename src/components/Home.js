import React from 'react'
import Main from './Main'
import Sideber from './Sideber'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    
                </div>
                <div className="col-md-8">
                    <Main />
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                    <Sideber />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home