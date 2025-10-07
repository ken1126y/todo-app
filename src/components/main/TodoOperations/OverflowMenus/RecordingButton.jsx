import React from 'react'

const RecordingButton = ({ handleRecording }) => {
    return (
        <li className='recording-button' onClick={handleRecording}>複製</li>
    )
}

export default RecordingButton
