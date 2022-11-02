import React from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {

  const param = useParams();

  return (
    <div>
      <h1>Details de user {param.userId} .....</h1>
    </div>
  );
};

export default DetailUser;
