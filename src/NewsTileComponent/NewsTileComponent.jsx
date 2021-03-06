import { NavLink } from "react-router-dom";
import "./NewsTileComponent.css";

export const NewsTileComponent = (props) => {
  const placeholderImage =
    "https://image.freepik.com/free-vector/scientists-discovery-lab-with-book-microscope-experimental-science-flat_109722-2683.jpg";
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getFormattedDate(val) {
    let date = new Date(val);
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
  }
  return (
    <div className="col-md-6 news-tile">
      <div className="row">
        <div className="col-md-12">
          <img
            alt="illustration"
            className="img img-responsive news-img"
            src={!props.urlToImage ? placeholderImage : props.urlToImage}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default panel-body">
            <h3 className="heading">{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
