import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const Tables = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/information')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);
    return (
        <div>
            <div class="overflow-x-auto mt-16">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Hobbies</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            info.map(i => <TableData
                            key={i._id}
                            i={i}
                            ></TableData>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Tables;