import React, { useEffect } from 'react'
import Cart from './Cart'
import Categories from './Categories'
import ShoppingList from './ShoppingList'
import { useState } from 'react'

function Main() {

    const [plantCategory, setPlantCategory] = useState("classique")
    const handleCatChange = (e) => {
        setPlantCategory(e.target.value)
    }
    const [cartElements, setCartElements] = useState()
    useEffect(()=>{
        if(localStorage.getItem('cartElements')) {
            setCartElements(JSON.parse(localStorage.getItem('cartElements')))
        }
        if(!localStorage.getItem('total')) {
            localStorage.setItem('total', 0)
        }
    },[])
    const updateList = (e) => {
        setCartElements(JSON.parse(localStorage.getItem('cartElements')))
    }

    return (
        <div className='main'>
            <Cart elements={cartElements} />
            <div className='right-panel'>
                <Categories handleReset={updateList} categoryChoice={plantCategory} handle={handleCatChange} />
                <ShoppingList handle={updateList} category={plantCategory} />
            </div>
        </div>
    )
}

export default Main