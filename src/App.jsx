import React from 'react';
import './App.css';

/* function Helloworld(props){
  console.log(props)
  return(
    <div id="saludo">
    <h3>{props.title}</h3>
    {props.showtext} 
    </div>
  )
} */

class Helloworld extends React.Component {
    state = {
        show: true
    }

    toggleShow = () =>{
        this.setState({show: !this.state.show})
    }

    render() {
        if(this.state.show){
        return ( <div id = "saludo" >
            <h3> { this.props.title } </h3>  
            { this.props.showtext }
            <button onClick={this.toggleShow}>Cambiar Estado</button> 
            </div>
        )
        }
        else{
            return <h3>No hay elementos
                <button onClick={this.toggleShow}>Cambiar Estado</button>
            </h3>
        }
    }
}

/* 3 enfoques para escribir lo mismo */

// La función flecha sirve para simplificar código, no usa la palabra reservada this y no usa tampoco return, ya que asume que devolverá algo. 
//const App = () => <div>This is my component: <Helloworld/></div>

// Escribir el mismo código pero con una clase 
// class App extends React.Component {
//   render() {
//     return <div>This is my component: <Helloworld/></div>
//   }
// }

/* Se invoca como etiqueta html. */
function App() {
    return ( 
        <div> This is my component:
        <Helloworld showtext = "Aprendiendo / Learning"
        title = "Título 1" / >
        <Helloworld showtext = "REACT"
        title = "Título 2" / >
        <Helloworld showtext = "desde cero"
        title = "Título 3" / >
        </div>
    );
}

export default App;