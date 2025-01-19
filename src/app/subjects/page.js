"use client";
import { useState, useEffect } from "react";
import {
  Layout,
  Table,
  SimpleButton,
  MainModal,
  MainForm,
  Input,
  Submit,
  CustomSelect,
  DateRangePicker,
} from "@/components";
import { tableColumnsSubjects, tableActions } from "@/data/constants";
import {
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from "./actions";

const Subjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [pending, setPending] = useState(false);
  const [fromDate, setFromDate] = useState(
    new Date(new Date().getFullYear(), 0, 2).toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(
    new Date(new Date().getFullYear(), 11, 32).toISOString().split("T")[0]
  );
  const [selectedUser, setSelectedUser] = useState("");

  const handleModal = () => setShowModal(!showModal);
  const handleOpenModal = (actionType, rowData) => {
    setActionType(actionType);
    if (actionType === "edit" || actionType === "delete" || actionType === "view") {
      setSelectedSubject(rowData);
      setSubjectName(rowData.name);
      setSubjectCode(rowData.code);
    }
    setShowModal(true);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setPending(true);
        const subjectsData = await getSubjects();
        setSubjects(subjectsData);
      } catch (error) {
        console.error("Error fetching subjects: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchSubjects();
  }, []);

  const users = [
    "English",
    "Kiswahili",
    "Chemistry",
    "Physics",
    "Biology",
    "Mathematics",
    "History",
  ];

  const renderModalContent = () => {
    switch (actionType) {
      case "add":
        return (
          <>
            <Input
              label="Subject Name"
              name="name"
              type="text"
              required={true}
              placeholder="Enter Subject Name"
              onChange={(e) => setSubjectName(e.target.value)}
            />
            <Input
              label="Subject Code"
              name="code"
              type="text"
              required={true}
              placeholder="Enter Subject Code"
      
              onChange={(e) => setSubjectCode(e.target.value)}
            />
            <Submit name="Add Subject" />
          </>
        );
      case "edit":
        return (
          <>
            <Input
              label="Subject Name"
              name="name"
              type="text"
              required={true}
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
            <Input
              label="Subject Code"
              name="code"
              type="text"
              required={true}
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
            />
            <Submit name="Update Subject" />
          </>
        );
      case "delete":
        return (
          <div className="text-center">
            <p className="mb-4">Are you sure you want to delete this subject?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                onClick={handleModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                onClick={() => deleteSubject(selectedSubject.id)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        );
      case "view":
        return (
          <>
            <div className="mb-2">
              <strong>Subject Name:</strong> {subjectName}
            </div>
            <div className="mb-2">
              <strong>Subject Code:</strong> {subjectCode}
            </div>
            <button
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              onClick={handleModal}
            >
              Close
            </button>
          </>
        );
      default:
        return null;
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
              title={"Add Subject"}
              onClick={() => {
                setActionType("add");
                setSubjectName("");
                setSubjectCode("");
                handleModal();
              }}
            />
          </div>
        </div>
      </div>

      <div className="pr-3 mr-3 mt-4">
        <Table
          caption="Subjects"
          description="List of all subjects offered by the school."
          columns={tableColumnsSubjects}
          data={subjects}
          actions={tableActions}
          onOpenModal={handleOpenModal}
        />
      </div>

      <MainModal
        isOpen={showModal}
        onClose={handleModal}
        title={actionType === "add" ? "Add Subject" : actionType === "edit" ? `Edit Subject - ${selectedSubject?.name}` : actionType === "view" ? `View Subject - ${selectedSubject?.name}` : `Delete Subject - ${selectedSubject?.name}`}
      >
        <MainForm action={actionType === "add" ? createSubject : updateSubject}>
          {renderModalContent()}
        </MainForm>
      </MainModal>
    </Layout>
  );
};

export default Subjects;
