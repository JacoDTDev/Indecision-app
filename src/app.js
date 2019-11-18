const name = 'Jaco';
const jsx = <div>
    <h1>IndecisionApp</h1>
    <p>{name.toUpperCase()+'!'} !</p>
    <ol>
        <li>Item1</li>
        <li>Item2</li>
    </ol>
</div>;

ReactDOM.render(jsx, document.getElementById('app'));