import { useState } from "react";

const Header = ({setCat, inputRef}) => {
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
    const [input3, setInput3] = useState(null);

    return (
        <header>
            <button 
                autoFocus
                ref={input1}
                className="btn"
                onClick={ () => {
                    setCat('users');
                    console.log('clicked users');
                    setInput1(inputRef);
                    setInput2(null);
                    setInput3(null);
                }}
            >users</button>
            <button 
                className="btn"
                ref={input2}
                onClick={ () => {
                    setCat('posts');
                    setInput1(null);
                    setInput2(inputRef);
                    setInput3(null);
                    console.log('clicked posts');
                }}
            >posts</button>
            <button
                className="btn"
                ref={input3}
                onClick={ () => {
                    setCat('comments');
                    setInput1(null);
                    setInput2(null);
                    setInput3(inputRef);
                    console.log('clicked comments');
                }}
            >comments</button> 
        </header>
    )
}

export default Header
