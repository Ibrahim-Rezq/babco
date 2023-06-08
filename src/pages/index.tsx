import { useState } from 'react'
import { Menu, Categories, Hero, MenuNew } from '../Components'
import { data as DataToShow } from '../utils/objects'
import ContactForm from '@/Components/Home/ContactForm'
const selectValues = DataToShow.map((data) => data.name)

const Home = () => {
    const [items, setItems] = useState(DataToShow)
    const filter = (nameToFilter: string) => {
        const filteredData = DataToShow.filter((dataItem) => {
            return dataItem.name === nameToFilter
        })
        setItems(filteredData)
    }

    return (
        <>
            <Hero />

            {/* <Categories values={selectValues} filter={filter} /> */}
            <div className='py-6 my-auto min-h-page'>
                <h4 className='text-base-content text-6xl tracking-wider mb-12 py-4 px-12 font-bold italic text-center'>
                    <span className='text-red-500'>M</span>enu
                </h4>
                {/*
                {items.map((item) => {
                    return <Menu key={item.name} items={item} />
                })}
            */}
                {items.map((item) => {
                    return <MenuNew key={item.name} items={item} />
                })}
            </div>
            <ContactForm />
        </>
    )
}

export default Home
