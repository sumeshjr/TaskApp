import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Login from './components/Login';
import Register from './components/Register';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import ViewTodo from './components/ViewTodo';
import MyTask from './components/MyTask';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='' element={<Login/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>}/>
      <Route path='view' element={<ViewTodo/>} />
      <Route path='search' element={<SearchTodo/>} />
      <Route path='remove' element={<DeleteTodo/>} />
      <Route path='add' element={<AddTodo/>} />
      <Route path='mytask' element={<MyTask/>} />
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
