import { Counter } from './features/counter/Counter';
import AddTodo from './components/todo/AddTodo';
import Nav from './components/navbar/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<AddTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
