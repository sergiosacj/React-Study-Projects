import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <MinusOutlined /> : <PlusOutlined />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
