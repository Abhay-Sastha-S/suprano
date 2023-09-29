import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Portfolio } from './routes/Portfolio';
import AboutUsPage from './routes/AboutUsPage';
import {ContactUsPage} from './routes/ContactUsPage';
import BlogTemplate from './routes/BlogTemplate';
import Blogs from './routes/Blogs';
import { BlogsList } from './BlogsList';
import { Services } from './routes/Services';
import { hydrate, render } from "react-dom";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path='/AboutUs' element={<AboutUsPage />} />
        <Route path='/ContactUs' element={<ContactUsPage />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        {BlogsList.blogs.map((blog,index) => <Route key={index} path={`/${blog.url}`} element={<BlogTemplate content={blog} key={blog.id}/>} />)}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router />
);
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Router />, rootElement);
} else {
  render(<Router />, rootElement);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
