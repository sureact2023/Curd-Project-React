import React, { FC, useEffect, useState } from "react";
import { iUser } from "../types";
import axios, { AxiosError, AxiosResponse } from "axios";

const Cards: FC<iUser> = ({ firstName, lastName, title, picture, id }) => {
  const [selection, setSelection] = useState<string>("");
  var config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `https://dummyapi.io/data/v1/user/${selection}`,
    headers: {
      "app-id": "63eee6f74e74d00d541eba0b",
    },
  };
  useEffect(() => {
    if (selection !== "") {
      axios(config)
        .then(function (response: AxiosResponse) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error: AxiosError) {
          console.log(error);
        });
    }
  }, [selection]);

  return (
    <div className="card">
      <img src={picture} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {title} {firstName} {lastName}
        </h5>
        <p className="card-text"></p>
        <button onClick={() => setSelection(id)} className="btn btn-danger">
          delete Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
