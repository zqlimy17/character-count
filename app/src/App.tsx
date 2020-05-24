import React from "react";
import UserInput from "./components/UserInput";

import Container from "@material-ui/core/Container";
import "./App.css";

const App: React.FC = () => {
    return (
        <Container className='App' maxWidth='xl'>
            <h1>Character Count</h1>
            <UserInput />
        </Container>
    );
};

export default App;
