import './App.css';
import Users from './components/users';

function App() {

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experiance</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        <Users></Users>
      </div>
    </section>
  );
}

export default App;
