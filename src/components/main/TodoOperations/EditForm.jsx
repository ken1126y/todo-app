import React from 'react'
import { useState } from 'react';
const EditForm = ({ displayDate, saveIndex, handleCancel }) => {
    const [editDate, setEditDate] = useState(displayDate[saveIndex]);
    const handleChange = (e) => {
        setEditDate((prev) => {
            return (
                {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    const handleSubmit = () => {
        localStorage.setItem(editDate.key, JSON.stringify(editDate));
    }
    return (
        <form className="input-form" >
            <ul>
                <li className='todo-name-setting'>
                    <label htmlFor="taskname">タスク名</label>
                    <input type="text" id="taskname" name="taskname" required value={editDate.taskname} onChange={handleChange} />
                </li>
                <li className='todo-detail-setting'>
                    <label htmlFor="detail">タスクの説明</label>
                    <textarea id="detail" name="detail" required value={editDate.detail} onChange={handleChange}></textarea>
                </li>
                <li className='todo-timelimit-setting'>
                    <label htmlFor="timelimit">期限</label>
                    <input type="date" id="timelimit" name="timelimit" required value={editDate.timelimit} onChange={handleChange} />
                </li>
                <li className="todo-type-setting">
                    <h3>種類</h3>
                    <ul>
                        <li>
                            <label htmlFor="type-private">プライベート</label>
                            <input type="radio" id="type-private" name="type" value="private" required defaultChecked={'private' === editDate.type ? true : false} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="type-work">仕事</label>
                            <input type="radio" id="type-work" name="type" value="work" required defaultChecked={'work' === editDate.type ? true : false} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="type-hobby">学校</label>
                            <input type="radio" id="type-hobby" name="type" value="school" required defaultChecked={'school' === editDate.type ? true : false} onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="type-other">その他</label>
                            <input type="radio" id="type-other" name="type" value="other" required defaultChecked={'other' === editDate.type ? true : false} onChange={handleChange} />
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="button-container">
                <button type="submit" className="submit-button" onClick={handleSubmit}>追加</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>キャンセル</button>
            </div>
        </form >
    )
}

export default EditForm
