import './history.scss';

function History(props) {

  let historyArray = props.history;
  console.log('##############', historyArray);


  const handleShow = (data) => {
    props.dispatch({ type: 'DATA_ADD', payload: data });
  };

  return (
    <>
      <h3>View search history</h3>
      <ul data-testid='history'>
        {
          historyArray.map((apiCall) => {
            return <li>
              <button id="apiHistory" type="button" onClick={() => handleShow(apiCall.data)}>{apiCall.method.toUpperCase()}: {apiCall.url}</button>
            </li>
          })
        }
      </ul>
    </>
  );
}

export default History;
