import React from 'react';
import { createRoot } from "react-dom/client"
import Component1 from './components/Component1';
import Component2 from './components/Component2';


/* Load single sample ---------------------------------------------------------------- */

function Main() {
    return <div>Main</div>
}


const mainContainer = document.querySelector('react-main');
if (mainContainer) {
    createRoot(mainContainer).render(<Main />);
}


/* Load multiple sample ------------------------------------------------------------ */

type ClassComponent = {
    className: string,
    Component: React.ComponentType<any>,
};

const classComponents: ClassComponent[] = [
    // This item load element like <div class="component1" data-data="{}"></div>
    {
        className: '.component1',
        Component: Component1,
    },
    {
        className: '.component2',
        Component: Component2,
    },
]

classComponents.forEach(({ className, Component }) => {
    const containers = document.querySelectorAll(className);
    containers.forEach(async container => {
        const data = JSON.parse(container.getAttribute('data-data')!);
        createRoot(container).render(<Component data={data} />);
    });
});
