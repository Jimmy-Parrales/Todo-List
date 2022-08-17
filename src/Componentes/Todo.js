import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, {Component}from "react";
import {v1 as uuid} from "uuid";
import Listass from './Lista';
class TodoList extends Component{
    constructor(){
        super();
        this.state={
            vacio:"",
            listas:[]
        };
    }

    componentWillMount(){
        this.setState({
            listas:[{
                id:uuid(),
                texto:"Joder",
                completed:false
            }]
        });
    }

    entradaCarga=parametro=>{
        const {target:{value}}=parametro;
        this.setState({
            vacio:value
        });
    }

    enviodatos=parametro=>{
        parametro.preventDefault();
        if(this.state.vacio.trim()!==""){//listas recibe muchos datos ya que sin el operador spread cae uno encima de otro
            //texto carga el vacio con el metodo entradaCarga
            this.setState({
                vacio:"",
                listas:[...this.state.listas,{
                    id:uuid(),
                    texto:this.state.vacio,
                    completed:false
                }]
            })
        }
    }

    /*agregar=parametro=>{
        const agrega=this.state.listas.find(insertar=>insertar.id===parametro);
        agrega.completed=true;
        this.setState({
            listas:[...this.state.listas,agrega]
        });
    }*/

    eliminar=parametro=>{
        const Listas=this.state.listas.filter((lista)=>lista.id!==parametro);
        this.setState({
            listas:Listas
        });
    }

    render(){
        return(
            <div>
                <h1>tareas</h1>
                <form onSubmit={this.enviodatos}>
                <input value={this.state.vacio} onChange={this.entradaCarga}/>
                </form>
                <Listass listas={this.state.listas} /*agregar={this.agregar}*/ eliminar={this.eliminar}/>
            </div>
            
        );
    }
 
}

export default TodoList;