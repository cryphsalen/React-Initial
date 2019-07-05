import React, { Component } from 'react';
import './Task.css'

// Un componente dentro de otro componente.
import Task from './Task'

class Tasks extends Component {
    /* Para el caso de un componente dentro de otro componente */
    // tasky es solo un nombre para iterar. Puede ser cualquier denominación.
    // taske es solo un nombre de propiedad. Puede ser cualquier nombre.
    render() {
        // Esta línea de código recorre las tareas y genera una única tarea para renderizarla. 
        return this.props.tasks.map(tasky => <Task taske={tasky} key={tasky.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}/>)

        // .map() actúa como for. Propio de Javascript puro.
        // Con la propiedad key se establece como id único el id del arreglo.
        // Se convierte en props en vez de state, porque el state ya está definido en App.js

        /* return this.props.tasks.map(e => <p key={e.id}>
        {e.title} - {e.descripcion} - {e.done} - {e.id}

        <input type="checkbox" />
        
        <button>x</button>
      </p>) */
    }
}

export default Tasks;