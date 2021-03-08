import React, { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = ({ data }) => {
  console.log("fff", data);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    if (data.length > 1) {
      setDatas(data);
    } else {
      console.log("kkk");
      setDatas([data]);
    }
  }, [data]);

  return (
    <div>
      {datas.map((item) => (
        <ItemComponent
          name={item.login}
          img={item.avatar_url}
          url={item.html_url}
        />
      ))}
    </div>
  );
};

export default ListComponent;
