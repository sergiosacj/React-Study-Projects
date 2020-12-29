import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Review = (props) => {
  const { id, image, name, title, quote } = props.person;
  const { changePerson } = props;

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article key={id}>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button
          className="prev"
          onClick={() => changePerson(-1)}
        >
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => changePerson(1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Review;
