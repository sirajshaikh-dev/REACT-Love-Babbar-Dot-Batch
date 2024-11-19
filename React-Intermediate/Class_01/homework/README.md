# Homework 
- # [Source Code](./)

<img src='./src/assets/Screenshot 2024-11-06 112018.png' />
<img src='./src/assets/Screenshot 2024-11-07 190329.png' />

<img src='./src/assets/Screenshot 2024-11-07 190559.png' />
<img src='./src/assets/Screenshot 2024-11-07 191017.png' />


## Important Concepts

### Handling all State Object

```jsx
 function changeHandler(event) {
    const {name,value,checked, type}=event.target
    setFormData((prevData)=>{
      return{...prevData,
        [name]: type=== 'checkbox' ? checked : value}
    })
  }
```
### Dealing with Boolean values
```jsx
const [formData, setFormData] = useState({
    comments: false,
    candidates: false,
    offers: false,
})
```
