import React from 'react'
import SetTodoButton from './SetTodoButton'
import SortButton from './SortButton'

const TodoSettingUi = ({ handleSetButtonClick, setSortFormVisible, }) => {
    return (
        <div className='todo-setting-ui'>
            <SetTodoButton handleSetButtonClick={handleSetButtonClick} />
            <SortButton setSortFormVisible={setSortFormVisible} />
        </div>
    )
}

export default TodoSettingUi
