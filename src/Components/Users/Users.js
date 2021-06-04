import { getAllByAltText } from '@testing-library/dom';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Sheard/Navbar/Navbar';

const Users = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(users)
    const columns = [
        { title: "Name", field: "name", render: rowData => <Link to={`/user/${rowData.id}`}>{rowData.name}</Link> },
        { title: "Email", field: 'email' },
        { title: "Website", field: 'website' }
    ]
    return (
        <section className="container ">
            <Navbar></Navbar>
            <div className="mt-5">
                <MaterialTable title="All Users List"
                    data={users}
                    columns={columns}
                    options={{
                        pageSize: 2,
                        pageSizeOptions: [3, 5, { value: users.length, label: 'All' }]
                    }}
                />
            </div>
        </section>
    );
};

export default Users;