import React from 'react'

const TodoSortInputForm = ({ setSortFormVisible, ChangeSaveValues, saveSortValue }) => {
    return (
        <div className='todo-sort-input-form'>
            <div className='container'>
                <h2>並び替え</h2>
                <button type="button" className="x-button" onClick={setSortFormVisible}>×</button>
            </div>
            <hr></hr>
            <ul>
                <li className="jn-ascending-order">
                    <label htmlFor='jn-as'>タスク名：昇順</label>
                    <input type="radio" id='jn-as' value="jnAscendingOrder" name="todoSort" onChange={ChangeSaveValues} checked={saveSortValue === "jnAscendingOrder"} />
                </li>
                <li className='jn-descending-order' >
                    <label htmlFor='jn-des'>タスク名：降順</label>
                    <input type="radio" id="jn-des" value="jnDescendingOrder" name="todoSort" onChange={ChangeSaveValues} checked={saveSortValue === "jnDescendingOrder"} />
                </li>
                <li className='timelimit-ascending-order'>
                    <label htmlFor='time-as'>日付：昇順</label>
                    <input type="radio" id='time-as' value="timelimitAscendingOrder" name="todoSort" onChange={ChangeSaveValues} checked={saveSortValue === "timelimitAscendingOrder"} />
                </li>
                <li className='timelimit-descending-order'>
                    <label type="time-des">日付：降順</label>
                    <input type="radio" id='time-des' value="timelimitDescendingOrder" name="todoSort" onChange={ChangeSaveValues} checked={saveSortValue === "timelimitDescendingOrder"} />
                </li>
            </ul>
        </div>

    )
}

export default TodoSortInputForm
