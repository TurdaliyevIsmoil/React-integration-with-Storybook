import React from "react";
import styles from "./style.module.css";
import PropTypes from "prop-types";

const Card = ({ type, image, title, price, date }) => {
  return (
    <div
      className={`${styles.card} ${
        type === "row" ? styles.cardrow : styles.cardcolumn
      }`}
    >
      <img src={image} alt={title} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <div>
          <p>${price}</p>
          <p>{new Date(date).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

Card.prototype = {
  type: PropTypes.oneOf(["row", "column"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default Card;
