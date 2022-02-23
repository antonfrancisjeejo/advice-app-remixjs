function Card(props) {
  return (
    <div className="card">
      <h1 className="heading">{props.advice}</h1>
      <button className="button" onClick={props.fetchAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  );
}
export default Card;
