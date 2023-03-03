const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const headerComponent = (
    <header>
        <h1>Hello from React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio tempore itaque ratione iusto earum aperiam praesentium error. Ipsum, molestias.</p>
    </header>
);


root.render(headerComponent);