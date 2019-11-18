'use strict';

//object
var app = {
    title: 'Indecision App',
    subtitle: 'Place you live in the hands of a computer.',
    options: ['one', 'two']
}; //end of app

//function
function getSubtitle(value) {
    if (value) {
        return value;
    } else {
        return undefined;
    }
} //end of function

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    )
);

ReactDOM.render(template, document.getElementById('app'));
