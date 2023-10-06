import React from 'react'
import { plantList } from './planlist'

function Categories(props) {

    const reset = (e) => {                                                  
      localStorage.clear() 
      props.handleReset();
    }

    const catList = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category)
    , [])
    
    return (
        <div className='categories'>
            <select value={props.categoryChoice} onChange={props.handle}>
                {
                    catList.map((cat) => (
                        (<option key={cat}>{cat}</option>)
                    ))
                }
            </select>
            <button onClick={reset}>Réinitialiser</button>
        </div>
    )
}

export default Categories