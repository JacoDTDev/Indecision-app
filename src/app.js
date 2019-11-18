//object
const app = {
    title: 'Indecision App',
    subtitle: 'Place you live in the hands of a computer.',
    options:['one','two']
};//end of app

//function
function getSubtitle(value){
    if(value){
        return value
    }else {
        return undefined
    }
}//end of function

const template = <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0 ? 'Here are your options':'No options'}</p>
    <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
    </ol>
</div>;

ReactDOM.render(template, document.getElementById('app'));