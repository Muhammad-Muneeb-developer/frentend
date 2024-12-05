import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        axios.post('http://localhost:8081/create',{name,email})
        .then(res=>{
            console.log(res);
            navigate('/');

        }).catch(err=>console.log(err));
      
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={handleNameChange}
                            placeholder='Enter Name'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Enter Email'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateStudent;
