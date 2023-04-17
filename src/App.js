import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/index.js';
import Content from './components/content/index.js'
import Footer from './components/footer/index.jsx';
import Contact from './components/page/contact.js';
import Home from './components/page/Home.js'
import Store from './components/page/Store.js'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/Store' element={<Store />} />
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
