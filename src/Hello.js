import React from 'react';

function Hello({color, name, data}) {
    return <div style={{color}}>안녕하세요 {name}, {data}</div>
}

Hello.defaultProps = {
    name: "이름 없음",
    data: "data1"
}

export default Hello;