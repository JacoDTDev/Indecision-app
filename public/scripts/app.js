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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item1'
        ),
        React.createElement(
            'li',
            null,
            'Item2'
        )
    )
);

ReactDOM.render(jsx, document.getElementById('app'));
