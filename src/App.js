import { useState ,useEffect} from 'react';
import './App.css';

function App() {
  document.body.style.backgroundColor='#5372EF';
  const[quote,changeQuote]=useState({ "quote": "",
  "author": ""});

async function generateNewQuote(){ 
      let data= await fetch('https://type.fit/api/quotes');
      let parsedData = await data.json();
      let randomIndex=Math.floor((Math.random() * parsedData.length) + 1);
      changeQuote({
        "quote":parsedData[randomIndex].text,
        "author":parsedData[randomIndex].author
      })
      // console.log(Math.floor((Math.random() * parsedData.length) + 1));
      // console.log(parsedData[randomIndex]);
}
useEffect(() => {
  //Runs only on the first render
  generateNewQuote();
}, []);
const copyText=() => {
  navigator.clipboard.writeText(quote.quote);
}
  return (
      <>
            <div className="container-md p-md-3 pb-0 pb-2 bg-light text-dark border border-5 border-light shadow shadow-lg" style={{maxWidth:"38rem",marginTop:"15vh",borderRadius:"1rem"}}>
                    <h1 className="text-center fs-1 mb-4 fw-bold">Quote of the day </h1>
 {/*<sup><i class="bi fs-2 bi-quote me-1"></i></sup> */}
  {/*<sub><i class="bi fs-2 bi-quote rotate ms-1"></i></sub>*/}
                    <div className="fs-4 text-center mx-md-3 mx-0 mb-3">{quote.quote}</div>
                    <p className="float-end fs-5 d-block me-md-2 text-secondary mt-md-0 "><i className="bi bi-dash-lg me-md-2"></i>{quote.author?quote.author:'Unknown'}</p>
                      <br className="mt-md-5 mt-4"/>
                      <hr className="mt-4"/>
                      <div className="d-flex w-100 justify-content-between">
                            <button className="btn btn-primary rounded-circle" style={{backgroundColor:'#5372EF'}} onClick={copyText}><i className="bi bi-clipboard2 fs-3"></i></button>
                            <button className="btn px-3 btn-primary rounded-pill fs-5 " style={{backgroundColor:'#5372EF'}} onClick={generateNewQuote}>New quote</button>
                      </div>
            </div>
      </>
  );
}

export default App;
