import React from 'react';

const InputForm = ({ handleCancel, handleChange, handleSubmit }) => {

    return (
        <form className="input-form" >
            <ul>
                <li className='todo-name-setting'>
                    <label htmlFor="taskname">タスク名</label>
                    <input type="text" id="taskname" name="taskname" required onChange={handleChange} />
                </li>
                <li className='todo-detail-setting'>
                    <label htmlFor="detail">タスクの説明</label>
                    <textarea id="detail" name="detail" required onChange={handleChange}></textarea>
                </li>
                <li className='todo-timelimit-setting'>
                    <label htmlFor="timelimit">期限</label>
                    <input type="date" id="timelimit" name="timelimit" required onChange={handleChange} />
                </li>
                <li className="todo-type-setting">
                    <h3>種類</h3>
                    <ul>
                        <li>
                            <label htmlFor="type-private">プライベート</label>
                            <input type="radio" id="type-private" name="type" value="private" onChange={handleChange} required />
                        </li>
                        <li>
                            <label htmlFor="type-work">仕事</label>
                            <input type="radio" id="type-work" name="type" value="work" onChange={handleChange} required />
                        </li>
                        <li>
                            <label htmlFor="type-hobby">学校</label>
                            <input type="radio" id="type-hobby" name="type" value="school" onChange={handleChange} required />
                        </li>
                        <li>
                            <label htmlFor="type-other">その他</label>
                            <input type="radio" id="type-other" name="type" value="other" onChange={handleChange} required />
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="button-container">
                <button type="submit" className="submit-button" onClick={handleSubmit}>追加</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>キャンセル</button>
            </div>
        </form >
    );
};

export default InputForm;


