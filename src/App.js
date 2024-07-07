import './App.css';
import { Books } from './Books';
import image from './book.jpg';


function App() {
  return (
    <div className="header">
      <div className='container'>
      <h1>Какие книги ты хочешь прочитать?</h1>
      </div>
      <div className='container'>
        <Books />
      </div>
      <div className='container'>
      <img src={image} width="300px" alt='readBook'/>
      </div>
    </div>
  );
}

export default App;
