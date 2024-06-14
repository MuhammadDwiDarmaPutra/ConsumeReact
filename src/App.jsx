import React from 'react'
import Case from './components/Case'

export default function App() {
  return (
    <Case>
    <div className='bg-gray-900 flex items-center justify-center min-h-screen'>
        <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
            <h4 className='text-white text-2xl'>Hello React</h4>
            <p className='text-lg text-gray-400 leading-relaxed'>A JavaScript library for building user interfaces</p>
        </div>
    </div></Case>
  )
}

// import { useState } from 'react'
// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/Card/Card'
// import Dashboard from './pages/Dashboard'
// import User from './pages/User'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Dashboard />}/>
//           <Route path='/user' element={<User />}/>
//         </Routes>
//       </BrowserRouter> */}
//       {/* <Dashboard />
//       <User /> */}
//       {/* <Card nama="babol" rombel="PPLG XI-5" rayon="Tajur 1" />
//       <Card nama="babol" rombel="PPLG XI-5" rayon="Tajur 1" />
//       <Card nama="babol" rombel="PPLG XI-5" rayon="Tajur 1" /> */}
//       {/* <Card>
//         ini adalah card 1
//       </Card>
//       <Card>
//         ini adalah card 2
//       </Card> */}
//       {/* <Card /> */}
//       {/* <div>
//       //   <h1>Babol</h1>
//       //   <i>* 58</i>
//       //   <a href="https://vitejs.dev" target="_blank">
//       //     <img src={viteLogo} className="logo" alt="Vite logo" />
//       //   </a>
//       //   <a href="https://react.dev" target="_blank">
//       //     <img src={reactLogo} className="logo react" alt="React logo" />
//       //   </a>
//       // </div>
//       // <h1>Vite + React</h1>
//       // <div className="card">
//       //   <button onClick={() => setCount((count) => count + 1)}>
//       //     count is {count}
//       //   </button>
//       //   <p>
//       //     Edit <code>src/App.jsx</code> and save to test HMR
//       //   </p>
//       // </div>
//       // <p className="read-the-docs">
//       //   Click on the Vite and React logos to learn more
//       // </p> */}
//     </>
//   )
// }

// export default App
