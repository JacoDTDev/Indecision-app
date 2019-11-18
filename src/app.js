//object
const user = {
  name: 'Jaco',
  age: 26
};
const jsx = <div>
    <h1>IndecisionApp</h1>
    <p>{user.name.toUpperCase()+'!'} !</p>
    <ol>
        <li>name: {user.name}</li>
        <li>age: {user.age}</li>
    </ol>
</div>;

ReactDOM.render(jsx, document.getElementById('app'));