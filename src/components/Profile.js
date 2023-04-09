import * as React from 'react'
import ProfilePost from './ProfilePost'
import AboutProfile from './AboutProfile'

function Profile() {
    const [activePanel, setActivePanel] = React.useState(0)
    let currentPanel = <ProfilePost />

    switch(activePanel){
       case 1:
        currentPanel = <AboutProfile />
       case 2:
        currentPanel = ''
        // Continue as needed
    }
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width={'300px'} height={'300px'} />
            </div>
            <div className="d-flex justify-content-center ms-5 my-3">
                <input type="file" className='text-light' name='image' />
            </div>
            <div className="row d-flex my-4">
                <div className="col-md-3"><button className="btn btn-dark text-light" type='submit' onClick={() =>setActivePanel (0)} >Posts</button></div>
                <div className="col-md-3"><button className="btn btn-dark text-light" type='submit' onClick={() =>setActivePanel (1)} >About</button></div>
                <div className="col-md-3"><button className="btn btn-dark text-light" type='submit' onClick={() =>setActivePanel (2)} >Photos & Videos</button></div>
                <div className="col-md-3"><button className="btn btn-dark text-light" type='submit' onClick={() =>setActivePanel (3)} >Activitice</button></div>
            </div>
        </div >
    )
}

export default Profile