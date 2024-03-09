import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/NavBar/NavBar"
import "./components/NavBar/NavBar.css"
import "./components/CardWidget/logo.css"
import "./components/ItemListContainer/ItemListContainer.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import  { BrowserRouter, Routes, Route} from "react-router-dom"
import "./components/Item/Item.css"

function App() {
 
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Listado de Productos Filtrados"} />} />
      
      <Route  path="/" element={<ItemListContainer greetings={"Listado de Productos"} />} />
      
      <Route  path="/detail/:productId" element={<ItemDetailContainer />}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
