import React from 'react'

export const TodoTypes = () => {

    return (
        <ul className='todo-types-list'>
            <li className="todo-types private">
                <div>・ </div>
                <p>プライベート</p>
            </li>
            <li className="todo-types work">
                <div>・ </div>
                <p>仕事</p>
            </li>
            <li className="todo-types school">
                <div>・ </div>
                <p>学校</p>
            </li>
            <li className="todo-types others">
                <div>・ </div>
                <p>その他</p>
            </li>
        </ul>
    )
}
