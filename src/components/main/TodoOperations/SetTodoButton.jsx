import React from "react";

const SetTodoButton = ({ handleSetButtonClick }) => {
    return (
        <div className="set-todo-button-box">
            <button className="set-todo-button" onClick={handleSetButtonClick}>
                ＋ タスクを追加
            </button>
        </div>
    );
};

export default SetTodoButton;

