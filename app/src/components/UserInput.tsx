import React, { useState, useEffect } from "react";
import Count from "./Count";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const UserInput: React.FC = () => {
    const [input, setInput] = useState<string>("lorem ipsum dolor sit amet");

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setInput(e.target.value);
    };
    return (
        <div>
            <form noValidate autoComplete='off'>
                <TextField
                    variant='filled'
                    autoFocus
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={input}
                    multiline
                />
            </form>
            <Count input={input} />
        </div>
    );
};

export default UserInput;
