import React, { useState } from "react";
import Count from "./Count";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const UserInput: React.FC = () => {
    const [input, setInput] = useState<string>("lorem ipsum dolor sit amet");

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setInput(e.target.value);
    };
    return (
        <Grid container>
            <Grid xs={12} md={8}>
                <form noValidate autoComplete='off'>
                    <TextField
                        rows={40}
                        variant='filled'
                        autoFocus
                        fullWidth
                        onChange={(e) => handleChange(e)}
                        value={input}
                        multiline
                    />
                </form>
            </Grid>
            <Grid xs={12} md={4}>
                <Count input={input} />
            </Grid>
        </Grid>
    );
};

export default UserInput;
