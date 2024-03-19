import React, { useState } from 'react';
import axios from 'axios';

const AddPersonForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        profession: '',
        salary: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/addPerson', formData);
            console.log('Person added successfully');
            // Optionally reset form fields
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                profession: '',
                salary: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Failed to add person:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} />
            <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
            <button type="submit">Add Person</button>
        </form>
    );
};

export default AddPersonForm;
