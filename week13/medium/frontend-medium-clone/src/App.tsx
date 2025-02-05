
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blogs } from './pages/Blog'
import { SingleBlog } from './pages/SingleBlog'
import { PublishBlog } from './pages/PublishBlog'

function App( ) {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/publish-blog" element={<PublishBlog />}/>
          <Route path="/blog/:id" element={<SingleBlog />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
