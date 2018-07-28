import React, { Fragment } from 'react';
import 'tocbot/dist/tocbot.css';
import './app.css';
import { Tocbot } from './tocbot';

class App extends React.Component {

    render() {
        return (
            <Fragment>
                <header className="header">
                    <div className="container-lg">
                        <nav>
                            <h1>Welcome to Tocbot</h1>
                        </nav>
                    </div>
                </header>

                <main className="content">
                    <div className="article-container container-lg">
                        <div className="article-sidebar">
                            <nav className="toc js-toc">
                            </nav>
                        </div>
                        <article className="article-content js-toc-content">
                            <h1 id="chapter-1">Chapter 1</h1>
                            <h2 id="section-1.1">Section 1.1</h2>
                            <h3 id="section-1.1.1">Sub-section 1.1.1</h3>
                            <p>
                                The body has a top margin equal to the header height.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </p>
                            <h3 id="chapter-1.1.2">Sub-section 1.1.2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </p>
                            <h2 id="section-1.2">Section 1.2</h2>
                            <h3 id="section-1.2.1">Sub-section 1.2.1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </p>
                        </article>
                    </div>
                    <Tocbot />
                </main>
            </Fragment>
        );
    }
}

export default App;
