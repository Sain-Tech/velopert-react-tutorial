import React from 'react';

function Hello({color, name, data, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}, {data}
        </div>
    );
}

Hello.defaultProps = {
    name: "이름 없음",
    data: "data1"
}

export default Hello;