const Hero = () => {
    return (
        <div
            className='hero min-h-page bg-base-200 text-black'
            style={{ backgroundImage: 'url(/images/hero_section.jpg)' }}
        >
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <h4 className='text-black text-6xl tracking-wider mb-12 py-4 px-12 font-bold italic '>
                        bab<span className='text-red-500'>c</span>oo
                    </h4>
                    <p className='text-3xl mb-4'>
                        Restaurant babbco proposant une cuisine incroyable.
                    </p>
                    <p className='text-gray-800 text-lg mb-4'>
                        Possibilité de réservation tout au long de la journée
                        pour événements et réunions. Notre restaurant est
                        climatisé. Nos menus proposent une variété de
                        sandwiches, d'assiettes et de barbecue.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
