import React, { useState, useEffect } from 'react';
import axios from 'axios';
//const axios = () => null;
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {
  const [requestParams, setRequestParams] = useState({});
  const [data, setData] = useState(null);

  const callApi = (requestParams) => {
    // mock output
    const data = {
      method: requestParams.method,
      url: requestParams.url,
      body: requestParams.body,
    };
    console.log(data);
    setRequestParams(requestParams);
    setData(data);
  };

  useEffect(() => {
    console.log('something happened when mounted!');
    async function apiCall() {
      let results = await axios.get(requestParams.url);
      console.log(results);
      setData(results.data.results)
    }
    if(requestParams.url){
      apiCall();
    }
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div>URL: {requestParams.url}</div>
      <div>Request Method: {requestParams.method}</div>
      <div>Request Body: {requestParams.body}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
