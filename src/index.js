import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';


const Index = () => {



  return (
    <BrowserRouter>
      <Routes>

        <Route>
          <Route path='/' element={<App />} />
          {/* <Route path='/food' element={<Food/>}/> */}





        </Route>
      </Routes>
    </BrowserRouter>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)