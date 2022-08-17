import './App.css';
import Todo from './Componentes/Todo';

function App() {
  return (
    <div className="principal">
      
      <div className='contenedor-lista'>
        <h1>Lista de tareas</h1>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
