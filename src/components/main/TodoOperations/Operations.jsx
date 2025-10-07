import { useState, useEffect } from 'react';
import TodoOperatingUI from './TodoOperatingUI';
import InputForm from './InputForm';
import { v4 as uuidv4 } from 'uuid';
import EditForm from './EditForm';
import TodoSettingUi from './TodoSettingUi';
import TodoSortInputForm from './TodoSortInputForm';

const Operations = ({ tasknameSearchQuery }) => {
    const [taskDate, setTaskDate] = useState({
        taskname: '',
        detail: '',
        timelimit: '',
        type: '',
        key: ''
    });
    const [displayDate, setDisplayDate] = useState([]);

    function handleChange(e) {
        setTaskDate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit() {
        if (taskDate.taskname === '' || taskDate.detail === '' || taskDate.timelimit === '' || taskDate.type === '') {
            window.alert('全ての項目に入力してください。');
        } else {
            const newKey = `task-${uuidv4()}`;
            const newTask = { ...taskDate, key: newKey };

            localStorage.setItem(newKey, JSON.stringify(newTask));
            setDisplayDate((prev) => [...prev, newTask]);

            setTaskDate({
                taskname: '',
                detail: '',
                timelimit: '',
                type: '',
                key: ''
            });
        }
    }

    useEffect(() => {
        setDisplayDate(() =>
            Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)))
        );
        if (saveSortValue === 'jnAscendingOrder') {
            setDisplayDate((prev) =>
                prev.sort((a, b) =>
                    a.taskname.localeCompare(b.taskname, "ja")
                )
            )
        } else if (saveSortValue === 'jnDescendingOrder') {
            setDisplayDate((prev) =>
                prev.sort((a, b) =>
                    a.taskname.localeCompare(b.taskname, "ja")
                ).reverse()
            )
        } else if (saveSortValue === 'timelimitAscendingOrder') {
            setDisplayDate((prev) =>
                prev.sort((a, b) => new Date(a.timelimit) - new Date(b.timelimit))
            )
        } else if (saveSortValue === 'timelimitAscendingOrder') {
            setDisplayDate((prev) =>
                prev.sort((a, b) => new Date(a.timelimit) - new Date(b.timelimit)).reverse()
            )
        }
    });


    const filteredDisplayDate = displayDate.filter((task) =>
        task.taskname.startsWith(tasknameSearchQuery)
    );

    const [saveSortValue, setSaveSortValue] = useState('jnAscendingOrder')

    const ChangeSaveValues = (e) => {
        setSaveSortValue(
            e.target.value
        )
    }

    const [isFormVisible, setFormVisible] = useState(false);

    const [isEditVisible, setEditVisible] = useState(false);

    const [saveIndex, setSaveIndex] = useState();

    const [isSortFormVisible, setSortFormVisible] = useState(false);

    return (
        <div className="operations">
            <TodoOperatingUI filteredDisplayDate={filteredDisplayDate} setDisplayDate={setDisplayDate} setEditVisible={setEditVisible} setSaveIndex={setSaveIndex} isFormVisible={isFormVisible} isSortFormVisible={isSortFormVisible} />
            <TodoSettingUi handleSetButtonClick={() => {
                if (isSortFormVisible === false && isEditVisible === false) {
                    return setFormVisible(true);
                }
            }} setSortFormVisible={() => { if (isFormVisible === false && isEditVisible === false) { setSortFormVisible(true) } }} handleCancel={() => setFormVisible(false)} saveSortValue={saveSortValue} />
            {isFormVisible && (
                <InputForm
                    handleCancel={() => setFormVisible(false)}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}
            {isSortFormVisible && (
                <TodoSortInputForm setSortFormVisible={() => {
                    return setSortFormVisible(false)
                }} ChangeSaveValues={ChangeSaveValues} saveSortValue={saveSortValue} />
            )}
            {isEditVisible && (
                <EditForm displayDate={displayDate} saveIndex={saveIndex} handleCancel={() => setEditVisible(false)} />
            )}
        </div>
    );
};

export default Operations;
