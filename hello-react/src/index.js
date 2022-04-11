import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css"

// Using useState

function App() {
    const [status, setStatus] = useState("Open");
    return (
        <div>
            <h2>Status: {status}</h2>
            <button onClick={() => setStatus("Open")}>
                Open
            </button>
            <button onClick={() => setStatus("Back in 5")}>
                Break
            </button>
            <button onClick={() => setStatus("Closed")}>
                Closed
            </button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// ARRAY DESTRUCTION --> 'first'/'second'/'third' are just variable names
// const [, , fruit] = [
//     "popcorn", 
//     "pretzels", 
//     "pineapple"
// ];

// console.log(fruit)

// CONDITIONAL RENDERING
// function Lake({ name }) {
//     return (
//         <div>
//             <h1>Visit {name}!</h1>
//         </div>
//     );
// }

// function SkiResort({ name }) {
//     return (
//         <div>
//             <h1>Visit {name} Resort!</h1>
//         </div>
//     );
// }

// function App(props) {
//     return (
//         <div>
//             {props.season === "summer" ? (
//                 <Lake name="Cheeks Lake" />
//             ) : props.season === "winter" ? (
//                 <SkiResort name="Moutain Jump" />
//             ) : (
//                 <h1>
//                     Come back in the winter or summer!
//                 </h1>
//             )}
//         </div>
//     );
// }

// ReactDOM.render(
//     <App season="summer"/>,
//     document.getElementById("root")
// );

// REACT FRAGMENTS
// function Lake() {
//     return (
//         <h1>Lake!</h1>
//     );
// }

// function SkiResort() {
//     return (
//         <h1>Ski Resort!</h1>
//     );
// }

// function App() {
//     return (
//         <React.Fragment>
//             <Lake />
//             <SkiResort />
//         </React.Fragment>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );