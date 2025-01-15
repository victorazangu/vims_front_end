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
} from "@/components";
const { createTeacher, getTeachers } = require("./actions");

const Teacher = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [teamMembers, setTeamMembers] = useState([]);
  const [pending, setPending] = useState(true);

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
        <div className="flex justify-end">
          <SimpleButton title={"Add Teacher"} onClick={handleModal} />
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
