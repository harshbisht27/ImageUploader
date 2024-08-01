import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ImageDetail() {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);

  const fetchImageDetails = async () => {
    try {
      const url = `http://localhost:8080/api/images/${id}`;
      const result = await fetch(url);
      const { data } = await result.json();
      console.log(data);
      setImageDetails(data);
    } catch (err) {
      alert("Internal Server Error, Please try again");
    }
  };
  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center w-50 m-auto mt-5">
      <Link to="/">Back To Gallery</Link>
      <h1 className="mb-4">{imageDetails?.originalName}</h1>
      <img
        src={imageDetails?.imageURL}
        alt={imageDetails?.originalName}
        className="img-fluid"
      />
      <p>
        <strong>Image Type : </strong> {imageDetails?.mimeType}
      </p>
      <p>
        <strong>Image Size : </strong> {imageDetails?.size} bytes
      </p>
    </div>
  );
}

export default ImageDetail;
