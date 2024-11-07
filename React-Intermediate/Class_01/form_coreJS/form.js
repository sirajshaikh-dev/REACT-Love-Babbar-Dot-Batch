function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value);

    // Display form values
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
    console.log("Hobbies:", hobbies);

    // Optionally, you can show the result to the user or send it to a server
    alert(`Username: ${username}\nEmail: ${email}\nGender: ${gender}\nHobbies: ${hobbies.join(", ")}`);
}