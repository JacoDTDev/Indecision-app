'use strict';

var name = 'Jaco';
var jsx = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'IndecisionApp'
    ),
    React.createElement(
        'p',
        null,
        name.toUpperCase() + '!',
        ' !'
    )
);

ReactDOM.render(jsx, document.getElementById('app'));
