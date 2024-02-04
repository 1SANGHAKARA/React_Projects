import React from 'react'
import Header from './component/Header'
import Input from './component/Input'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Edit from './component/Edit'
import { FaEdit } from "react-icons/fa";

function App() {
  return (
  
    <>
    <Header></Header>
    <Input></Input>

    <Router>
      <Routes>
<Route exact path='/edit' element={<Edit></Edit>}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App