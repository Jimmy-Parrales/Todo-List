import React from "react";

const List=(props)=>(
    <ul>
        {props.listas.map((list,key)=>(
            <div>
            <li key={key}>{list.texto/*list.texto es el que agrega*/}</li>
            <button onClick={()=>props.eliminar(list.id)}>Eliminar</button>
            </div>
        ))}
    </ul>
)
export default List;

//<span onClick={/*()=>props.agregar(list.id)*/}>O</span>
//<span onClick={()=>props.eliminar(list.id)}></span>