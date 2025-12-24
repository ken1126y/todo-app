import React, { useState } from 'react';
import CompletedButton from './CompletedButton';
import OptionButton from './OptionButton';
import OverflowMenu from './OverflowMenus/OverflowMenu';
import { v4 as uuidv4 } from 'uuid';

const TodoOperatingUI = ({ filteredDisplayDate, setEditVisible, setSaveIndex, isSortFormVisible, isFormVisible }) => {
    const [isOverflowMenuVisible, setOverflowMenuVisible] = useState(filteredDisplayDate.map(() => false));
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [menuIndex, setMenuIndex] = useState(null);

    function handleOptionButtonClick(index, event) {
        const rect = event.currentTarget.getBoundingClientRect();

        if (menuIndex === index) {
            setMenuIndex(null);
            setMenuAnchor(null);
            setOverflowMenuVisible((prev) => {
                const newOverflowMenuVisible = [...prev];
                newOverflowMenuVisible[index] = false;
                return newOverflowMenuVisible;
            });
            return;
        }
        setMenuIndex(index);
        setMenuAnchor(rect);
        setOverflowMenuVisible((prev) => {
            const newOverflowMenuVisible = [...prev];
            newOverflowMenuVisible[index] = true;
            return newOverflowMenuVisible;
        });
    }

    const handleDelete = (index) => {
        localStorage.removeItem(filteredDisplayDate[index].key);
        setMenuIndex(null);
        setMenuAnchor(null);
        setOverflowMenuVisible((prev) => {
            const newOverflowMenuVisible = [...prev];
            newOverflowMenuVisible[index] = false;
            return newOverflowMenuVisible;
        })
    };

    const handleRecording = (index) => {
        const newKey = `task-${uuidv4()}`
        const copyTask = { ...filteredDisplayDate[index], key: newKey };
        localStorage.setItem(newKey, JSON.stringify(copyTask));
        setMenuIndex(null);
        setMenuAnchor(null);
        setOverflowMenuVisible((prev) => {
            const newOverflowMenuVisible = [...prev];
            newOverflowMenuVisible[index] = false;
            return newOverflowMenuVisible;
        })
    }

    const handleEdit = (index) => {
        setEditVisible(true);
        setSaveIndex(index);
        setMenuIndex(null);
        setMenuAnchor(null);
        setOverflowMenuVisible((prev) => {
            const newOverflowMenuVisible = [...prev];
            newOverflowMenuVisible[index] = false;
            return newOverflowMenuVisible;
        })
    }

    const handleCompleted = (event, index) => {
        if (event.target.checked === true) {
            if (window.confirm('タスクを完了しますか？')) {
                setTimeout(() => {
                    localStorage.removeItem(filteredDisplayDate[index].key)
                }, 2000)
                setTimeout(() => {
                    window.alert('一件のタスクを完了しました。')
                }, 2000)
            } else {
                event.target.checked = false;
            }
        }
    }

    return (
        <div className="todo-operating-ui">
            {filteredDisplayDate.length === 0 ?
                (
                    <p className='no-task-dialog'>該当するタスクがありません</p>
                )
                :
                (
                    <ul className="todos">
                        {filteredDisplayDate.map((display, key) => (
                            <li className="todo" key={display.key}>
                                <div className="todo-date_left_box">
                                    <CompletedButton handleCompleted={(event) => {
                                        handleCompleted(event, key)
                                    }} />
                                    <div className="todo-date">
                                        <div className="todo-name">{display.taskname}</div>
                                        <div className="todo-detail">{display.detail}</div>
                                        <div className="todo-timelimit">{display.timelimit}</div>
                                    </div>
                                </div>
                                <div className="todo-date_right_box">
                                    <OptionButton handleOptionButtonClick={(e) => handleOptionButtonClick(key, e)} />

                                    {display.type === 'private' && (
                                        <div className="todo-types-copy private-copy">
                                            <div>・</div>
                                            <p>プライベート</p>
                                        </div>
                                    )}
                                    {display.type === 'work' && (
                                        <div className="todo-types-copy work-copy">
                                            <div>・</div>
                                            <p>仕事</p>
                                        </div>
                                    )}
                                    {display.type === 'school' && (
                                        <div className="todo-types-copy school-copy">
                                            <div>・</div>
                                            <p>学校</p>
                                        </div>
                                    )}
                                    {display.type === 'other' && (
                                        <div className="todo-types-copy other-copy">
                                            <div>・</div>
                                            <p>その他</p>
                                        </div>
                                    )}
                                    {isOverflowMenuVisible[key] && <OverflowMenu anchorRect={menuAnchor} onClose={() => { setMenuIndex(null); setMenuAnchor(null); setOverflowMenuVisible(filteredDisplayDate.map(() => false)); }} handleDelete={() => handleDelete(key)}
                                        handleRecording={() => handleRecording(key)} handleEdit={() => handleEdit(key)} />}
                                </div>
                            </li>
                        ))}
                    </ul>)}
        </div>
    );
};

export default TodoOperatingUI
