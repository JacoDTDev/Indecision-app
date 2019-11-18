class Indecision extends React.Component{
    render(){
        return <div>
            <Header/>
            <Action/>
            <Options/>
            <AddOption/>
        </div>
    }
}
class Header extends React.Component{
    render(){
        return <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
    }
}
class Action extends React.Component{
    render(){
        return <div>
            <button>What should I do?</button>
        </div>
    }
}
class Options extends React.Component{
    render(){
        return <div>
            <Option/>
        </div>
    }
}
class Option extends React.Component{
    render(){
        return <div>
            <ol>
                <li>Item1</li>
                <li>Item2</li>
            </ol>
        </div>
    }
}
class AddOption extends React.Component{
    render(){
        return <div>
            <form>
            <input id='1' name='option'/>
            <button>Add option</button>
            </form>
        </div>
    }
}
const jsx = (
    <div>
        <Indecision/>
    </div>
);
ReactDOM.render(jsx ,document.getElementById('app'));