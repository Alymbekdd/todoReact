import React from 'react'

const TodoFooter = ({todoArray, setTodoArray, status, setStatus}) => {

    const changeStatus = (e) => {
        setStatus(e.target.value)
        
    }

    return (
        <div className='TodoFooter'>
            <div className='container'>
                <div className="TodoFooter__info">
                    <button value="all" onClick={((e) => changeStatus(e))}>задачи {(todoArray.filter((item) => item.isActive && !item.isDelited)).length}</button>
                    <button value="completed" onClick={(e) => changeStatus(e)}>Выполненные {todoArray.filter((item) => item.isCompleted && !item.isDelited).length}</button>
                    <button value="nocompleted" onClick={((e) => changeStatus(e))}>Не выполненные {todoArray.filter((item) => item.noCompleted && !item.isDelited).length}</button>
                    <button value="important" onClick={((e) => changeStatus(e))}>Важные {todoArray.filter((item) => item.isImportant && !item.isDelited).length}</button>
                    <button value="delited" onClick={((e) => changeStatus(e))}>Удаленные {todoArray.filter((item) => item.isDelited).length}</button>
                </div> 
            </div>
        </div>
    )
}

export default TodoFooter
