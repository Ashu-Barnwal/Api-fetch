import Content from './Content';
import Header from './Header';
import { useState, useEffect, useRef } from 'react';
import Radio from './Radio';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const inputRef = useRef();

  const [cat, setCat] = useState('users');
  const [content, setContent] = useState([]);
  const [inputList, setInputList] = useState(true);

  useEffect(() => {
    const fetchData = async (cate) => {
      try{
        const response = await fetch(API_URL+cate);
        if(!response.ok) throw Error('Did not receive data!');
        const listData = await response.json();
        setContent(listData);
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData(cat);
  }, [cat])

  return (
    <div className="App">
      <Header 
        setCat={setCat}
        inputRef={inputRef}
      />
      <Radio 
        setInputList={setInputList} 
        inputList={inputList} 
        inputRef={inputRef}
      />
      <Content 
        content={content}
        inputList={inputList}
        cat={cat}
      />
    </div>
  );
}

export default App;
