import Navbar from "./components/Navbar"
import Button from "react-bootstrap/Button";

function App() {
 
  return (
    <>
      <Navbar />
      <h1 className='text-3xl underline'>Hola! Estoy actualizando mi pagina</h1>
      <Button as="input" type="button" value="Input" />{' '}

    </>
  )
}

export default App
