import React, { useEffect, useState } from 'react';
import TableData from './TableData';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const Tables = () => {
    const [info, setInfo] = useState([])
    // const {data:info,isLoading}=useQuery(['information'],()=>fetch('https://fast-hollows-08764.herokuapp.com/information')
    // .then(res => res.json())
    //  )

    // if (isLoading) {
    //     return<Loading></Loading>
    // }
    useEffect(() => {
        fetch('https://fast-hollows-08764.herokuapp.com/information')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [info]);
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            info?.map(i => <TableData
                                key={i._id}
                                i={i}
                                info={info}
                                setInfo={setInfo}
                            ></TableData>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Tables;