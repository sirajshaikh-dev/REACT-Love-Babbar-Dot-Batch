 # Class 01- Form

 ## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Key Concepts](#key-concepts)


## Demo

<img src='./public/Screenshot 2024-11-07 194051.png'>
<img src='./public/Screenshot 2024-11-07 194038.png'>

## Features

- Input fields for text, email, and comments
- Checkbox to toggle visibility (on/off)
- Radio buttons for selecting mode (Online/Offline)
- Dropdown menu to select a favorite car

## Usage

### To use this form:

- Fill in the fields, choose options, and submit.
- Check the console for the form data output.

## Code Structure

- App Component: The main component that includes state management and event handling for the form.
- State (formData): Stores all form inputs as a single object.
- Event Handlers:
changeHandler: Updates state based on input changes.
- SubmitHandler: Prevents default form submission and logs the form data.

## Key Concepts
**1. useState Hook**
- Manages the state of form fields, checkbox, radio buttons, and dropdown selection.
```js
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
  isVisible: true,
  mode: "",
  favCar: "",
});

```

**2. Controlled Components:**
- Each form element’s value is controlled by the component state, ensuring the UI stays in sync with data.
```js
<input type="text" name="firstName" onChange={changeHandler} value={formData.firstName} />

```
**3. Event Handling:**
- onChange captures input changes and updates the state.
onSubmit prevents default form submission and logs form data.
```js
function changeHandler(e) {
  const { name, value, checked, type } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === "checkbox" ? checked : value,
  }));
}

function submitHandler(e) {
  e.preventDefault();
  console.log(formData);  // Log form data on submit
}

```
**4.Object Spread Operator:**
- Used to maintain previous state values while updating only the changed input.
```js
setFormData((prevData) => ({
  ...prevData,
  [name]: type === "checkbox" ? checked : value,
}));

```