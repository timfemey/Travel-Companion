import React from "react";
import styles from "./Preference.module.css";
interface Props {
  type: string;
  rating: string;
  places: any;
}
const Preference = (props: Props) => {
  console.log(props);
  return (
    <>
      {props.places
        ? props.places.map((places: any, i: number) => {
            return (
              <>
                <div key={i} className={styles.Side}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={places.photo ? places.photo.images.large.url : ""}
                      className="card-img-top"
                      alt="Place"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {places.name ? places.name : "Choose a Place"}
                      </h5>
                      <p className="card-text">Address: {places.address}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Phone: {places.phone ? places.phone : "NA"}
                      </li>
                      <li
                        className="list-group-item"
                        onClick={() => window.open(places.website, "_blank")}
                      >
                        Website:{" "}
                        {places.website ? places.website : "Not Available"}
                      </li>
                      <li className="list-group-item">
                        Price Level:{" "}
                        {places.price_level ? places.price_level : "Varies"}
                      </li>
                      <li className="list-group-item">
                        Ranking: {places.ranking ? places.ranking : "NA"}
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })
        : ""}
    </>
  );
};

export default Preference;
