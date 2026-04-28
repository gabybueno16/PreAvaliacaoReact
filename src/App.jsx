import './App.css'
import { Link, Route } from 'react-router-dom'
import Exercicio01 from './pages/exercicio01'
import Header from './components/Header'
import Home from



function App() {
  const [count, setCount] = useState(0)
  const [count, setCount] = useState(0)


  return (
    <>
    <Header />
    < Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Exercicio01/>}/>

    <Route path='/' element={<Home/>}/>
    <Route path="/" element={<Header/>}/>

    






    </Routes>
      
    </>
  )
}

export default App
