function Cards(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="img-container">
            <img src={props.item.imageUrl} className="card__image" />
            </div>
                <div className="card__info">
                    <div className="card__location">
                        <p className="card__location-text"><i className="fas fa-map-marker-alt"></i>{props.item.location}</p>
                        <a className="card__geo" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="card__heading">{props.item.title}</div>
                    <div className="card__date">{props.item.startDate} - {props.item.endDate}</div>
                    <div className="card__description">{props.item.description}</div>
                </div>
        </div>
    )
}



export default Cards