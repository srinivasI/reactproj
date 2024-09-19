import React, {useState} from "react";
import Clsex1 from "./Clsex1";
const Hookex = () => {
    const [value, setValue] = useState(10);
    return (
        <div>
            <Clsex1/>
            <p>{value}</p>
            <button onClick={() => setValue((value + 1))}>Increment Value</button>
        </div>
    );
};
export default Hookex;