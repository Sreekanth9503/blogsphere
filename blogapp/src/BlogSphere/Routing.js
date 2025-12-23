import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Blogs from './Blogs'
import Categories from './Categories'
import Authors from './Authors'
import ViewBlogs from './ViewBlogs'
import AuthorNavbar from './Author/AuthorNavbar'
import AuthorDashboard from './Author/AuthorDashboard'
import BlogDetails from './Author/BlogDetails'
import Login from './Login'
import Register from './Register'
import NewBlog from './Author/NewBlog'
import AdminDashboard from './admin/AdminDashboard'
import AdminView from './admin/AdminView'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/blogs' Component={Blogs} />
      <Route path='/blogs/category/:category' Component={Categories} />
      <Route path='/blogs/author/:author' Component={Authors} /> 
      <Route path="/viewblogs/:id" Component={ViewBlogs} />
      <Route path="/author/navbar" Component={AuthorNavbar} />
      <Route path="/author/dashboard/:author" Component={AuthorDashboard} />
      <Route path="/author/dashboard/:author/blogdetails/:title" Component={BlogDetails} />
      <Route path='/author/newblog/:title' Component={NewBlog}/>
      <Route path='/admin/dashboard' Component={AdminDashboard}/>
      <Route path='/admin/blog/:id' Component={AdminView}/>
    </Routes>
  )
}

export default Routing
