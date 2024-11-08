# Custom Form Practice

# Important Concepts 
### Single Change Handler
```js
function changeHandler(event) {
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
```

### Handling Array in state object
```jsx
const [formData, setFormData] = useState({
        hobbies: []
    });
```
```jsx
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
```