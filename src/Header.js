const Header = ({setCat, inputRef}) => {
    return (
        <header>
            <button 
                autoFocus
                ref={inputRef}
                className="btn"
                onClick={()=>setCat('users')}
            >users</button>
            <button 
                ref={inputRef}
                className="btn"
                onClick={()=>setCat('posts')}
            >posts</button>
            <button
                ref={inputRef}
                className="btn"
                onClick={()=>setCat('comments')}
            >comments</button> 
        </header>
    )
}

export default Header
