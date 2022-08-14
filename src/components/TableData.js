import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const TableData = ({ i, info, setInfo }) => {

    const [mailInfo, setMailInfo] = useState([])

    const { _id, name, phoneNumber, email, hobbies } = i


    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = (data, id) => {
        const url = `https://fast-hollows-08764.herokuapp.com/information/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    window.location.reload(false)
                };
            })
    };

    const information = getValues()

    const emialsender = (information, id) => {

        // 

        fetch(`https://fast-hollows-08764.herokuapp.com/findingid?id=${id}}`)
            .then(res => res.json())
            .then(result => {
                const infodata =(result[0]) 
                console.log(infodata)
                

                // 
                // post data to the new server
                fetch(`https://fast-hollows-08764.herokuapp.com/mailsender`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({infodata})

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

            }




            )



    }


    const handleDelete = (id) => {

        // delete task 
        const url = `https://fast-hollows-08764.herokuapp.com/information/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = info.filter(todo => todo._id !== id)
                    setInfo(remaining);
                }
            })

    }


    return (
        <>
            <tr>
                <th>
                    <label>
                        <input onClick={() => emialsender(information, _id)} type="checkbox" class="checkbox" />
                    </label>
                </th>
                <th>{_id}</th>
                <td>{name}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
                <td>{hobbies}</td>
                <label for="my-modal-5" class="btn modal-button btn-info btn-sm m-4 ">Update</label>
                <td><button onClick={() => handleDelete(_id)} class="btn btn-info btn-sm">Delete</button></td>
            </tr>

            <div>
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <label for="my-modal-5" class="modal cursor-pointer">
                    <label class="modal-box relative" for="">
                        <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Enter Your Information</h3>
                        {/* adding form */}
                        <form className='grid grid-col justify-center gap-4 mt-4' onSubmit={handleSubmit(data => onSubmit(data, _id))}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input placeholder='Enter Your Name' class="input input-bordered w-full max-w-xs"  {...register("name")} />
                            <input type="number" class="input input-bordered w-full max-w-xs" placeholder='Enter Your Phone Number' {...register("phoneNumber")} />
                            <input placeholder='Entr Your Email Address' class="input input-bordered w-full max-w-xs" {...register("email")} />
                            <input placeholder='Enter Your Hobbies' class="input input-bordered w-full max-w-xs"  {...register("hobbies")} />

                            <input className=' btn btn-info' type="submit" />
                        </form>
                        {/* form finish  */}
                    </label>
                </label>
            </div>
        </>



    );
};

export default TableData;