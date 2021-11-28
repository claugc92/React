import react from "react";
import "./Greeting.css";


function Greeting() {
    const name = "hola";
// para utilizar el js dentro del html se le pone las {};
return (
    <div className="container">
        <span>{name}</span>
    </div>
);
};

export default Greeting;
