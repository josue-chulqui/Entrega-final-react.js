import { useEffect, useState} from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        getProducts()
        .then( res => {
            setProducts(res)
        })
        .catch( error => {
            console.log (error)
        })
    }, [])

    return (
        <div>
            <h2>{greetings}</h2>
            <ItemList products={products} />
        </div>
    )

}
export default ItemListContainer