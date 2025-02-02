// src/app/settings/profile/profile-form.jsx
'use client';
import React, { useState } from 'react';

const ProfileForm = ({ initialProfileData, onSubmit }) => {
    const [formData, setFormData] = useState({...initialProfileData});
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
         setFormData(initialProfileData)
    }
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  const handleAddressChange = (e) => {
        setFormData({ ...formData, address: { ...formData.address, [e.target.name]: e.target.value } });
    }

  const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
         setIsEditing(false);
    }
    return (
        <div className="border border-gray-200 p-4 rounded-md bg-white mb-4">
        <div className="flex justify-between items-center">
             <h3 className="text-xl font-semibold">Personal Information</h3>
            {!isEditing && (
                <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700 cursor-pointer">Edit</button>
              )}
        </div>
          {!isEditing && (
          <div className="mt-4">
             {Object.entries(formData).map(([key, value]) => (
                 <div key={key} className="flex flex-col md:flex-row md:justify-between mb-2">
                     <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {typeof value === 'object' && value !== null ? (
                        <div className="text-gray-600">
                         {Object.entries(value).map(([addressKey, addressValue]) => (
                              <div key={addressKey} className="flex flex-col md:flex-row md:justify-between mb-2">
                                <span className="font-medium capitalize">{addressKey.replace(/([A-Z])/g, ' $1')}</span>
                                <span className="text-gray-600">{addressValue}</span>
                            </div>
                          ))}
                        </div>
                        ) : (
                          <span className="text-gray-600">{value}</span>
                        )}

                 </div>
            ))}
          </div>
        )}
        {isEditing && (
            <form className="mt-4" onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                   <div key={key} className="flex flex-col mb-4">
                         <label className="font-medium capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
                           {typeof value === 'object' && value !== null ? (
                                <div className='flex flex-col gap-4'>
                                    {Object.entries(value).map(([addressKey, addressValue]) => (
                                        <div key={addressKey} className="flex flex-col mb-4">
                                            <label className="font-medium capitalize" htmlFor={addressKey}>{addressKey.replace(/([A-Z])/g, ' $1')}</label>
                                            <input type="text"  name={addressKey} id={addressKey} value={formData.address[addressKey]} onChange={handleAddressChange} className="border border-gray-300 rounded-md p-2" />
                                         </div>
                                  ))}
                                </div>
                            ):  <input type="text"  name={key} id={key} value={formData[key]} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2" />}
                    </div>
              ))}
                <div className="flex justify-end mt-4 gap-4">
                    <button type="button" onClick={handleCancelEdit} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md transition-colors">Cancel</button>
                     <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition-colors">Save</button>
                </div>
           </form>
        )}
      </div>
    );
};

export default ProfileForm;