import React from "react";
import * as yup from "yup";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { postData } from "../redux/action";

let schema = yup.object().shape({
  companyName: yup.string().required(),
  contactName: yup.string().required(),
  contactTitle: yup.string().required(),
});

const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

function AddCustomer() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
    dispatch(postData(values));
  };

  const formStyle = {
    width: "40%",
    margin: "auto",
  };
  const btnStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Add order</h1>
      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Form.Item name="companyName" label="companyName" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item name="contactName" label="contactName" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item name="contactTitle" label="contactTitle" rules={[yupSync]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={btnStyle}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default AddCustomer;
