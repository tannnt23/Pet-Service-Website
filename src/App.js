import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/index.js';
import Content from './components/content/index.js'
import Footer from './components/footer/index.jsx';
import Contact from './components/page/contact.js';
import Home from './components/page/Home.js'
import FoodProduct from './components/page/FoodProduct.js'
import HygieneProduct from './components/page/HygieneProduct.js'
import TreatmentProduct from './components/page/TreatmentProduct.js';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home />} /> {/* trang chủ */}
        <Route exact path='/Contact' element={<Contact />} /> {/* trang liên hệ */}
        <Route exact path='/FoodProduct' element={<FoodProduct />} /> {/*  trang store thực phẩm thú cưng*/}
        <Route exact path='/HygieneProduct' element={<HygieneProduct />} /> {/*  trang store sản phẩm vệ sinh thú cưng*/}
        <Route exact path='/TreatmentProduct' element={<TreatmentProduct />} /> {/*  trang store sản phẩm điều trịthú cưng*/}
      </Routes>
    </div>
  )
}

export default App;































































































// import { useState } from "react";

// // useState

// const courses = [{
//   id: 1,
//   name: 'HTML, CSS'
// },
// {
//   id: 2,
//   name: 'Javasript'

// },
// {
//   id: 3,
//   name: 'ReactJS'
// }
// ]
// function App() {
//   const [checked, setChecked] = useState([])

//   console.log(checked);
//   const handleChecked = (id) => {
//     setChecked(pre => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         //unCheck
//         return checked.filter(item => item !== id)
//       }
//       else { return [...pre, id] }
//     })
//   }
//   const handleSubmit = () => {
//     console.log(checked);
//   }

//   return (
//     <div className="App" style={{ padding: 46 }}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input
//               type="checkbox"
//               checked={checked.includes(course.id)}
//               onChange={() => handleChecked(course.id)}
//             />
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit} >Register</button>
//     </div>
//   );
// }

// export default App;
