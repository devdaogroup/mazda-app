import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="bg-gray-500 p-4 rounded-xl w-[400px] h-[400px] flex flex-wrap border" onSubmit={handleSubmit(onSubmit)}>
            <input className="border p-2 rounded-xl w-full text-black flex" type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <input className="border p-2 rounded-xl w-full text-black flex" type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <input className="border p-2 rounded-xl w-full text-black flex" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input className="border p-2 rounded-xl w-full text-black flex" type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <select className="border bg-black p-2 rounded-xl w-full flex" {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>

             <div className="w-full flex justify-start">
                 <input className="border p-2 rounded-xl w-full flex" {...register("Developer", { required: true })} type="radio" value="Yes" />
                 <input className="border p-2 rounded-xl w-full flex" {...register("Developer", { required: true })} type="radio" value="No" />
             </div>

            <input className="border p-2 rounded-xl w-full flex" type="submit" />
        </form>
    );
}