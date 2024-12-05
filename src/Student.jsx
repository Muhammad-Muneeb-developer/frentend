import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Student = () => {
    const [student, setStudent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []); 

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create">
                <button className='btn btn-success mb-3'>Add +</button>
                </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        student.map((data, i)=>(
                            <tr key={i}>
                            <td>data.Name</td>
                            <td>data.Email</td>
                            <td>
                            <Link to={`updata/${data.ID}`} className='btn btn-primary'>Updata</Link>
                                <button className='btn btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                        ))
                     }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;
