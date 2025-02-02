"use client";
import { useState, useActionState, useEffect } from "react";
import {
  Layout,
  Table,
  SimpleButton,
  MainModal,
  MainForm,
  Input,
  Submit,
  DateRangePicker,
  CustomSelect,
} from "@/components";
import { tableColumns, tableData, tableActions } from "@/data/constants";
import { createStudent, updateStudent, deleteStudent } from "./actions";
const Student = () => {

  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const pending = false;

  const handleModal = () => setShowModal(!showModal);
  const [fromDate, setFromDate] = useState(
    new Date(new Date().getFullYear(), 0, 2).toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(
    new Date(new Date().getFullYear(), 11, 32).toISOString().split("T")[0]
  );
  const [selectedUser, setSelectedUser] = useState("");

  const users = ["Form 1", "Form 2", "Form 3", "Form 4"];

  const logFilters = () => {
    console.log("Filters:");
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Assigned to:", selectedUser);
  };

  useEffect(() => {
    logFilters();
  }, [fromDate, toDate, selectedUser]);

  const handleOpenModal = (actionType, rowData) => {
    console.log("Action Type:", actionType);
    console.log("Row Data:", rowData);

    if (actionType === "view") {
      window.location.href = `/students/${rowData.id}`;
    } else if (actionType === "edit" || actionType === "delete") {
      setActionType(actionType);
      setShowModal(true);
    }
  };

  return (
    <Layout>
      <div className="sticky top-0 bg-white z-10 pr-3 p-1 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <DateRangePicker
                fromDate={fromDate}
                toDate={toDate}
                onFromDateChange={setFromDate}
                onToDateChange={setToDate}
              />
            </div>
            <div className="">
              <CustomSelect
                label=""
                options={users}
                selected={selectedUser}
                onChange={setSelectedUser}
              />
            </div>
          </div>
          <div>
            <SimpleButton
              title={"Add Student"}
              onClick={() => {
                setActionType("add");
                setSelectedUser(null);
                handleModal();
              }}
            />
          </div>
        </div>
      </div>
      <div className="pr-3 mr-3 mt-4">
        <Table
          caption="Students"
          description="list of students and more."
          columns={tableColumns}
          data={tableData}
          actions={tableActions}
          onOpenModal={handleOpenModal}
        />
      </div>
      <MainModal
        isOpen={showModal && actionType === "add"}
        onClose={handleModal}
        title="Add Student"
      >
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
      <MainModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={
          actionType === "edit"
            ? `Edit Student - ${selectedUser?.first_name} ${selectedUser?.last_name}`
            : actionType === "delete"
            ? "Delete Student"
            : "Add Student"
        }
      >
        {actionType === "edit" ? (
          <MainForm action={updateStudent}>
            <div className="flex justify-between">
              <Input
                label="First Name"
                name="first_name"
                type="text"
                required={true}
                defaultValue={selectedUser?.first_name || ""}
              />
              <Input
                label="Last Name"
                name="last_name"
                type="text"
                defaultValue={selectedUser?.last_name || ""}
              />
            </div>
            <div className="flex justify-between">
              <Input
                label="Email"
                name="email"
                type="email"
                defaultValue={selectedUser?.email || ""}
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                defaultValue={selectedUser?.phone || ""}
              />
            </div>
            <Submit
              disabled={pending}
              name={pending ? "Updating..." : "Update"}
            />
          </MainForm>
        ) : actionType === "delete" ? (
          <form action={deleteStudent}>
            <div className="relative p-4 text-center bg-white rounded-lg shadow">
              <p className="mb-4 text-gray-500">
                Are you sure you want to delete this student?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="py-2 px-3 text-sm text-gray-500 bg-white border rounded-lg hover:bg-gray-100"
                >
                  No, cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-3 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </form>
        ) : null}
      </MainModal>
    </Layout>
  );
};

export default Student;
