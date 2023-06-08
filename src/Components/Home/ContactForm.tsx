import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
    name: string
    email: string
    message: string
    subscribe: boolean
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // Handle form submission logic here
        console.log(data)
    }

    return (
        <div className='p-4 min-h-page max-w-xl mx-auto'>
            <h4 className='text-base-content text-6xl tracking-wider mb-12 py-4 px-12 font-bold italic text-center'>
                <span className='text-red-500'>C</span>onta
                <span className='text-red-500'>c</span>t{' '}
                <span className='text-red-500'>U</span>s
            </h4>
            <form
                id='#contact'
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center'
            >
                <div className='mb-4'>
                    <label
                        className='block text-base-content font-bold mb-2'
                        htmlFor='name'
                    >
                        Name
                    </label>
                    <input
                        id='name'
                        type='text'
                        className='input input-bordered w-full'
                        placeholder='Enter your name'
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <p className='text-red-500 mt-2'>Name is required</p>
                    )}
                </div>
                <div className='mb-4'>
                    <label
                        className='block text-base-content font-bold mb-2'
                        htmlFor='email'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        className='input input-bordered w-full'
                        placeholder='Enter your email'
                        {...register('email', { required: true })}
                    />
                    {errors.email && (
                        <p className='text-red-500 mt-2'>Email is required</p>
                    )}
                </div>
                <div className='mb-4'>
                    <label
                        className='block text-base-content font-bold mb-2'
                        htmlFor='message'
                    >
                        Message
                    </label>
                    <textarea
                        id='message'
                        className='textarea textarea-bordered w-full'
                        placeholder='Enter your message'
                        rows={4}
                        {...register('message', { required: true })}
                    />
                    {errors.message && (
                        <p className='text-red-500 mt-2'>Message is required</p>
                    )}
                </div>
                <div className='mb-4'>
                    <label className='flex items-center'>
                        <input
                            type='checkbox'
                            className='checkbox checkbox-primary mr-2'
                            {...register('subscribe')}
                        />
                        <span className='text-base-content font-bold'>
                            Subscribe to newsletter
                        </span>
                    </label>
                </div>
                <button type='submit' className='btn btn-primary w-full'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm
