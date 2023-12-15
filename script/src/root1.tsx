import React from 'react';
import ReactDOM from 'react-dom';

export default function Test() {
    return <div>Root1</div>
}

ReactDOM.render(<Test />, document.getElementById('root'));