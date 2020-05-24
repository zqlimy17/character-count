import React from "react";
import UserInput from "./components/UserInput";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

import Container from "@material-ui/core/Container";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: brown,
        secondary: green,
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className='App' maxWidth='xl'>
                <h1>Character Count</h1>
                <UserInput />
                <footer>
                    <a href='https://www.linkedin.com/in/zqlimy/'>
                        <LinkedIn />
                    </a>{" "}
                    <a href='https://github.com/zqlimy17/'>
                        <GitHubIcon />
                    </a>
                </footer>
            </Container>
        </ThemeProvider>
    );
};

export default App;
