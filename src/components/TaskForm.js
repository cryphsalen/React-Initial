import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        titulo: '',
        description: ''
    }

    escucharBtn = e => {
        //console.log("Enviando...")
        // Imprime el último estado
        this.props.addTask(this.state.titulo, this.state.description)
        e.preventDefault();
    }

    /* e.target.value -> Imprime cada caracter que se vayan escribiendo en los inputs
    e.target.name -> rescatan los names definidos en los inputs.
    Ver en el método setState de React como rescatar los names de los inputs. */
    escucharInputs = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.escucharBtn}>
                <input type="text" name="titulo" placeholder="Escribe una tarea" onChange={this.escucharInputs} />
                <br /> <br />
                <textarea placeholder="Escribir descripción" name="description" onChange={this.escucharInputs}></textarea>
                <input type="submit" />
            </form>
          );
    }
}
 
export default TaskForm;