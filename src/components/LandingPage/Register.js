import React from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Register() {
    return (
    <div className='loginBox px-5'>
        <h1 className='text-danger py-4 fw-bold'>Register</h1>

        <div className='loginInput d-flex flex-column'>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='email'
                    placeholder="Email"
                    aria-label="Email"
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    type='password'
                    placeholder="Password"
                    aria-label="Password"
                />
            </InputGroup>
            <InputGroup className='py-1 mb-3'>
                <FormControl className='border border-danger bg-light'
                    placeholder="Full Name"
                    aria-label="Full Name"
                />
            </InputGroup>
            <Button variant="danger" className='px-3 py-2 mb-4'>Register</Button>
        </div>

        <center className='pb-4'>Already have an account? Klik <a className='text-decoration-none text-black fw-bold' href='#login'> Here</a></center>
    </div>
    );
}

export default Register;
