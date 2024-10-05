import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { message, Message } from "antd";

function DayOne() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/");
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []); // Boş bağımlılık dizisi, bu efektin sadece bileşen ilk kez yüklendiğinde çalışmasını sağlar.

  const handleClick = async () => {
    const res = await axios.post(`http://localhost:4000/name/${value}`);
    setRes(res.data);
    message.success(res.data);
  };
  if (error) {
    return <div>Error: {error.message}</div>; // Hata durumunu gösterir.
  }

  return (
    <div>
      {data ? (
        data.message === "Success" ? (
          <>
            {" "}
            <span>Doğru</span>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <Button onClick={handleClick} variant="contained">
              sent
            </Button>
          </>
        ) : (
          0
        )
      ) : (
        "Loading..."
      )}
    </div>
  ); // Veriyi veya yükleniyor mesajını gösterir.
}

export default DayOne;
