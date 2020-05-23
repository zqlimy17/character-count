import React, { useState, useEffect } from "react";
import Count from "./Count";
import Input from "@material-ui/core/Input";

const UserInput: React.FC = () => {
    const [input, setInput] = useState<string>("lorem ipsum dolor sit amet");
    return (
        <div>
            <Input autoFocus fullWidth />
            <Count input={input} />
        </div>
    );
};

export default UserInput;
