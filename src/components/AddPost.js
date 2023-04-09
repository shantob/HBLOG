import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddPost() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='w-100 bg-dark'>
                <i className="fa-solid fa-plus"> </i> Add New Post
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} style={{ backgroundColor: '#2d2438' }}>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title className='text-center text-light'>Add A Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="light" onClick={handleClose} className='w-100'>
                        Add Post
                    </Button>
                    <Button variant="dark" onClick={handleClose} className='w-100'>
                        Cancle
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddPost;
