
import './App.css';
import Header from './components/Header/Header';
import ListBooks from './components/Books/ListBooks';
import { Route, Routes } from 'react-router-dom';
import { BookPage } from './components/Books/BookPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='main_app'>
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path='/bookpage/:id' element={<BookPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
