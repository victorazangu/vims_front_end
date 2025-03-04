"use client";
import { useState, useEffect } from "react";
import {
  Layout,
  UserCardTwo,
  SimpleButton,
  MainModal,
  MainForm,
  Input,
  Submit,
  DropdownFilter,
  DateRangePicker,
  CustomSelect,
} from "@/components";
const { createTeacher, getTeachers } = require("./actions");

const Teacher = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [teamMembers, setTeamMembers] = useState([]);
  const [pending, setPending] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [fromDate, setFromDate] = useState(
    new Date(new Date().getFullYear(), 0, 2).toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(
    new Date(new Date().getFullYear(), 11, 32).toISOString().split("T")[0]
  );
  const [selectedUser, setSelectedUser] = useState("");

  const users = [
    "English",
    "Kiswahili",
    "Chemistry",
    "Physics",
    "Biology",
    "Mathematics",
    "History",
  ];
  const dropdownOptions = ["Form 1", "Form 2", "Form 3", "Form 4"];

  const logFilters = () => {
    console.log("Filters:");
    console.log("Class:", selectedOption);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Assigned to:", selectedUser);
  };

  useEffect(() => {
    logFilters();
  }, [selectedOption, fromDate, toDate, selectedUser]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setPending(true);
        const teachers = await getTeachers();
        setTeamMembers(teachers);
      } catch (error) {
        console.error("Error fetching teachers: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchTeachers();
  }, []);
  return (
    <Layout>
      <div className="sticky top-0 bg-white z-10 pr-3 p-1 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <DropdownFilter
                options={dropdownOptions}
                selected={selectedOption}
                onChange={setSelectedOption}
                placeholder="Class"
              />
            </div>
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
            <SimpleButton title={"Add Class"} onClick={handleModal} />
          </div>
        </div>
      </div>
      <div className="w-full mr-4 pr-4 pt-2">
        {pending ? (
          <div>Loading...</div>
        ) : (
          <UserCardTwo teamMembers={teamMembers} />
        )}
      </div>
      <MainModal isOpen={showModal} onClose={handleModal} title="Add Teacher">
        <MainForm action={createTeacher}>
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
          <Submit disabled={pending} name={"Submit"} />
        </MainForm>
      </MainModal>
    </Layout>
  );
};

export default Teacher;
