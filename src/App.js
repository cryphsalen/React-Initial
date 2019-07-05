import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

// Importando Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

import tasks from './sample/tasks.json';
console.log(tasks);


class App extends Component {
  state = {
    tasks: tasks
  }

  /* Método que conecta el app.js con TaskForm.js */
  // this.state.tasks.length -> Para hacerlo único
  agregarTarea = (title, descripcion) => {
    //console.log(title, description)
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: descripcion
    }
    console.log(newTask)
    // Para mostrar por pantalla una tarea nueva
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    console.log(...this.state.tasks)
  }

  /* Borrar elemento de un arreglo */
  deleteTask = id => {
    // .filter es una función propia de javascript. Devuelve un nuevo arreglo ignorando algunos datos, si el id coincide con un id del arreglo va a pasarlo 
    // a un nuevo arreglo, es decir, lo va a filtrar. Probar colocando === a la condición para entender mejor.
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    console.log(newTasks)
    // Se muestra por pantalla la acción de borrado
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    // Si el id del arreglo coincide entonces cambia el booleano.
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    // Se muestra por pantalla la acción del checkbox
    this.setState({tasks: newTasks})
  }

  render() {
    
    return <div>
    <Router>

      <Link to="/">Home</Link>
      <br />
      <Link to="/posts">Posts</Link>

      <Route exact path="/" render={() => {
        return <div><TaskForm addTask={this.agregarTarea}/>
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
        </div>
      }}>
      </Route>
      <Route path="/posts" component={Posts} />
    </Router>
    </div>
  }
}

export default App;
