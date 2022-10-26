import './results.scss';

function Results(props) {

  return (
    <section>
      <pre>RESPONSE: {props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
