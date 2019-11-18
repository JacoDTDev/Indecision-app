'use strict';

//object
var user = {
    name: 'Jaco',
    age: 26
};
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
        user.name.toUpperCase() + '!',
        ' !'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'name: ',
            user.name
        ),
        React.createElement(
            'li',
            null,
            'age: ',
            user.age
        )
    )
);

ReactDOM.render(jsx, document.getElementById('app'));
