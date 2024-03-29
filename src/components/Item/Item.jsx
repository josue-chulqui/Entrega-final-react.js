import {Link} from "react-router-dom"

const Item = ({id, name, img, category, price}) => {
    return (
        <div className="article-contenedor">
        <article>
            <h1>{name}</h1>
            <img src={img} />
            <p>Categoria: {category}</p>
            <h1>$ {price}</h1>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
             
        </article>
        </div>
    )
}
export default Item