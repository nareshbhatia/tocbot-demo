import React from 'react'

const TOCBOT_OPTIONS = {
    tocSelector: '.js-toc',
    contentSelector: '.js-toc-content',
    headingSelector: 'h1, h2, h3'
};

// Only require tocbot if in browser.
const tocbot = (typeof window !== 'undefined')
    ? require('tocbot/src/js/index')
    : null;

export class Tocbot extends React.Component {
    componentDidMount () {
        if (tocbot) {
            tocbot.init(TOCBOT_OPTIONS)
        }
    }

    componentWillUnmount () {
        if (tocbot) {
            tocbot.destroy()
        }
    }

    render () {
        return null
    }
}
