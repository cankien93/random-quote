import React from 'react';
import './App.css';
// import quoteImported from './quote';
import {TwitterIcon} from 'react-share'
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      quotes: [{quote:'', author:''}],
      quoteWillPrint: 0
    }
  }
  componentDidMount(){
    fetch(API)
      .then(res=>res.json(res))
      .then(res=>{this.setState({
        quotes: res.quotes,
        quoteWillPrint: Math.floor(Math.random() * Math.floor(100))
      });
      // console.log(res.quotes[0])
      });
    
  }
  newQuote = () => {
    this.setState(
      {
        quoteWillPrint: Math.floor(Math.random() * Math.floor(100))
      }
    )
  }

  render(){
    const {quotes, quoteWillPrint}= this.state;
    // console.log(quoteImported.quotes[0], 'imported');
    console.log(quotes[0].author, 'state')
    return (
      <div className="App" >
        <h1>Random Quote Machine</h1>
        <div id="quote-box" className='quote-box'>
          <div id="text">{`"` + quotes[quoteWillPrint].quote + `"`}</div>
          <div id="author" className='author'>{`--`+quotes[quoteWillPrint].author+`--`}</div>
          <div className='button-container'>
            <a href={`https://twitter.com/intent/tweet?text=${quotes[quoteWillPrint].quote}--${quotes[quoteWillPrint].author}&hashtags=quotes`}id="tweet-quote" ><TwitterIcon size='40px' className='icon'/></a>
            <button onClick={this.newQuote} id="new-quote" className='button'>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
