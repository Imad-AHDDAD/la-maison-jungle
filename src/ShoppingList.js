
import PlantItem from './PlantItem'
import { plantList } from './planlist'

function ShoppingList(props) {

    const list = plantList.reduce(
        (acc, plant) =>
            plant.category === props.category ? acc.concat(plant) : acc
    , [])

    return (
        <div className='shoppingList'>
            <div className='list-container'>
            {
                list.map((plant) => (
                    (<PlantItem handle={props.handle} produit={plant} key={plant.id} />)
                ))
            }
            </div>
        </div>
    )
}

export default ShoppingList