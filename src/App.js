import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from '../src/Student';
import CreateStudent from '../src/CreateStudent';
import UpdataStudent from './UpdataStudent';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Student/>}></Route>
      <Route path='/create' element={<CreateStudent/>}></Route>
      <Route path='/updata/:id' element={<UpdataStudent/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
