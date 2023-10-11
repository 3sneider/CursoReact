import React from 'react';

const Intro = (propr) => {

    const grrenButton = {
        backgroundColor : "green",
        color: "white",
        padding: "15px, 15px",
    }

    const click = () => {
        alert("click");
    }

    return (
        <>
            <p className='App-intro'>
                my first component con {propr.message}
            </p>
            <button style={grrenButton} onClick={click}>Click</button>
        </>
    );
}

export default Intro;