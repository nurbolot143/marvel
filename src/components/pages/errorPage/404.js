import { Link } from "react-router-dom";

import errorImg from "./404error.gif";

const ErrorPage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <img src={errorImg} alt="Error 404" />
      <div>
        <p style={{ fontSize: 30, color: "red" }}>Page does not exist</p>
        <Link
          to="/"
          style={{ fontSize: 30, color: "blue", textDecoration: "underline" }}
        >
          Go to main page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
