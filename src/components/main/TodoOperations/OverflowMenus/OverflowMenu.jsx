import React from 'react';
import DeleteButton from './DeleteButton';
import RecordingButton from './RecordingButton';
import EditButton from './EditButton';

const OverflowMenu = ({ handleDelete, handleRecording, handleEdit }) => {
    return (
        <ul className="overflow-menu">
            <DeleteButton handleDelete={handleDelete} />
            <RecordingButton handleRecording={handleRecording} />
            <EditButton handleEdit={handleEdit} />
        </ul>
    );
};

export default OverflowMenu;
