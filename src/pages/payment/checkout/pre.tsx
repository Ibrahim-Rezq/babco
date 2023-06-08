import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'

const PreCheckout = () => {
    type FormValues = {
        rueNumber: number
        rueNom: string
        ville: string
        CodePostal: number
        phone: number
        moreDescription: string
    }

    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState
    const onSubmit = (data: FormValues) => {
        console.log('form submitted', data)
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-center font-semibold text-4xl text-primary my-12'>
                Adresse de livraison
            </h1>
            <form
                className='w-full max-w-lg flex-col mx-auto text-center'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text'>Numéro de rue</span>
                        <span className='label-text-alt'>(street number)</span>
                    </label>
                    <input
                        type='number'
                        id='rue_num'
                        {...register('rueNumber', {
                            required: {
                                value: true,
                                message: 'numero du rue est require',
                            },
                        })}
                        placeholder='XX'
                        className='input input-bordered w-full'
                    />
                </div>
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text'>Nom de rue</span>
                        <span className='label-text-alt'>(street)</span>
                    </label>
                    <input
                        type='text'
                        id='rue_nom'
                        {...register('rueNom', {
                            required: {
                                value: true,
                                message: 'numero du rue est require',
                            },
                        })}
                        placeholder='street'
                        className='input input-bordered w-full'
                    />
                </div>
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text'>Ville</span>
                        <span className='label-text-alt'>(city)</span>
                    </label>
                    <input
                        type='text'
                        id='ville'
                        {...register('ville', {
                            required: {
                                value: true,
                                message: 'Ville est require',
                            },
                        })}
                        placeholder='city'
                        className='input input-bordered w-full'
                    />
                </div>
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text'>Code postal</span>
                    </label>
                    <input
                        type='number'
                        id='CodePostal'
                        {...register('CodePostal', {
                            required: {
                                value: true,
                                message: 'Code postal est require',
                            },
                        })}
                        placeholder='XXXXXX'
                        className='input input-bordered w-full'
                    />
                </div>
                <div className='form-control w-full mb-4'>
                    <label className='label'>
                        <span className='label-text'>Numéro de téléphone</span>
                    </label>
                    <input
                        type='number'
                        id='phone'
                        {...register('phone', {
                            required: {
                                value: true,
                                message: 'phone est require',
                            },
                        })}
                        placeholder='012XXXXXXXX'
                        className='input input-bordered w-full'
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text text-left'>
                            Ajoutez des indications pour votre livreur ou
                            livreuse, dont vos codes d'entrée
                        </span>
                        <span className='label-text-alt'>(optionnel)</span>
                    </label>
                    <textarea
                        className='textarea textarea-bordered h-24'
                        placeholder='moreDescription'
                        {...register('moreDescription')}
                    ></textarea>
                </div>
                <select className='select w-full max-w-xs'>
                    <option disabled selected>
                        Pick from one of the aviliable postal codes
                    </option>
                    <option value='13001'>13001 (mars... 1)</option>
                    <option value='13002'>13002 (mars... 2)</option>
                    <option value='13003'>13003 (mars... 3)</option>
                    <option value='13004'>13004 (mars... 4)</option>
                    <option value='13005'>13005 (mars... 5)</option>
                </select>
                <button className='btn btn-primary my-10'>Commander</button>
            </form>
        </div>
    )
}

export default PreCheckout
