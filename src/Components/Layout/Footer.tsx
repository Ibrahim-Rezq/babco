import React from 'react'
import {
    FaFacebookSquare,
    FaHashtag,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer py-16 bg-neutral text-neutral-content items-center justify-evenly'>
            <div>
                <h4 className='text-base-content text-4xl tracking-wider font-bold italic'>
                    <FaHashtag className='inline text-red-500 -mt-2' />
                    bab<span className='text-red-500'>c</span>oo
                </h4>
                <p className='font-bold'>Babcoo resturant.</p>
                <p>Copyright © 2023 - Tous droits réservés.</p>
            </div>
            <div>
                <span className='footer-title'>Newsletter</span>
                <div className='form-control w-80'>
                    <label className='label'>
                        <span className='label-text'>
                            Enter your email address
                        </span>
                    </label>
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='username@site.com'
                            className='input input-bordered w-full pr-16'
                        />
                        <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-flow-col gap-4'>
                <a>
                    <FaTwitter className='text-3xl text-blue-400' />
                </a>
                <a>
                    <FaYoutube className='text-3xl text-red-600' />
                </a>
                <a>
                    <FaFacebookSquare className='text-3xl text-blue-600' />
                </a>
            </div>
        </footer>
    )
}

export default Footer
