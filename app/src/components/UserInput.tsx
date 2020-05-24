import React, { useState } from "react";
import Count from "./Count";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const WHEIGHT = window.innerHeight;

const UserInput: React.FC = () => {
    const [input, setInput] = useState<string>("");

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
                        rows={WHEIGHT / 24}
                        variant='filled'
                        autoFocus
                        fullWidth
                        onChange={(e) => handleChange(e)}
                        value={input}
                        multiline
                        placeholder='Paste your text here.'
                    />
                </form>
            </Grid>
            <Grid xs={12} md={4} className='count countBorder'>
                <Count input={input} />
            </Grid>
        </Grid>
    );
};

export default UserInput;
