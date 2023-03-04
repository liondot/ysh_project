import { Link } from "react-router-dom";
import dummy from "../db/data.json";
import "../style/dataList.scss";
import Profile from "../component/Profile";
import MyLink from "../component/MyLink";


function DataList() {
  return (
    <div className="dataList">
      <Profile />
      <ul className="list">
        {dummy.datas.map((data) => (
          <li key={data.id} className="item dataItem">
            <Link to={`./data/${data.data}`}>{data.data}</Link>
          </li>
        ))}
      </ul>
      <MyLink/>
    </div>
  );
}

export default DataList;
