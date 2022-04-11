import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css"

// Working with useEffect
function Checkbox() {
    const [checked, setChecked] = useState(true);
    
    useEffect(() => {
        // alert 
        alert('checked: ' + checked.toString());
    });
    
    return (
        <>
            <input 
                type="checkbox" 
                value={checked}
                onChange={() => 
                    setChecked(checked => !checked)
                }
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById("root")
);


// Using useState
// function App() {
//     const [year, setYear] = useState(2022)
//     const [manager, setManager] = useState("Alec");
//     const [status, setStatus] = useState("Open");
//     return (
//         <React.Fragment>
//             <div>
//                 <h1>Current Year: {year}</h1>
//                 <button onClick={() => setYear(year + 1)}>
//                     New Year
//                 </button>
//                 <button onClick={() => setYear(2022)}>
//                     Time Travel Back
//                 </button>
//             </div>
//             <div>
//                 <h1>Manager on Duty: {manager}</h1>
//                 <button onClick={() => setManager("Alec")}>
//                     Alec
//                 </button>
//                 <button onClick={() => setManager("Joeseph")}>
//                     Joeseph
//                 </button>
//                 <button onClick={() => setManager("Funari")}>
//                     Funari
//                 </button>
//             </div>
//             <div>
//                 <h1>Status: {status}</h1>
//                 <button onClick={() => setStatus("Open")}>
//                     Open
//                 </button>
//                 <button onClick={() => setStatus("Back in 5")}>
//                     Break
//                 </button>
//                 <button onClick={() => setStatus("Closed")}>
//                     Closed
//                 </button>
//             </div>
//         </React.Fragment>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

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