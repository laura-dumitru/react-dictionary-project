import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);

    let grid = 4; //12

    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className={`col-${grid}`} key={index}>
                {" "}
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt="" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
