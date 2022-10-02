import React from "react";
import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../../redux/action/action";
function FavoritesPage() {

  const drivers = useSelector((state) => state.favoriteData);
  const favorite_drivers= drivers
  const dispatch = useDispatch();

  const remove_drivers = (e) => {
    dispatch(removeData(e));
  };
  
  const columns = [
    {
      title: "Driver Name",
      dataIndex: "givenName",
    },
    {
      title: "Permament Number",
      dataIndex: "permanentNumber",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
    },
    {
      title: "Date of birth",
      dataIndex: "dateOfBirth",
    },
    {
      title: "Information",
      dataIndex: "url",
      render: (text, record) => <a  style={{color:"black"}} href={record.url}>{record.url}</a>,
    },
  
    {
      render: (text, record) => (
        <button onClick={() => remove_drivers(record)}>{"Remove"}</button>
      ),
    },
  ];

  return (
    <>
      <div style={{width:"80%",margin:"auto"}}>
      {
        <Table
          rowClassName={(record, index) =>
            record.permanentNumber ? "black" : "red"
          }
          key={favorite_drivers?.driverId}
          dataSource={favorite_drivers}
          columns={columns}
        />
      }
    </div>    </>
  );

}
export default FavoritesPage;
