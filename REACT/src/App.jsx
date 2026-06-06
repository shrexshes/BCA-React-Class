import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greet from './components/Greet'
import PrimaryButton from './components/Buttons'

function App() {
  const name = "Ayush SHrestha"
  const element = <h1>Hello , {name}</h1>

  const isLoggedIn = false
  const value = <h1>{isLoggedIn ? "YOu can login" : "you cannot login"}</h1>

  return (
    <>
      JSX : Javascript XML is a syntax extension for javascript used in react to describe what the ui should look like . JSX allows you to write html like code inside javascript. It makes the code more readable and structured
      {element}

      {value}

      <Greet />

      Props
      In React , props are a way to pass data from a parent component to a child component. They allow component to be dynamic and resuable by enabling them to recieve inputs that can vary between uses. Props are read-only , meaning they cannot be modified by child component.

      <PrimaryButton title="Click me"/>
      <PrimaryButton title="GO to this link "/>


    </>
  )
}

export default App
