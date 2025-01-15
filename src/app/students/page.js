"use client";
import { useState, useActionState } from "react";
import {
  Layout,
  Table,
  SimpleButton,
  MainModal,
  MainForm,
  Input,
  Submit,
} from "@/components";
import { tableColumns, tableData, tableActions } from "@/data/constants";
import { createStudent } from "./actions";
const Student = () => {
  // const initialValues = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  // };
  const [showModal, setShowModal] = useState(false);
  // const [state, formAction, pending] = useActionState(handleStudentForm, initialValues);
  // TODO : uncomment the above line
  const pending = false;

  const handleModal = () => setShowModal(!showModal);

  return (
    <Layout>
      <div className="sticky top-0 bg-white z-10 pr-3 p-1 shadow-sm">
        <div className="flex justify-end">
          <SimpleButton title={"Add Student"} onClick={handleModal} />
        </div>
      </div>
      <div className="pr-3 mr-3">
        <Table
          caption="Students"
          description="list of students and more."
          columns={tableColumns}
          data={tableData}
          actions={tableActions}
        />
      </div>
      <MainModal isOpen={showModal} onClose={handleModal} title="Add Student">
        <MainForm action={createStudent}>
          <div className="flex justify-between ">
            <Input
              label="First Name"
              name="first_name"
              type="text"
              required={true}
              placeholder="Enter First Name"
            />

            <Input
              label="Last Name"
              name="last_name"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex justify-between">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Enter Phone"
            />
          </div>
          <div className="flex justify-between">
            <Input
              label="Address"
              name="address"
              type="text"
              placeholder="Enter Address"
            />
            <Input
              label="City"
              name="city"
              type="text"
              placeholder="Enter City"
            />
          </div>
          <div className="flex justify-between">
            <Input
              label="State"
              name="state"
              type="text"
              placeholder="Enter State"
            />
            <Input label="Zip" name="zip" type="text" placeholder="Enter Zip" />
          </div>
          <Submit
            disabled={pending}
            name={pending ? "Submiting..." : "Submit"}
          />
        </MainForm>
      </MainModal>
    </Layout>
  );
};

export default Student;
