import Landing from './Component/Landing';
import Quiz from './Component/Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='flex flex-col w-screen px-9 py-5 min-h-screen bg-[#1A1A1A] justify-center items-center'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/quiz' element={<Quiz/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
