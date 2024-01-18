import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState<null>()

  useEffect(() => {
      const ws = new WebSocket('ws://localhost:8080')
      
      ws.onopen = () => {
          console.log('WebSocket Connected')
      }

      ws.onmessage = (event) => {
          console.log('Message from server ', event.data)
          setData(event.data)
      };

      return () => {
          ws.close()
      }
  }, [])

  return (
    <>
        <p>Real-time Data: {JSON.stringify(data)}</p>
    </>
  )
}

export default App
