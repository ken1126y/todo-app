import React from 'react'

const DateBar = () => {
    const now = new Date();
    const dd = now.getDay();
    const ddList = ['日', '月', '火', '水', '木', '金', '土'];
    const month = now.getMonth() + 1;
    const date = now.getDate();
    return (
        <div className="date-bar">
            <h3>今日</h3>
            <p>{ddList[dd]}：{month}月{date}日</p>
        </div>
    )
}

export default DateBar
