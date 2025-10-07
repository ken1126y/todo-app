import React from 'react'

const SearchBar = ({ setTasknameSearchQuery }) => {
    return (
        <input type='text' className="search-bar" placeholder='タスクを検索' onChange={(e) => {
            setTasknameSearchQuery(e.target.value)
        }}></input>
    )
}

export default SearchBar
