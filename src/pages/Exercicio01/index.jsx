import { Link } from "react-router-dom";
import './style.css'
import { useState } from "react";

function Exercicio01 () {
const [numero, setnumero] = useState("")
const [numero2, setnumero] = useState("")
const [resultado, setresultado] =useState()

function handleSubmit(event) {
event.preventDefault();
console.log(numero, numero2)
 setresultado(2+2);

  }
    return (
        <>

  <form onSubmit={handleSubmit}>
       <label>numero</label>
        <input
        type="number"
        value={numero}
        anChange={ (e) => setnumero(e.target.value) }
    
        />

        <label>numero2</label>
        <input
        type="number"
        value={numero2}
        anChange={ (e) => setnumero2(e.target.value) }
        />

        <p>{resultado}</p>
        <button type="submit">cadastrar</button>


        </form>
        <Link to ="/"></Link>        
        
        

        </>

 )
   }

export default Exercicio01