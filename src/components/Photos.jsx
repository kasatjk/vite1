function Photos(props) {
    return (
        <div className="photos">
            <img src={props.photo1} alt="Photo 1" />
            <img src={props.photo2} alt="Photo 2" />
        </div>
    )
}

export default Photos
