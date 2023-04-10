import Nadvar from "./Componentes/Nadvar";
import ItemListContainer from "./Componentes/ItemListContainer";

/*
Componente: 

1) Sempre son funciones

2) Siempre la primera letra va en MAYUSCULA.

3) Siempre tienen un retorno(array, elemento, etc)

4) Toos pueden tener una sola salida a pantalla
*/

function App() {
  return(
  <>
    <Nadvar />
    <ItemListContainer titulo="Entrega numero 1"/> 
  </>
  )
}

export default App;
