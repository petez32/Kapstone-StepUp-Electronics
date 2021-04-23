import "../asset/notFound.css";
import React from "react";
function ErrorPage(props) {
  return (
    <>
      <div>
        <h1>
          <center>NOT FOUND: 404 ERROR</center>
        </h1>
      </div>
      <div className="notfound">
        <img
          width="100%"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fc5%2F03%2F89%2Fc503893f31d3291da6819bd3a5b7bc46.gif&f=1&nofb=1"
        />
      </div>
    </>
  );
}
export default ErrorPage;
