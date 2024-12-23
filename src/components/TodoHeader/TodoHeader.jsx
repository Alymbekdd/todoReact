import React from "react";

const TodoHeader = ({ todoText, setTodoText, todoArray, setTodoArray }) => {

    const addTodo = (text) => {
        if (text.trim() !== '') {
            setTodoArray([
                ...todoArray,
                {
                    text: text,
                    isCompleted: false,
                    noCompleted: false,
                    isDelited: false,
                    isActive: true,
                    isImportant: false,
                    isChange: false,
                    id: Math.round(Math.random() * 100),
                },
            ]);
            setTodoText("");
        }


    };

    const handleKeyDown = (event) => { 
        if(event.keyCode === 13){
          alert('Нажата клавиша Enter, можно творить чудеса!');
        }
      };

    return (
        <div className="TodoHeader">
            <div className="container">
                <div className="TodoHeader__name">
                    <h2>TODO APP</h2>
                    <div className="TodoHeader__inputs">
                        <input
                            placeholder="введите цели"
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)} type="text"
                            className="TodoHeader__inputs-input" />
                        <button onKeyDown={handleKeyDown} onClick={() => addTodo(todoText)} className="TodoHeader__inputs-btn">Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoHeader;

