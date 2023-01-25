const ModalTodo =({abrir, close})=>{
    if(!abrir) return null
    return(
        <div>
            <p onClick={close}>X</p>
            <h1>modal todo</h1>
        </div>
    )
}

export default ModalTodo;