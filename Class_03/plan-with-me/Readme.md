## Tours App

<img src="./public/Screenshot%202024-10-20%20122636.png" alt="screenshot"  >
<img src="./public/Screenshot%202024-10-20%20122858.png" alt="screenshot" >


**Introduction**

The **Tours App** is a simple React application that displays a list of
tours with options to read more about each tour or remove the ones
you\'re not interested in. The app dynamically updates the list based on
user interactions, and allows for refreshing the tour list if all tours
are removed.

**Features**

-   Displays a list of tours with key information like name, price,
    image, and description.

-   Allows users to toggle between a shortened description and the full
    description.

-   Provides a \"Not Interested\" button to remove a tour from the list.

-   If no tours are left, users can refresh the list to restore the
    original set of tours.

**Files Overview**

**1. App.js**

**a. State Management with useState**



```jsx
 const [tours, setTours] = useState(data); 
 ```

-   **Logic: The tours state is initialized with the imported data (an
    array of tour objects). setTours is used to update the state
    whenever a tour is removed or reset.**

**b. Removing a Tour**

```jsx
 function removeTour(id) {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);
}
 ```

-   **Logic: The removeTour function takes a tour\'s id as an argument.
    It filters out the tour with the matching id from the tours array
    and updates the state with the remaining tours using
    setTours(newTours).**

**c. Conditional Rendering for Empty Tours**

``` jsx
if (tours.length === 0) {
  return (
    <div className="refresh">
      <h2>No Tours Left</h2>
      <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
    </div>
  );
}

```

-   **Logic: If the tours array is empty (tours.length === 0), the app
    displays a \"No Tours Left\" message and a \"Refresh\" button.
    Clicking the button restores the original tour list by resetting
    tours to the initial data.**

**d. Passing Data to Child Component**
```js
<Tours tours={tours} removeTour={removeTour} />
```

-   **Logic: The current list of tours and the removeTour function are
    passed as props to the Tours component. This allows the child
    component to display the tours and handle removal when a tour is
    \"not interested.\"**

**2. Card.js**

**a. State Management with useState**
```jsx
<Tours tours={tours} removeTour={removeTour} />
```

-   **Logic: The readmore state is used to toggle between showing the
    full description of the tour or a shortened version. Initially,
    readmore is false, so only part of the description is shown.**

**b. Toggling Description (Read More / Show Less)**
```js
const description = readmore ? info : `${info.substring(0, 200)}...`;

function readmoreHandler() {
  setReadmore(!readmore);
}

```

-   **Logic:**

    -   **The description variable holds either the full tour
        description (info) or a truncated version (first 200 characters
        followed by \...) depending on whether readmore is true or
        false.**

    -   **The readmoreHandler function toggles the readmore state
        between true and false when the \"read more\" or \"show less\"
        text is clicked. This triggers re-rendering of the
        description.**

**c. Removing a Tour**
```js
<button className="red-btn" onClick={() => removeTour(id)}>Not interested</button>
```

-   **Logic: When the \"Not interested\" button is clicked, the
    removeTour function (passed as a prop from App.js) is called with
    the id of the current tour. This removes the tour from the list.**

**3. Tours.js**

**a. Mapping Over the Tours Array**
```js
{tours.map((tour) => (
  <Card key={tour.id} {...tour} removeTour={removeTour} />
))}
```

-   **Logic: The tours array is iterated over using .map(), and for each
    tour, a Card component is rendered.**

    -   **The key is set to tour.id to ensure each tour has a unique
        identifier in React\'s virtual DOM.**

    -   **The individual properties of the tour object (like id, name,
        info, etc.) are spread (\...tour) and passed as props to the
        Card component.**

    -   **The removeTour function is passed down from App.js to handle
        removing a tour when the \"Not interested\" button is clicked.**

**4. index.css**

**While this file doesn\'t contain logic in the programming sense, it
defines the visual styling of the app and contributes to the app\'s
overall functionality by:**

-   **Styling the layout of the cards and buttons.**

-   **Adding hover effects for user interactivity.**

## Summary of Key Logic

1.  **State Management (useState):**

    -   **App.js manages the state of the tours array.**

    -   **Card.js manages the state for toggling the \"read more\"
        feature.**

2.  **Filtering (Tour Removal):**

    -   **The removeTour function in App.js filters out a tour by its id
        and updates the state.**

3.  **Conditional Rendering:**

    -   **If all tours are removed, the app conditionally renders a
        message and a refresh button.**

4.  **Data Flow:**

    -   **App.js passes down the list of tours and the removal logic to
        child components (Tours and Card) via props.**

5.  **Dynamic Content:**

    -   **The description toggling in Card.js changes based on user
        interaction, using readmore state to either show the full
        content or a truncated version.**

**These core logics enable the app to dynamically display a list of
tours, allow the user to remove unwanted tours, and reset the list when
needed.**






## App.js
``` jsx
import React, {useState} from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length===0) {
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white"
        onClick={()=>{setTours(data)}}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
```

## Card.js
```js
import { useState } from "react"

function Card({id,name,info,image,price,removeTour}) {
    const [readmore,setReadmore]=useState(false)
    const description= readmore ? info : `${info.substring(0,200)}...`

    function readmoreHandler(){
        setReadmore(!readmore)
    }

    return(
        <div className="card">
           <img src={image} className="image"></img>
           <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4> 
                    <h4 className="tour-name">{name}</h4> 
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore? `show less`: `read more`}
                    </span>
                </div>
           </div>
            <button className="red-btn" onClick={()=>removeTour(id)}>
                Not interested
            </button>
        </div>
    )

}
export default Card;  
```

## Tour.js
```js
import React from "react";
import Card from "./Card";
function Tours({tours,removeTour}) {
    return (
        <div className="container">
            <div >
                <h2 className="title">Plan with Me</h2>
            </div>
            <div className="cards">
                {tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })}
            </div>
        </div>
    )
}
export default Tours;
```

## data.js
``` js
const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
];

export default data;
```

## index.css 
``` css
/* write your css here */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    height: 100vh;
}

.container{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}

.title{
    border: 7px dashed #0111a0;
    border-radius: 20px;
    font-size: 3rem;
    margin: 6vh;
    padding: 1vh 5vw;
}

.cards{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-flow: row wrap;
    max-width: 1300px;
    margin: 0 auto;
}

.card{
    width: 400px;
    height: max-content;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;;
    border-radius: 10px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.image{
    width: 300px;
    aspect-ratio: 1/1;
    object-fit: cover;
}

.tour-info{
    margin: 20px 5px;
}

.tour-price{
    color: #1faa59;
    font-size: 1.3rem;
}

.tour-name{
    font-size: 1.5rem;
}

.read-more{
    color: #12b8c8;
    text-transform: capitalize;
    cursor: pointer;
}

.red-btn{
    text-align: center;
    color: white;
    margin-top: 18px;
    padding: 10px 80px;
    border: 1px solid #b4161b;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    background: #b4161b21;
    transition: all 0.5ms;
    color: black;
}

.red-btn:hover{
    background-color: red;
    color: white;
    transition: 0.2s;
}

.refresh{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
 
.btn-white{
    margin-top: 18px;
    padding: 10px 80px;
    border: 1px solid white;
}

.btn-white:hover{
    background-color: #fff;
    color: #000;
    transition: all .2s;
    cursor: pointer;
} 
```
