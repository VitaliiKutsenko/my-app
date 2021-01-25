import React from 'react';
import './App.css';
import Headers from './Headers';
import Footer from './Footer';
import Main from './Main';

function App() {
    return (
        <div className="App">
            <wrapper>
                <Headers />
                <Main />
                <Footer />
            </wrapper>
        </div>
    );
}

export default App;
