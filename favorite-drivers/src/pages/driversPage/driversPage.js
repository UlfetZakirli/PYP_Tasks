import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getData, addData } from "../../redux/action/action";

function DriversPage() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getData());
  }, []);

  const drivers = useSelector((state) => state.getData);
  let drivers_data = drivers.payload?.data;
  const add_drivers = (e) => {
    dispatch(addData(e));
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
      render: (text, record) => (
        <a style={{ color: "green",textDecoration:'underline' }} href={record.url}>
          {record.url}
        </a>
      ),
    },

    {
      render: (text, record) => (
        <button onClick={() => add_drivers(record)}>{"Add favorites"}</button>
      ),
    },
  ];
  const handleChange = (pagination, filters, sorter) => {
    const offset =
      pagination.current * pagination.pageSize - pagination.pageSize;
    const limit = pagination.pageSize;
    const params = {};

    if (sorter.hasOwnProperty("column")) {
      params.order = { field: sorter.field, dir: sorter.order };
    }

    getData(offset, limit, params);
  };
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {
        <Table
          rowClassName={(record, index) =>
            record.permanentNumber ? "black" : "red"
          }
          loading={drivers.status === "pending"}
          key={drivers_data?.MRData?.DriverTable?.Drivers?.driverId}
          dataSource={drivers_data?.MRData?.DriverTable?.Drivers}
          columns={columns}
          onChange={handleChange}
          pagination={{
            total: 80,
          }}
        />
      }
    </div>
  );
}

export default DriversPage;
