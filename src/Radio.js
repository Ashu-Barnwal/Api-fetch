const Radio = ({inputList, setInputList, inputRef}) => {
    return (
        <div className="radio">
            <input
                checked={inputList}
                type="radio" 
                value={true} 
                name="content"
                onChange={()=>setInputList(true)}
                onClick={()=>inputRef.current.focus()}
            />List
            <input 
                checked={!inputList}
                type="radio" 
                value={false} 
                name="content" 
                onChange={()=>setInputList(false)}
                onClick={()=>inputRef.current.focus()}
            />Table
        </div>
    )
}

export default Radio
