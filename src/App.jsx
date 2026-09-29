import { useState } from 'react'
import './App.css'

function App() {
  const [isNotOpen, setIsNotOpen] = useState(false)
   const boxStyle = {
    backgroundColor:"black",
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"30px"
   }  

  return (
    <div>
      {isNotOpen && <div style={boxStyle}></div>}
      <Button isNotOpen={isNotOpen} setIsNotOpen={setIsNotOpen} />
    </div>
  )
}

export default App

function Button ({setIsNotOpen}) {
  return(
    <div>
      <button onClick={() =>{ 
        setIsNotOpen(true)}} >Open Modal</button>
      <button onClick={() => setIsNotOpen(false)}>Close Modal</button>
    </div>
  )
}