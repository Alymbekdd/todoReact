import React, { useState } from "react";
import cart from "../img/64022.png";
import vyp from "../img/checkmark_icon_125020.webp";
import nevyp from "../img/cross_icon_160913.webp";
import icon from "../img/pngtree-exclamation-sign-flat-black-color-icon-exclamation-sign-black-icon-important-vector-picture-image_9755937.png";
import reset from "../img/2618245.png";

const TodoMain = ({ todoArray, setTodoArray, status, setStatus }) => {

    const completeTodo = (id) => {
        setTodoArray(todoArray.map((item, idx) => {
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted ? !item.noCompleted : item.isCompleted,
                    isActive: !item.isActive
                }
            } else {
                return item
            }

        }))
    }

    const nocompleted = (id) => {
        setTodoArray(todoArray.map((item, idx) => {
            if (item.id === id) {
                return {
                    ...item,
                    noCompleted: !item.noCompleted ? !item.isCompleted : item.noCompleted,
                    isActive: !item.isActive
                }
            } else {
                return item
            }
        }))
    }

    const importantTodo = (id) => {
        setTodoArray(todoArray.map((item, idx) => {
            if (item.id === id) {
                return {
                    ...item,
                    isImportant: !item.isImportant,

                }
            } else {
                return item
            }
        }))
    }

    const delite = (id) => {
        setTodoArray(todoArray.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isDelited: !item.isDelited,
                    isActive: !item.isActive
                }
            } else {
                return item
            }
        }))
    }

    const removeTodo = (id) => {
        setTodoArray(todoArray.filter((item) => {
            return item.id !== id
        }))
    }

    return (
        <div className="TodoMain">
            <div className="container">
                <div className="TodoMain__spisok">
                    <ul>
                        {todoArray.length === 0 ? <p className="TodoMain__spisok-reklama">Здесь будут ваши задачи</p> :
                            todoArray.filter((item) => {
                                if (status === "completed") {
                                    return item.isCompleted && !item.isDelited
                                } else if (status === "all") {
                                    return !item.isCompleted && !item.isDelited && !item.noCompleted && !item.isDelited
                                } else if (status === "nocompleted") {
                                    return item.noCompleted && !item.isDelited
                                } else if (status === "important") {
                                    return item.isImportant && !item.isDelited
                                } else if (status === "delited") {
                                    return item.isDelited
                                }
                                else {
                                    return item && !item.isDelited
                                }
                            })

                                .map((el, idx) => (
                                    <li key={el.id}>
                                        <span className={`${el.isImportant ? "TodoMain__spisok-important" : ''}`}>
                                            {idx + 1})
                                            {el.text.length > 19  ? `${el.text.substr(0, 20)}...` : el.text}
                                        </span>
                                        <div className="TodoMain__spisok-icons">
                                            {status === "nocompleted" && status === "completed" || status === "all" ?
                                                <>
                                                    <img onClick={() => completeTodo(el.id)} className="TodoMain__spisok-vyp" src={vyp} alt="icon" />
                                                    <img onClick={() => nocompleted(el.id)} className="TodoMain__spisok-nevyp" src={nevyp} alt="icon" />
                                                    <img onClick={() => importantTodo(el.id)} className="TodoMain__spisok-icon" src={icon} alt="icon" />
                                                </> : ''
                                            }

                                            {status === "delited" ?
                                                <>
                                                    <img onClick={() => delite(el.id)} className="TodoMain__spisok-cart" src={reset} alt="icon" />
                                                    <img onClick={() => removeTodo(el.id)} className="TodoMain__spisok-cart" src={cart} alt="icon" />
                                                </> :

                                                <img onClick={() => delite(el.id)} className="TodoMain__spisok-cart" src={cart} alt="icon" />

                                            }
                                        </div>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoMain;
