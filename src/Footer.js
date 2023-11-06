import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <a
          className="githubLink"
          href="https://github.com/raalizz/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source code{" "}
        </a>
        by Raghda Al-Shaikhli
      </p>
    </div>
  );
}
