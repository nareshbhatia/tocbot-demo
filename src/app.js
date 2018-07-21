import React from 'react';
import 'tocbot/dist/tocbot.css';
import './app.css';
import { Tocbot } from './tocbot';

class App extends React.Component {

    render() {
        return (
            <div>
                <header className="app-header">
                    <h1 className="app-title">Welcome to Tocbot</h1>
                </header>

                <div class="container">
                    <nav className="toc js-toc" />

                    <div className="content js-toc-content">
                        <h1 id="chapter-1">Chapter 1</h1>
                        <h2 id="section-1.1">Section 1.1</h2>
                        <h3 id="section-1.1.1">Sub-section 1.1.1</h3>
                        <p>
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                            Hello<br />
                        </p>
                        <h3 id="chapter-1.1.2">Sub-section 1.1.2</h3>
                        <p>
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                            World<br />
                        </p>
                        <h2 id="section-1.2">Section 1.2</h2>
                        <h3 id="section-1.2.1">Sub-section 1.2.1</h3>
                        <p>
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                            Nice<br />
                        </p>
                    </div>

                    <Tocbot />
                </div>
            </div>
        );
    }
}

export default App;
