import React from 'react';
import { createRoot } from "react-dom/client"

export default function Main() {
    return <div>Main</div>
}

const container = document.createElement('div');
document.body.appendChild(container);
createRoot(container!).render(<Main />);

