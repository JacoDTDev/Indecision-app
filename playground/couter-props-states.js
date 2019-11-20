class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.handelAddOne = this.handelAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handelAddOne(){
        this.setState((prevState)=>{
            return{count: prevState.count +1};
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{count: prevState.count -1}
        });
    }
    handleReset(){
        this.setState(()=>{
            return{count: 0}
        });
    }
    render(){
        return (
            <div>
                <h1> Count{this.state.count}</h1>
                <button onClick= {this.handelAddOne}>+1</button>
                <button onClick= {this.handleMinusOne}>-1</button>
                <button onClick= {this.handleReset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter/>, document.getElementById('app'));