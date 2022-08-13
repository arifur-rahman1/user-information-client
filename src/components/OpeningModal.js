import React from 'react';
import { useForm } from 'react-hook-form';

const OpeningModal = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'https://fast-hollows-08764.herokuapp.com/information';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='grid justify-center mt-48'>

            <label for="my-modal-4" class="btn modal-button btn-info ">Open Form</label>


            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Enter Your Information</h3>
                    {/* adding form */}
                    <form className='grid grid-col justify-center gap-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
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
    );
};

export default OpeningModal;