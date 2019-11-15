const name = 'Jaco';
const jsx = <div>
    <h1>IndecisionApp</h1>
    <p>{name.toUpperCase()+'!'} !</p>
</div>;

ReactDOM.render(jsx, document.getElementById('app'));