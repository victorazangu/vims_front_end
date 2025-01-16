import React from "react";
import Image from "next/image";
import DefaultImage from "@/assets/images/default.png";

const StudentMyProfileComponent = ({ student }) => {
  return (
    <section className="flex-1 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <Image
            src={student.image || DefaultImage}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {student.first_name} {student.last_name}
            </h2>
            <p className="text-gray-600">{student.address}</p>
            <p className="text-gray-600">{student.dob}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800">
            Personal Information
          </h2>
          <button className="text-blue-600 hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">First Name</p>
            <p className="text-gray-800 font-medium">Jack</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Last Name</p>
            <p className="text-gray-800 font-medium">Adams</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            <p className="text-gray-800 font-medium">jackadams@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="text-gray-800 font-medium">(213) 555-1234</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-500 text-sm">Bio</p>
            <p className="text-gray-800 font-medium">Product Designer</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800">Address</h2>
          <button className="text-blue-600 hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Country</p>
            <p className="text-gray-800 font-medium">
              United States of America
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">City/State</p>
            <p className="text-gray-800 font-medium">California, USA</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Postal Code</p>
            <p className="text-gray-800 font-medium">ERT 62574</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">TAX ID</p>
            <p className="text-gray-800 font-medium">AS564178969</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentMyProfileComponent;
