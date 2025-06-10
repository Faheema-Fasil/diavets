import React from 'react'
import MainPage from './page/MainPage'
import { Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />

      </Routes>
    </>
  )
}

export default App
