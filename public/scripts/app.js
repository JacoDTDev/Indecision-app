'use strict';

var count = 0;
var addOne = function addOne() {
    count++;
    renderCount();
};
var minusOne = function minusOne() {
    count--;
    renderCount();
};
var reset = function reset() {
    count = 0;
    renderCount();
};

var renderCount = function renderCount() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
renderCount();
