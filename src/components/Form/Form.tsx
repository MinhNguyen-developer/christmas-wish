import React from "react";
import { Button, Form as AntdForm, Input } from "antd";
import styles from "./Form.module.css";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../firebase";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ValidateMessages } from "rc-field-form/lib/interface";

const validateMessages = {
  required: "Chưa điền thông tin",
  types: { string: "Chưa điền thông tin" },
} as ValidateMessages;

const Form: React.FC = () => {
  const nav = useNavigate();
  const handleSubmit = (values: any) => {
    const id = uuid();
    const db = getFirestore(app);
    setDoc(doc(db, "wishes", `${id}`), {
      ...values.user,
      id,
      isAccepted: false,
      createdAt: new Date(),
    })
      .then(() => {
        toast("Your wishes is saved", { type: "success" });
      })
      .then(() => nav("/wishes"))
      .catch(() => {
        toast("Error occurred", { type: "error" });
      });
  };
  return (
    <div className={styles.formContainer}>
      <AntdForm
        className={styles.form}
        onFinish={handleSubmit}
        layout={"vertical"}
        validateMessages={validateMessages}
      >
        <AntdForm.Item
          name={["user", "name"]}
          label={<label className="text-white">Tên</label>}
          className="text-white"
          rules={[{ type: "string", required: true }]}
        >
          <Input className={"bg-gradient-to-r from-red-200 to-purple-300"} />
        </AntdForm.Item>
        <AntdForm.Item
          name={["user", "wishes"]}
          label={
            <label className="text-white">
              Hãy viết điều ước để ông già Noel thực hiện
            </label>
          }
          rules={[{ type: "string", required: true }]}
          className="text-white"
        >
          <Input.TextArea
            rows={6}
            className={"bg-gradient-to-r from-red-200 to-purple-300"}
          />
        </AntdForm.Item>
        <AntdForm.Item>
          <button
            className="bg-indigo-400 rounded border-none p-3 cursor-pointer text-white transition duration-400 ease-linear hover:bg-red-400 focus:shadow-2xl focus:shadow-red-100"
            type="submit"
          >
            Gửi ông già Noel
          </button>
        </AntdForm.Item>
      </AntdForm>
    </div>
  );
};

export default Form;
