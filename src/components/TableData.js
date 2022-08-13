import React from 'react';

const TableData = ({ i }) => {
    const { _id, name, phoneNumber, email, hobbies } = i
    return (
        <>
            <tr>
                <th>{_id}</th>
                <td>{name}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
                <td>{hobbies}</td>
            </tr>
        </>



    );
};

export default TableData;