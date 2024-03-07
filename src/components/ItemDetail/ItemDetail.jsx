import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({name, img, category, description, stock})=>{
 return (
    <article>
        <h1>{name}</h1>
        <img src={img} />
        <p>Categoria: {category}</p>
        <p>Descripcion:{description}</p>
        <ItemCount stock={stock}/>
    </article>
 )
 }

 export default ItemDetail