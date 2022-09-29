import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, removeData } from "../redux/action";
import { Table } from "antd";

export const CustomersList = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  let state = useSelector((state) => state);

  console.log("STATE", state);
  const remove = (e) => {
    dispatch(removeData(e));
  };
  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact title",
      dataIndex: "contactTitle",
    },
    {
      render: (text, record) => (
        <button onClick={() => remove(record)}>{"Remove"}</button>
      ),
    },
  ];
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <p>List</p>
      <Table dataSource={state} columns={columns} />
    </div>
  );
};
