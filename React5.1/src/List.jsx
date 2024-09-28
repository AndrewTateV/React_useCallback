import React, { useEffect } from 'react'

export default function List(props) {
const {getItems }=props

const[item , setItems]=React.useState([])

useEffect(()=>{
setItems(getItems(10))
console.log('Upate Items')
},[getItems])



  return (
    <div>

{
  item.map((item, key) => <div key={key}>
    <span>{item}</span>
  </div>)
}




    </div>
  )
}
