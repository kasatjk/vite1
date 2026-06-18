function MainInfo(props) {
  return (
    <div className="main-info">
      <h1>{props.name}</h1>
      <ul>
        <li>{props.country}</li>
        <li>Established in {props.established}</li>
      </ul>
    </div>
  )
}

export default MainInfo
