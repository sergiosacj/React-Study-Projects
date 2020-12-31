import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, setAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
