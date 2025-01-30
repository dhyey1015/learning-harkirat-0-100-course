
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blogs } from './pages/Blog'
import { SingleBlog } from './pages/SingleBlog'

function App( ) {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blog/:id" element={<SingleBlog />}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
