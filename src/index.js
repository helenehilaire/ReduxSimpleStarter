// React is used to create and manage our components while ReactDOM is used to
// interact with the DOM.
import React from "react";
import ReactDOM from "react-dom";



// Step 1:  Create a new component. This component should produce some HTML.
const App = () => {
    return <div>Hi!</div>;
}

// Step 2: Take this component's generated HTML and put it on the page in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));