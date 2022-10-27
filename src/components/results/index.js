import './results.scss';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';

function Results(props) {
  return (
    <>
      <h3>Reponse: </h3>
      <section data-testid='results'>
        <JSONPretty id="json-pretty" data={props.data ? JSON.stringify(props.data, undefined, 2) : null} theme={JSONPrettyMon}></JSONPretty>
      </section>
    </>
  );
}

export default Results;
