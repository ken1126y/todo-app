import React from 'react'
import DateBar from './DateBar'
import { TodoTypes } from './TodoTypes'
import Operations from './TodoOperations/Operations'

const Main = ({ tasknameSearchQuery }) => {
    return (
        <div className="main">
            <DateBar />
            <TodoTypes />
            <Operations tasknameSearchQuery={tasknameSearchQuery} />
        </div>
    )
}

export default Main
