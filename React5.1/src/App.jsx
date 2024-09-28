import React,{useCallback} from 'react'
import List from './List'
export default function App() {

  const [number, setNumber] = React.useState(1)
  const [dark, setDark] = React.useState(false)
  
  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  
const getItems =useCallback((add=0)=>[number+add, (number+add)*2,(number+add)*3],[number])


  return (
    <div style ={theme}>

<button onClick={()=> setDark(dark =>!dark)}>

Toggle Theme to {dark? 'light':'dark'}

</button>
<input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
<List getItems={getItems}/>
    </div>
  )
}
