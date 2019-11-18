// let show = 'Y';
// const onToggle = () =>{
//     if(show === "Y"){
//         show = 'N';
//     }else {
//         show ="Y";
//     }
//     renderApp();
// };
// const renderApp=()=>{
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{show==="Y"?'Hide details':'Show Details'}</button>
//             {(show==='Y'&& <p>Some details for you.</p>)}
//         </div>
//     );
//     ReactDOM.render(jsx,document.getElementById('app'));
// };
// renderApp();
//or
let show = false;
const onToggle = () =>{
    show=!show; //turning a false to true and true to false
    renderApp();
};
const renderApp=()=>{
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{show?'Hide details':'Show Details'}</button>
            {(show && <p>Some details for you.</p>)}
        </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
};
renderApp();