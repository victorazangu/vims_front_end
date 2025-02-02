// src/app/settings/security/security-form.jsx
import React, { useState } from 'react';

const SecurityForm = ({ initialSecurityData, onSubmit }) => {
    const [formData, setFormData] = useState({...initialSecurityData});
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
         setFormData(initialSecurityData)
    }
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
      onSubmit(formData)
     setIsEditing(false);
  }
  return (
        <div className="border border-gray-200 p-4 rounded-md bg-white mb-4">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Change Password</h3>
              {!isEditing && (
                 <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700 cursor-pointer">Edit</button>
              )}
        </div>
            {!isEditing && (
              <div className="mt-4">
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="flex flex-col md:flex-row md:justify-between mb-2">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-gray-600">{"*".repeat(value.length)}</span>
                    </div>
                ))}
             </div>
            )}

            {isEditing && (
                <form className="mt-4" onSubmit={handleSubmit}>
                    {Object.entries(formData).map(([key, value]) => (
                        <div key={key} className="flex flex-col mb-4">
                            <label className="font-medium capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
                                 <input type="password" name={key} id={key} value={formData[key]} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2" />
                           </div>
                     ))}
                     <div className="flex justify-end mt-4 gap-4">
                        <button type="button"  onClick={handleCancelEdit} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md transition-colors">Cancel</button>
                         <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition-colors">Save</button>
                     </div>
               </form>
            )}

      </div>
    );
};

export default SecurityForm;