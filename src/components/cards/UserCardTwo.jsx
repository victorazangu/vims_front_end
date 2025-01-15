"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UserCardTwo = ({ teamMembers }) => {
  const router = useRouter();
  const handleCardClick = (empId) => {
    router.push(`/teachers/${empId}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          onClick={() => handleCardClick(member.emp_id)}
        >
          <Image
            src={member.imgSrc}
            alt={member.name}
            className="w-full h-50 object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-white font-bold text-xl">{member.name}</h2>
            <p className="text-gray-300 text-sm">{member.title}</p>
            <p className="text-gray-400 text-sm">{member.emp_id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardTwo;
