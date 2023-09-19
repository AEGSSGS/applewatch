import { useState } from 'react'
import Header from './components/page/Header'
import Section from './components/page/Section'
import Middle_page from './components/Middle_page'
import Second_page from './components/page/Second_page'
import Footer from './components/page/Footer'
import './App.css'

function App() {
  return (
    <>
        <Header/>
        <Section/>
        <Middle_page/>
        <Second_page/>
        <Footer/>
    </>
  )
}

export default App
