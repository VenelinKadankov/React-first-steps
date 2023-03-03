var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var headerComponent = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello from React'
    ),
    React.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio tempore itaque ratione iusto earum aperiam praesentium error. Ipsum, molestias.'
    )
);

root.render(headerComponent);