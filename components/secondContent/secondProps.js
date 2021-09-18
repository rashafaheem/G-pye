function SecondProps(props) {
  return (
    <div className="propsDiv">
      <img className="miniImage" src={props.miniImage} />
      {/* <img className="miniImage2" src={props.miniImage2} /> */}
      <h2 className="miniTitle">{props.miniTitle}</h2>
      <p className="miniContent">{props.miniContent}</p>
    </div>
  );
}

export default SecondProps;
