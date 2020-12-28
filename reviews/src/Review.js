import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const updatePerson = (direction) => {
    setIndex((index) => {
      return (index + direction) % people.length;
    });
  };

  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = (index + 1) % people.length;
    }
    setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => updatePerson(-1)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => updatePerson(1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => randomNumber()}
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
