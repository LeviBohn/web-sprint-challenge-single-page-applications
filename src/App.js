import { Routes, Route } from 'react-router-dom'

import Form from './Form'

export default function App() {
  
  return (
    <div>
      <h1>BloomTech Eats</h1>
        <nav>
          <ul>
              <li>Home</li>
              <li>Order</li> 
          </ul>
        </nav>
        <Routes>
          <Route path='' element={<App />} />
          <Route path='/pizza' element={<Form />} />
        </Routes>
    </div>
  );
}
























// import { Routes, Route, Link, useNavigate } from 'react-router-dom'



// const App = () => {
//   return (
//     <>
//     <h1>BloomTech Eats</h1>
//     <nav>
//         <Link to="/">Home></Link>
//         <Link to="cats">Cats</Link>
//         <Link to="about">About</Link>
//     </nav>
//     <Routes>
//       <Route path="/" element{<Home />} />
//       <Route path="cats" element{<Cats />} />
//       <Route path="about" element{<About />} />
//     </Routes>    
//     </>
//   )
// }

// export default App;