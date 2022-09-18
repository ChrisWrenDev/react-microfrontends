import React from "shared-libraries/react";
import pictureData from "./MF.jpeg";
export default function () {
  return (
    <img src={pictureData} style={{ width: "500px", borderRadius: "10px" }} />
  );
}
