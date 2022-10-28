import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import { reducer, initialState } from './reducer';

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  const { requestParams, data, apiHistory } = state;

  const callApi = (requestParams) => {
    dispatch({ type: 'REQ_PARAMS_ADD', payload: requestParams });
  };

  useEffect(() => {
    console.log('something happened when mounted!');
    async function apiCall() {
      let results = await axios.get(requestParams.url);
      console.log(results);
      dispatch({ type: 'DATA_ADD', payload: results.data.results })
      dispatch({ type: 'HISTORY_ADD', payload: {url: results.data.next, method: results.config.method, data: results.data.results } })
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
      <aside>
        <History history={apiHistory} dispatch={dispatch} />
      </aside>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
