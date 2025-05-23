import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import TodoList from './components/TodoList'

const AppContainer = styled.div`
  min-height: 100vh;
  background: #8fbce3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
function App() {

  return (
    <>
      <AppContainer>
        <TodoList/>
      </AppContainer>
    </>
  )
}

export default App
