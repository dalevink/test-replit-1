import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='p-12 space-y-4'>
      <p>React ⚛️ + Vite ⚡️ + Tailwind 💨 + Replit 🌀</p>
      <button
        className='border rounded px-3 py-1 bg-blue-200 hover:bg-blue-300 active:bg-blue-400'
        onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <p>
        Edit <code>App.jsx</code> and save to test HMR uupdates.
      </p>
    </div>
  )
}

export default App
