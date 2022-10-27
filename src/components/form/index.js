import React, { useState } from 'react';
import './form.scss';

function Form(props) {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body,
    };
    console.log(formData);
    props.handleApiCall(formData);
  }

  const handleChange = (event) => {
    setUrl(event.target.value);
  }

  const handleTextArea = (event) => {
    setBody(event.target.value);
  }

  const handleShow = (event, method) => {
    setIsShown(true);
    setIsActive(method);
    setMethod(method);
  };

  const handleHide = (event, method) => {
    setIsShown(false);
    setIsActive(method);
    setMethod(method);
  };

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' data-testid="url-input" type='text' onChange={handleChange}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="get" type="button" style={{backgroundColor: isActive === 'GET' ? 'red' : ''}} onClick={e => handleHide(e, 'GET')}>GET</button>
          <button id="post" type="button" style={{backgroundColor: isActive === 'POST' ? 'red' : ''}} onClick={e => handleShow(e, 'POST')}>POST</button>
          <button id="put" type="button" style={{backgroundColor: isActive === 'PUT' ? 'red' : ''}} onClick={e => handleShow(e, 'PUT')}>PUT</button>
          <button id="delete" type="button" style={{backgroundColor: isActive === 'DELETE' ? 'red' : ''}} onClick={e => handleHide(e, 'DELETE')}>DELETE</button>
        </label>
        {isShown && (
          <div>
            <textarea id="textarea" data-testid="body-input" onChange={handleTextArea}/>
          </div>
        )}
      </form>
    </>
  );

}

export default Form;
