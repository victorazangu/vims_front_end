"use client";
import { useState } from "react";
import { Layout, UserCard, SimpleButton } from "@/components";
const { teachersData } = require("@/data/constants");

const Teacher = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  return (
    <Layout>
      <div className="p-2 m-2 ">
        <div className="flex justify-end">
          <SimpleButton title={"Add Teacher"} onClick={handleModal} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachersData.map((teacher) => (
          <UserCard
            key={teacher.id}
            name={teacher.name}
            designation={teacher.designation}
            image={teacher.image}
            bg="#6b7280"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Teacher;
