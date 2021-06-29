import React from 'react';
import ReactDOM from 'react-dom';

interface appProps {
    title:string
}

function App({title}:appProps) : JSX.Element {
	return <div>Henry Workshop - {title}</div>;
}

ReactDOM.render(<App title='TypeScript' />, document.querySelector('#root'));