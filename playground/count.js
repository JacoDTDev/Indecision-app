let count = 0;
const addOne = () => {
  count++;
  renderCount();
};
const minusOne = () => {
    count--;
    renderCount();
};
const reset = () => {
  count = 0 ;
  renderCount()
;};

const renderCount = () => {
    const jsx = (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
};
renderCount();