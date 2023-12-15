import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/component1';

export default function Test() {
    return (
        <div>
            Root2
            <MyComponent />
        </div>
    )
}

ReactDOM.render(<Test />, document.getElementById('root'));