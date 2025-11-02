import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    function onClickHandler(val){
       if(val===0)setCount(0);
       else setCount(count +val);
    }
    return (
        <div className="card">
            <h3>Licznik</h3>
            <p>Aktualna wartość: <strong>{count}</strong></p>
            <div className="row">
                <button onClick={()=>onClickHandler(-1)}>-1</button>
                <button onClick={() =>onClickHandler(0)}>Reset</button>
                <button onClick={() => onClickHandler(1)}>+1</button>
            </div>
        </div>
    );
}