import React from 'react';

const DeleteButton = ({ handleDelete }) => {
    return (
        <li className="delete-button" onClick={handleDelete}>
            削除
        </li>
    );
};

export default DeleteButton;
