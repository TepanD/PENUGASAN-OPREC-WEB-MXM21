import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() =>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(quote => {
      setQuote(quote.content);
      setAuthor(quote.author);
    })
  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(quote => {
      setQuote(quote.content);
      setAuthor(quote.author);
    })
  }

  return (
    <div>
      <div className="title">
        <p class="popout">
        	<span>R</span>
        	<span>A</span>
        	<span>N</span>
        	<span>D</span>
        	<span>O</span>
        	<span>M</span><br></br>
        	<span>Q</span>
        	<span>U</span>
        	<span>O</span>
        	<span>T</span>
        	<span>E</span>
        </p>
      </div>
    
      <div className="container">
        <div className="gradient-border">
          <div className="quote">
            <blockquote>
              <q>{quote}</q>
              
              <div>
                <br></br><br></br>  
                <cite><em> -{author} </em></cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="container2">
        <button className="button type3" onClick={fetchNewQuote}>New Quote</button>
      </div>
    </div>
    
)}

export default App;
