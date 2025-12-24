import React from 'react'

const EditButton = ({ handleEdit }) => {
    return (
        <li onClick={handleEdit}>編集</li>
    )
}

export default EditButton
