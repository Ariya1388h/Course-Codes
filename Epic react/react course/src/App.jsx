const rootElement = document.getElementById('root')

const element = createElement(
    'div',
    { className: 'container' },
    'Hello World',
)

createRoot(rootElement).append(element)