import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { iUser } from "./types";
import { AxiosResponse, AxiosError } from "axios";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState<iUser[]>([]);
  console.log(data);

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://dummyapi.io/data/v1/user",
    headers: {
    //  "app-id": "63eee6f74e74d00d541eba0b",
    "app-id":"63eefb8577dbae2bcc52bdd9"
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response: AxiosResponse) {
        setData(response?.data?.data);
      })
      .catch(function (error: AxiosError) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="App">
        {data?.map((item: iUser) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
      ;
    </div>
  );
}

export default App;
