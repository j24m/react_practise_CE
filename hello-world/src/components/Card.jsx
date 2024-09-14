function Card(props) {
  return (
    <div className="Card">
      <div>{props.username}</div>
      <div>{props.age}</div>
      {props.children}
    </div>
  );
}

export default Card;
