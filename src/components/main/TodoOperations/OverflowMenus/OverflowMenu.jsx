import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import DeleteButton from './DeleteButton';
import RecordingButton from './RecordingButton';
import EditButton from './EditButton';

const OverflowMenu = ({ anchorRect, onClose, handleDelete, handleRecording, handleEdit }) => {
    const elRef = useRef(null);

    useEffect(() => {
        const handleOutside = (e) => {
            if (!elRef.current) return;
            if (!elRef.current.contains(e.target)) onClose();
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [onClose]);

    if (!anchorRect) return null;

    const top = anchorRect.top + window.scrollY;
    const left = anchorRect.right + window.scrollX + 8;

    const menu = (
        <ul
            ref={elRef}
            className="overflow-menu"
            style={{ position: 'absolute', top: `${top}px`, left: `${left}px`, zIndex: 1000 }}
        >
            <DeleteButton handleDelete={handleDelete} />
            <RecordingButton handleRecording={handleRecording} />
            <EditButton handleEdit={handleEdit} />
        </ul>
    );

    return createPortal(menu, document.body);
};

export default OverflowMenu;
