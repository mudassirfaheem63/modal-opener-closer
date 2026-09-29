import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="app">
      <div className="panel">
        <div className="stage">{isOpen && <div className="orb" />}</div>
        <Button setIsOpen={setIsOpen} />
      </div>
    </main>
  )
}

export default App

function Button({ setIsOpen }) {
  return (
    <div className="actions">
      <button className="btn btn--primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <button className="btn" onClick={() => setIsOpen(false)}>
        Close Modal
      </button>
    </div>
  )
}