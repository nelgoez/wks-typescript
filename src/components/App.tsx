import React from 'react';

interface AppProps {
    title :string
}

function App ({title}:AppProps){
    return <div>TypeScript WorkShop of {title}</div>
}

export default App;