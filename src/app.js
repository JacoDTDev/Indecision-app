//object
const app = {
    title: 'Indecision App',
    subtitle: 'Place you live in the hands of a computer.',
    options:[]
};//end of app

//function
function getSubtitle(value){
    if(value){
        return value
    }else {
        return undefined
    }
}//end of function

const onFormSub = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value=''; //to clear the input
    }
    renderApp();
};

const renderApp = ()=>{
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'Here are your options':'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form onSubmit={onFormSub}>
            <input type='text' name = "option"/>
            <button>Add Option</button>
        </form>
    </div>;
    ReactDOM.render(template, document.getElementById('app'));
};
renderApp();