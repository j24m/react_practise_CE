function Avatar(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
    />
  );
}
export default Avatar;
