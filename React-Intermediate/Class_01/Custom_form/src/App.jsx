import React, { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        hobbies: []
    });

   /*   // Single change handler for all
    // function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => {
            // If the input is a checkbox
            if (type === "checkbox") {
                return {
                    ...prevData,
                    hobbies: checked
                        ? [...prevData.hobbies, value]
                        : prevData.hobbies.filter((hobby) => hobby !== value)
                };
            }
            // If the input is a regular text, radio, or other input
            return { ...prevData, [name]: value };
        });
    }
  */


    // Handle change for text inputs, email, and password
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle change for radio buttons
    const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            gender: e.target.value
        });
    };

    // Handle change for checkboxes
    const handleHobbiesChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => {
            if (checked) {
                return {
                    ...prevFormData,
                    hobbies: [...prevFormData.hobbies, value]
                };
            } else {
                return {
                    ...prevFormData,
                    hobbies: prevFormData.hobbies.filter((hobby) => hobby !== value)
                };
            }
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${formData.username}\nEmail: ${formData.email}\nGender: ${formData.gender}\nHobbies: ${formData.hobbies.join(", ")}`);
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
               
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        // onChange={changeHandler}
                     />
                </label>
                <br /><br />

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // onChange={changeHandler}
                     />
                </label>
                <br /><br />

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        // onChange={changeHandler}
                     />
                </label>
                <br /><br />

                <label>Gender:</label><br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleGenderChange}
                        // onChange={changeHandler}
                    />
                    Male
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleGenderChange}
                        // onChange={changeHandler}
                    />
                    Female
                </label><br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={handleGenderChange}
                        // onChange={changeHandler}
                    />
                    Other
                </label>
                <br /><br />

                <label>Hobbies:</label><br />
                <label>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Reading"
                        checked={formData.hobbies.includes("Reading")}
                        onChange={handleHobbiesChange}
                        // onChange={changeHandler}
                    />
                    Reading
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Traveling"
                        checked={formData.hobbies.includes("Traveling")}
                        onChange={handleHobbiesChange}
                        // onChange={changeHandler}
                    />
                    Traveling
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Sports"
                        checked={formData.hobbies.includes("Sports")}
                        onChange={handleHobbiesChange}
                        // onChange={changeHandler}
                    />
                    Sports
                </label>
                <br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
