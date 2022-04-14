import React, {useState, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Bluetooth Credit/Debit Card Application User Interface
// AJ Funari

function Chip_On({ status }) {
  return (
    <div>
      <h3>Bluetooth {status}</h3>
    </div>
  );
}

function Chip_Off({ status }) {
  return (
    <div>
      <h3>Bluetooth {status}</h3>
    </div>
  );
}
function Bluetooth({ status } ) {
  const [bluetooth, setBluetooth] = useState("On");
  return (
    <React.Fragment>
      <div>
        <h2>Bluetooth Credit/Debit Card Application</h2>
      </div>

      <div>
        {status === "Enabled" ? (
          <Chip_On status="Enabled" />
        ) : status === "Disabled" ? (
          <Chip_Off status="Disabled" />
        ) : (
          <h3>
            Not Working Correctly!
          </h3>
        )}
      </div>
      <div>
      <h3>Bluetooth Status: {bluetooth}</h3>
          <button onClick={() => 
            setBluetooth(bluetooth => "On")}>
            Turn Bluetooth On
          </button>
          <button onClick={() => 
            setBluetooth(bluetooth => "Off")}>
            Turn Bluetooth Off
          </button>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Bluetooth />,
  // <Bluetooth status="Enabled"/>,
  document.getElementById("root")
);

