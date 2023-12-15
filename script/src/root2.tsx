import React from 'react';
import MyComponent from './components/component1';
import { createRoot } from 'react-dom/client';

export default function Test() {
    return (
        <div>
            Root2
            <MyComponent />
        </div>
    )
}

const container = document.createElement('div');
document.body.appendChild(container);
createRoot(container!).render(<Test />);
