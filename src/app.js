class Indecision extends React.Component{
    render(){
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = ['one','two'];
        return <div>
            <Header title = {title} subTitle={subTitle}/>
            <Action/>
            <Options options = {options}/>
            <AddOption/>
        </div>
    }
}
class Header extends React.Component{
    render(){
        return <div>
            <h1>{this.props.title}</h1>
            <h2></h2>
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
            {this.props.options.map((option)=> <Option key={option} optionText={option}/> )}
        </div>
    }
}
class Option extends React.Component{
    render(){
        return <div>
            <ol>
                <li>{this.props.optionText}</li>
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