import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client"

export default function Test() {
    return <div>Root1</div>
}

const container = document.createElement('div');
document.body.appendChild(container);
createRoot(container!).render(<Test />);

