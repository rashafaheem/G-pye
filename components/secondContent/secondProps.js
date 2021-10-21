function SecondProps(props) {
  return (
    <div className="propsDiv">
      <img className="miniImage" src={props.miniImage} />
      <h2 className="miniTitle">{props.miniTitle}</h2>
      <p className="miniContent">{props.miniContent}</p>
    </div>
  );
}

export default SecondProps;
