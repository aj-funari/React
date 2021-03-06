import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css"

//Using useReducer
function Checkbox() {
    const [checked, toggle] = useReducer(
        checked => !checked, 
        false
    );
    
    return (
        <>
            <input 
                type="checkbox" 
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById("root")
);

// Fetching data with useEffect
// function GitHubUser({ login }) {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch('https://api.github.com/users/' + login)
//         .then(res => res.json())
//         .then(setData)
//         .catch(console.error);
//     }, []);

//     if (data) {
//         return (
//             <div>
//                 <h2>login = {data.login}</h2>
//                 <p>{JSON.stringify(data)}</p>
//                 <img src={data.avatar_url} width={100} /> 
//             </div>
//         );
//     }
//     return null
// }

// function App() {
//     return <GitHubUser login="aj-funari" />
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

// Updating with the useEffect dependency array
// function App() {
//     const [val, setVal] = useState("");
//     const [val2, setVal2] = useState("");

//     useEffect(() => {
//         console.log('field 1: ' + val);
//     }, [val])

//     useEffect(() => {
//         console.log('field 2: ' + val2);
//     }, [val2])

//     return (
//         <>
//             <label>
//                 Favorite Phrase:
//                 <input 
//                     value={val}
//                     onChange={e => setVal(e.target.value)}/>
//             </label>
//             <br />
//             <label>
//                 Second Favorite Phrase:
//                 <input 
//                 value={val2}
//                 onChange={e => setVal2(e.target.value)}/>
//             </label>
//         </>
//     )
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

// Working with useEffect
// function Checkbox() {
//     const [checked, setChecked] = useState(true);
    
//     useEffect(() => {
//         // alert 
//         alert('checked: ' + checked.toString());
//     });
    
//     return (
//         <>
//             <input 
//                 type="checkbox" 
//                 value={checked}
//                 onChange={() => 
//                     setChecked(checked => !checked)
//                 }
//             />
//             {checked ? "checked" : "not checked"}
//         </>
//     );
// }

// ReactDOM.render(
//     <Checkbox />,
//     document.getElementById("root")
// );


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