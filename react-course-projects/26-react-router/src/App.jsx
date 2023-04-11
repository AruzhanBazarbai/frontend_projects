import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// BrowserRputer- тип роутера которого будем использовать для браузера
// Route- это как строительный блок и для каждого юрл создаем отдельный  роут
// Routes- Route можно писать только внутри Routes
import NotFound from './components/NotFound';
import Contacts from './components/Contacts';
import About from './components/About';
import Home from './components/Home';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';

function App() {
  return <BrowserRouter>
  <div className="App">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<SingleCourse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
  
  </BrowserRouter> 
}

export default App;
