import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    /* función de estilos */
    StyleCompleted(){
        return {
            fontSize: '50px',
            color: this.props.taske.done ? '#0B610B' : '#FE2E2E',
            textDecoration: this.props.taske.done ? 'line-through' : 'none'
        }
    }

    render() { 
        const {taske} = this.props;
        return <div className = "fondo">
            {taske.title} - 
            {taske.descripcion} - 
            {taske.done} - 
            {taske.id}

        <input type="checkbox" onChange={this.props.checkDone.bind(this, taske.id)} />
        
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, taske.id)}>x</button>

        <p style={this.StyleCompleted()}>
            {taske.title} - 
            {taske.descripcion} - 
            {taske.done} - 
            {taske.id}
        </p>
        </div>
    }
}

/* Estilizamos con javascript. No con css. */
const btnDelete = {
    fontSize: '36px',
    background: '#ea2017',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

/* propTypes sirve para validar el tipo de dato de la propiedad que se va a pasar como parámetro. Esto se puede probar pasando arreglo vacío y mirando la consola. */
Task.propTypes = {
    taske: PropTypes.object.isRequired
}

export default Task;
