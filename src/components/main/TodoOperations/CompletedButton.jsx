import React from 'react'

const CompletedButton = ({ handleCompleted }) => {
    return (
        <label class="complited-button">
            <input type="checkbox" onChange={handleCompleted} />
            <span class="circle"></span>
            <span class="checkmark"></span>
        </label>

    )
}

export default CompletedButton
