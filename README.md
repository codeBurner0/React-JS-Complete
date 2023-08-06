# React JS

- [**https://codesandbox.io/s/](https://codesandbox.io/s/) :- create and build app online.**
- It is a library of JavaScript for building user interfaces(human-computer interaction in a device).
- It was designed  by Jordan Walke (a software engineer at Facebook) around 2011.
- It was a open source(free of cost and different developers can contribute the error solutions).

## Benefits Of React

- component based approach.(every application you will develop in react will be made up of pieces called components) (Components make the building of any application much easier) (you don’t need to write the same code again and again and modification is also done very fast) ( for example- in layered architecture in computer networks and modular approach in software engineering).
- increase code reusability.
- Easy Structure(If we compared with normal HTML Dom then it has many html tags and Dom structuring become very complex or Dom tree looks more complex but in React everything we represent with components and also React has its virtual Dom)

### Command to create react app

npx create-react-app app_name

when we run command npm start then react run the script file which is mentioned in the script—>start—>script file which is present in the package.json file.

## JSX(JavaScript Syntax Extension)

- It is a syntax extension for JS that allows you to write HTML-like code in your JS file
- JSX is stricter than HTML. You have to close tags like `<br />`.
- Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>`or an empty `<>...</>`

```jsx
**function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}**
```

## Displaying Data

```jsx
**const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}**
```

## Condition Blocks In React

```jsx
**<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

If you dont want to use else(:), then use && operator
<div>
  {isLoggedIn && <AdminPanel />}
</div>**
```

### What is a Component?

Component is a building block used to create react app. It allows you to break the whole application into smaller pieces by which it reduces the complexity and you can easily maintain the code.

### There are two types of components in react

1. **Functional Components:** These are also known as stateless components or functional stateless components. They are defined using JavaScript functions and are primarily used for presenting UI elements. They receive data (props) as input and return JSX (JavaScript XML) elements as output.
    
    Example of a functional component:
    
    ```jsx
    **function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }**
    
    ```
    
2. **Class Components:** These are also known as stateful components. They are defined using JavaScript classes and can hold their own internal state. Class components have more features compared to functional components, such as lifecycle methods (although React Hooks have largely replaced the need for class components).
    
    Example of a class component:
    
    ```
    **import React, { Component } from 'react'
    
    export default class ComponentIntro extends Component {
      render() {
        return (
          <div>
            <h1>Hello World</h1>
          </div>
        )
      }**
    ```
    

> **If you want to import the component, then you have to first export that component.**
> 

> **You can create any number of components within the same components, but it is not a good practice.**
> 

## Exporting Files

```jsx
**Export single component
import React from 'react';
function App(){
  return(
    <>
    <h1>This is App</h1>
    </>
  )
}
export default App;

Export multiple component
import React from 'react';
function App(){
  return(
    <>
    <h1>This is App</h1>
    </>
  )
}

function SecApp(){
  return(
    <>
    <h1>This is secong App</h1>
    </>
  )
}
export  {App,SecApp};**
```

## Importing Files

```jsx
**import single and multiple component
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,SecApp} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SecApp/>
  </React.StrictMode>
);
reportWebVitals();**

```

## If we delete `node_modules`. How to run our app again successfully ?

- **use `npm install` command**

## Create a Page with multiple React Apps. Both React Apps should be independent of each other.

```jsx
**import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,SecApp} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SecApp/>
  </React.StrictMode>
);
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <App />
    <SecApp/>
  </React.StrictMode>
);
reportWebVitals();**
```

> **To generate random images src="[https://source.unsplash.com/random/300x300](https://source.unsplash.com/random/300x300)"**
> 

> **if you don’t want to use props for to get the data, then you can simply pass the object of arguments(This is known as de-structuring).**
> 

```jsx
**function Video({title,src}) {
  return (
    <div>
      <div>
        <img className='img' src={src} alt='' />
        <div className='title'>{title}</div>
      </div>
    </div>
  )
}**
```

## Important

- **<app/>(start name with upper case)    X                                <App/>    ✓**
- **use Fragment (div container Otherwise nulltag(<> </>)),Otherwise JSX gives error**

```
**function Video() {
  return (
    <div> Hello</div>                                                X(wrong JSX error)
    <h1>My name is Ankit Anand</h1>
  )
}

function Video() {
  return (
<>
    <div> Hello</div>                                                 ✓(right)
    <h1>My name is Ankit Anand</h1>
</>
  )
}**
```

- **It is mandatory to close all the tags.              <br>  X(wrong)          <br/>    ✓(right)**
- **JSX uses camel case writing so use all the property of css in camel case design.**
    - **style={{background-color="red"}}  X(wrong)       style={{backgroundColor="red"}}  ✓(right)**

## Passing default data in the arguments or props

```jsx
**function Video({title="Mondo DB",src,views,time}) {
  return (
<>
	<h1> This is passing default data value</h1>
</>
)
}
Note:- If you will not pass the title value then in this case title takes the default value of the title which is described in the arguments.

//you can also get values from another component by props

function Video(props) {
now get the values by props.title, props.src, props.views,etc

Note; in class component you dont need to pass the props as parameter, you can just simply get values by using this.props.title bacuase class comp. extends component class.**
```

## Click Events and Function

```jsx
**import React from 'react'

function ComponentIntro() {

    function Alert(){
        alert("Hello, This is me.")
    }
  return (
    <div>
      <h1>Click me</h1>
      <button onClick={()=>Alert()}>Click</button>
    </div>
  )
}

export default ComponentIntro**
```

## States In React

- State in React is a dynamic container for managing and reflecting changes in a component's data
- State in React is used to manage and store dynamic data that can change over time, allowing components to re-render and update based on these changes. It represents the current condition of a component.
- State is typically used in class components and is managed internally within the component. With the introduction of React Hooks, functional components can also manage state using the **`useState`** hook.

```jsx
**Note: hooks are not compatible with class components. Hooks are only used in functional components.
//Class Component
import React from 'react'
class CounterClass extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    Increase(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.Increase()}>Increase</button>
            </>
        )
    }
}

export default CounterClass

//Functional Component
import React,{useState} from 'react'

function CounterFunction() {
    const [count,setCount]=useState(0)
    function Increase(){
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>Increase()}>Increase</button>
    </div>
  )
}

export default CounterFunction**
```

## Props In React

In React, "props" is short for "properties," and it refers to a mechanism for passing data from a parent component to a child component.

Here's how props work:

1. **Passing Data:** Props allow you to pass data, such as values or functions, from a parent component to a child component. This enables the child component to use the data provided by the parent component.
2. **Immutable:** Props are immutable, meaning that once they are set, they cannot be modified by the child component. If a child component needs to modify the data, it typically involves passing a function from the parent component that can update the data.

Here's an example of how props are used in React:

```jsx
// ParentComponent.jsx
**import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'Alice';
  const age = 30;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

export default ParentComponent;**

```

```jsx
// ChildComponent.jsx
**import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;**

```

In this example, the `ParentComponent` passes `name` and `age` as props to the `ChildComponent`. The `ChildComponent` receives these props and uses them to render the data.

### Update Props On Click

```jsx
**//parent component**
**import React,{useState} from 'react'
import Child from './Child'

function Parent() {
    const [count,setCount]=useState(0);

    function Alert(){
        setCount(count+1);
    }
  return (
    <div>
      <Child Alert={Alert} count={count}/>
    </div>
  )
}

export default Parent

//child component using functional component
import React from 'react'
function Child({Alert,count}) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>Alert()}>Click</button>
    </div>
  )
}

export default Child

//child component using class component
import React, { Component } from 'react'
export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={()=>this.props.Alert()}>Click</button>
      </div>
    )
  }
}**
```

## Spread Operator(to print object)

```jsx
**const obj={
   title:"HTML Tutorial",
   src:"https://source.unsplash.com/random/300x100",
   views:'80K',
   time:'9 hrs ago'
}
<Video {...obj}/>   It is equal to    <Video title="Node JS Tutorial"  src="https://source.unsplash.com/random/300x300" views='2M' time='3 months ago'/>**
```

## Condition in React JS

```jsx
**{(verified)?'✅': ""}  If the value of verified is equal to true, then it print ✅ Otherwise empty string.
{(verified) && '✅'} short circuit method**
```

## How to print Array Of Object

```jsx
**const Arrobj = [
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/200x100",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/200x100",
    verified: false,
  },
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/300x200",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/300x200",
    verified: true,
  },
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/300x120",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/300x120",
    verified: true,
  },
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/300x150",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/300x150",
    verified: false,
  },
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/100x100",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/100x100",
    verified: true,
  },
  {
    title: "HTML Tutorial",
    src: "https://source.unsplash.com/random/300x100",
    views: "80K",
    time: "9 hrs ago",
    channel: "CodeWithMike",
    logo: "https://source.unsplash.com/random/300x100",
    verified: true,
  },
  
];

{Arrobj.map((element) => (
      <Video
        title={element.title}
        src={element.src}
        views={element.views}
        time={element.time}
        channel={element.channel}
        logo={element.logo}
        verified={element.verified}
      ></Video>
    ))}**
```

## Way to pass the internal content of component

```jsx
**call in another component
<PlayButton>Play</PlayButton>

component
<button onClick={handleClick} className='but'>{children}</button>**
```

## Pass Function

```jsx
**<PlayButton onShow={()=>console.log("This is Play")} >Play</PlayButton>
// If you will not provide the value as a function then it will execute without a click because in that way it will works as a normal print statement.
<PlayButton onShow={()=>alert("This is Submit")}>Submit</PlayButton>

function PlayButton({children,onShow}) {
  function handleClick(){
  return onShow();
  }
  return (
    <div>
      <button onClick={handleClick} className='but'>{children}</button>
    </div>
  )
}**
```

## Play or Pause Logic

```jsx
<PlayButton onPause={()=>console.log("Playing...")} onPlay={()=>console.log("Paused...")}>Play</PlayButton>

var val=false;
  function handleClick(){
    if(val){
      onPlay()
    }else{
      onPause()
    }
    val=!val;
  }
```

## Event Bubbling

- If an event is execute(which is on child element) then it propagate to its parent elements(means invoke its parent events also if they have the same event but action may differs like onclick).
- To stop this we use

```jsx
whenever you click on its children(if children has any event) 
    then this event is execute as well as pareant element is also execute. This is event bubbling
    for example:- in this case whenever you click on playbutton then it will execute the functioning 
    of playbutton and the functioning of the div tag also. 
    So to avoid this use e.stopPropagation()
```

component class has props already so we dont need to insert it.(in class component)

this refers to object to call predefined functions or methods

### **CDN**

- **CDN stands for Content Delivery Network. A CDN is a network of servers that are distributed across the globe to provide faster delivery of content to users. In web development, CDNs are commonly used to host static files such as JavaScript libraries, CSS stylesheets, and images. By using a CDN, these files can be cached on servers closer to the user, reducing the time it takes to download them and improving the overall performance of the website or application.**
- **If you want to run react without installation, then you have to add three
scripts(react, react dom, babel)**

### React Dom

React DOM is a package that serves as the glue between React and the DOM (Document Object Model). It provides methods for rendering React components to the DOM, updating those components when necessary, and handling user events. React DOM is what allows React to create and manage the user interface of a web application.

1. **What is React?**
2. **What is Render?**
3. **What is reconciliation?**
4. **Why react is fast?**
5. **What is NPM?**
6. **Difference Between NPM and NPX?**
7. **What is Yarn?
-alternative of npm**
8. **What is the need of package.json and package-lock.json file?
-package.json has all the details about the project(dependencies, name, author) and
package-lock.json file has the history of all the dependencies(versions)**
9. **What is the need of reportWebvital file and robot.txt file in public folder ?**
10. **What is the importance of the gitignore file?
-It ignore all the files anf folder which you mentioned in it at the time of commit
the files.**
11. **Why we have not to push node modules to github?
-because they have heavy size(1gb or greater) but you can simply download the node
modules by simply running a command called npm install.**
12. **What is component?
- a piece of code that can be reuse**
13. **Types of components?
-mainly two types of components
-Functional component
-Class component**
14. **Difference between class and functional components?**
15. **What is react fragment?**
16. 
17. **Types of export and import?
-two types
-named export and named import( use {} to import and export)
-default import and export**

### render() method in class component

**The `render()` method is a fundamental method in React class components that returns a view to be displayed on the screen. It must return a single React element or null, and it is called by React whenever the component state or props change.**

### Change State in Functional and Class components

```jsx
**Note: hooks are not compatible with class components. Hooks are only used in functional components.
//Class Component
import React from 'react'
class CounterClass extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    Increase(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.Increase()}>Increase</button>
            </>
        )
    }
}

export default CounterClass

//Functional Component
import React,{useState} from 'react'

function CounterFunction() {
    const [count,setCount]=useState(0)
    function Increase(){
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>Increase()}>Increase</button>
    </div>
  )
}

export default CounterFunction**
```

### Get input box value

```jsx
**import React,{useState} from 'react'
function GetInputBoxValue() {

    const [data,setData]=useState()
    const [click,setClick]=useState()
    function getValue(e){
        setData(e.target.value)
    }
    function Clicker(val){
        (val)?setClick(true):setClick(false);

    }
  return (
    <div>
      <input type="text" onChange={getValue}/>
      {(click)?<h1>{data}</h1>:null}
      <button onClick={()=>Clicker(true)}>Click</button>
    </div>
  )
}

export default GetInputBoxValue**
```

### Activity(Hide and Show)

```jsx
**import React, { useState } from "react";

function Tutorial() {
  const [data, setData] = useState(false);
  function Toggle() {
    setData(!data);
  }
  return (
    <div>
      {data ? <h1>Hello</h1> : <h1></h1>}
      <button onClick={() => Toggle()}>Toggle</button>
    </div>
  );
}

export default Tutorial;**
```

## Handle Form in React

```jsx
**import React, { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("Ankit Anand");
  const [email, setEmail] = useState("ankit@gmail.com");
  const [option, setOption] = useState("Java");
  const [val, setVal] = useState(false);
  function getFormData(e){
    setVal(!val)
    e.preventDefault();//if you click on submit button, then it refreshes the data but if you use  
    //this then it prevent refreshing the ddta or loading the react page
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        choose your favourite Programming language:{" "}
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option>Java</option>
          <option>C++</option>
          <option>Python</option>
          <option>JavaScript</option>
        </select><br/>
        Accept Term and Condition <input type="checkbox" onChange={(e)=>setVal(e.target.checked)}/>
        <br/>
        {(val?<div>{`The name of the persion is ${name}.
        The email was given is ${email}.
        The selected programming language is ${option}`}</div>:null)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicForm;**
```

## Validation In React Form

```jsx
**import React, { useState } from "react";

function Validation() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
    
  function nameHandle(e){
    let item = e.target.value;
    if (item.length < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }

  function passwordHandle(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item);
  }

  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        Name: <input type="text" value={name} onChange={nameHandle} />
        {nameErr ? <span>Not Valid</span> : null}
        <br/><br/>
        Email: <input type="text" value={pass} onChange={passwordHandle} />
        {passErr ? <span>Not Valid</span> : null}
        <br/><br/>
        <button disabled={nameErr || passErr} >Submit</button>
      </form>
    </div>
  );
}

export default Validation;**
```

### Pass Function as a Prop

```jsx
**import React from 'react';

// ChildComponent receives a function as a prop
function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.onClickFunction()}>Click Me</button>
    </div>
  );
}

// ParentComponent contains the function and passes it to ChildComponent
function ParentComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h2>Passing Function as Prop Example</h2>
      <ChildComponent onClickFunction={handleClick} />
    </div>
  );
}

export default ParentComponent;**
```

### Pass HTML as a prop

```jsx
**function ParentComponent() {
  const htmlString = "<h1>Hello, world!</h1>";

  return (
    <div>
      <ChildComponent html={htmlString} />
    </div>
  );
}

function ChildComponent(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}

In this example, the ParentComponent defines the HTML string as a variable htmlString, and passes it down to the ChildComponent as a prop. The ChildComponent then uses the dangerouslySetInnerHTML attribute to render the HTML.**
```

## React Lifecycle Methods

React components have a series of lifecycle methods that are called at different points during the component's lifespan. These methods allow you to hook into the component at specific moments to perform various operations.

### Mounting

The "mounting" refers to the process of creating an instance of a component and inserting it into the DOM.

- `constructor()`: Called when the component is first created. You can use this method to initialize state and bind methods.
- `render()`: Called to create the component's UI.(called whenever you update the state and props and after component is first created).
    - It must be implemented to define what the component should render.
- `componentDidMount()`: Called after the component is mounted to the DOM. You can use this method to perform side effects, such as fetching data from an API.

```jsx
**import React from 'react';

class MountingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, React!' };
  }

  componentDidMount() {
    // Called after the component is mounted (inserted into the DOM)
    console.log('Component has been mounted');
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default MountingExample;**
```

### Updating

- `shouldComponentUpdate(nextProps, nextState)`: Called before the component is updated. You can use this method to determine if the component should update or not. By default, it returns `true`, which means the component will always update.
- `render()`: Called to create the component's UI.
- `componentDidUpdate(prevProps, prevState)`: Called after the component is updated. You can use this method to perform side effects, such as fetching data from an API.

```
**import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        if(this.state.count>=5 && this.state.count<=10){
            return false
        }
        return true
    }

    componentDidUpdate(){
        console.log("updated")
    }
// componentdidupdate only run when shouldcomponentupdate return true
    clicker() {
        this.setState({
            count:this.state.count+1
        })
    }
    // call after html loaded
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.clicker()}></button>
      </div>
    )
  }
}**
```

### Unmounting

- `componentWillUnmount()`: Called before the component is removed from the DOM. You can use this method to perform cleanup tasks, such as removing event listeners.

```
**import React, { useState } from 'react'
import ComponentDidUnmount from './ComponentDidUnmount'
function DidUnmount() {
    const [data,setData]=useState(true)
  return (
    <div>
      {data?<ComponentDidUnmount/>:<></>}
      <button onClick={()=>setData(!data)}>click me</button>
    </div>
  )
}

export default DidUnmount

import React, { Component } from 'react'
export default class ComponentDidUnmount extends Component {
    componentWillUnmount(){
        console.log("component will unmount")
    }
  render() {

    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}**
```

### Error Handling

- `componentDidCatch(error, info)`: Called when an error occurs in a child component. You can use this method to handle errors and display an error message to the user.

```jsx
**class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Error:', error);
    console.info('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred!</div>;
    }
    return this.props.children;
  }
}**
```

These are the basic lifecycle methods of a React component. By using these methods, you can create powerful and dynamic UIs that respond to user interactions and changes in data.

## Style In React JS

In React, there are several ways to style your components. Here are some common approaches along with examples:

**Inline Styles:**
You can apply styles directly to JSX elements using inline styles. Inline styles are defined as JavaScript objects where the keys are CSS property names in camelCase and the values are the corresponding CSS values.

```jsx
**import React from 'react';

function InlineStyleExample() {
  const style = {
    color: 'blue',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  return (
    <div style={style}>
      This text is styled with inline styles.
    </div>
  );
}

export default InlineStyleExample;**

```

**CSS Modules:**
CSS Modules allow you to write traditional CSS files and import them in your component files. Class names are automatically scoped to the component, avoiding global conflicts.

Create a CSS file (e.g., `styles.module.css`):

```css
**.myButton {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}**

```

Use CSS Modules in a component:

```jsx
**import React from 'react';
import styles from './styles.module.css'; // Import CSS module

function CSSModulesExample() {
  return (
    <button className={styles.myButton}>
      Click me
    </button>
  );
}

export default CSSModulesExample;**
```

**External Css:** 

in above similar way, you can create the external css file and import it in component and use the classes by class name attribute which you already define in external css file.

## Pure Components

- Pure components are optimized for performance, as they implement a shallow comparison of props and state to determine whether a re-render is necessary.
- Pure Components are used to reduce unnecessary re-renders and improve the overall efficiency of your application.
- It compare the new state with previous state if it change then it will re-render the component and change the sate normally but if it does not change then it will not re-render the component.

> In React, components re-render under certain conditions. React uses a process called reconciliation to determine when to update the user interface. Here are some conditions that trigger a component to re-render:
> 
> 1. **State Change**: When a component's internal state changes using `setState()` or `useState()`, React triggers a re-render to reflect the updated state.
> 2. **Props Change**: When a parent component passes new props to a child component, the child component re-renders to reflect the changes in props.
> 3. **Context Change**: If a component consumes data from the Context API (`React.createContext`), it will re-render when the context value changes.
> 4. **Force Update**: You can explicitly trigger a re-render by calling the component's `forceUpdate()` method.
> 5. **Hooks**: Components using React Hooks like `useEffect`, `useMemo`, and `useCallback` might re-render based on the dependencies specified in these hooks.
> 6. **Parent Component Re-render**: If a parent component re-renders for any reason, its child components will also re-render.
> 7. **PureComponent/shouldComponentUpdate**: In class components, if you extend `PureComponent` or implement `shouldComponentUpdate`, React will perform a shallow comparison of props and state to determine if a re-render is necessary.
> 8. **Component Mounting**: When a component is initially mounted, it renders for the first time.
> 9. **Component Unmounting**: When a component is removed from the DOM, it is unmounted and will not re-render.
> 10. **Lifecycle Methods**: Certain lifecycle methods like `componentDidUpdate` and `getSnapshotBeforeUpdate` are triggered during a component update, allowing you to manage re-render conditions.
> 11. **React Router**: If you're using React Router, navigation between different routes can cause components to re-render.

```
**import React, {PureComponent} from 'react'

export default class PureComponentFunction extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    Clicker(){
        this.setState({
            count:this.state.count+1,//re-render the component 
            //count:1 not re render the component
        })
    }
  render() {
    console.log("re-render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.Clicker()}>Click me</button>
      </div>
    )
  }
}**
```

# Hooks In React

- If you want to change the state, then you can use setstate method to update the state and you can also use life cycle methods in class components to enhane or bulding advance application. But you cannot use these features in functional components, So due to this react introduces hook by which you can do all these things in a very simpler manner.The most commonly used Hooks are useState, useEffect, useContext, and useReducer.
- In simpler terms, hooks are functions that give you superpowers to work with state and perform actions (side effects) within your functional components, making your code more organized and easier to understand.

### UseState Hook

`useState` is a hook in React that allows you to add state to functional components. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update that value. You can use this function to update the state and trigger a re-render of the component.

```jsx
**import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the "count" state using the "setCount" function
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;**
```

### UseEffect Hook

- The `useEffect` hook is a built-in hook in React that allows you to add side effects to your functional components. Side effects include things like fetching data from an API, updating the DOM, or setting up event listeners.
- The `useEffect` hook takes a function as an argument, which will be called after the component has been rendered. You can use this function to perform any side effects that are necessary for your component to function correctly.
- By default, the `useEffect` hook will run after every render. If you want to limit the number of times it runs, you can pass a second argument to the hook. This argument is an array of values that the hook should watch for changes. If any of these values change, the hook will run again. If you want to run the hook only once, you can pass an empty array as the second argument.

```jsx
**import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This function will be executed after the component renders

    // Simulating data fetching
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // Cleanup function (optional)
    return () => {
      // This function will be executed before the component unmounts
      // It can be used to clean up resources like subscriptions or timers
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExampleComponent;**
```

## useMemo Hook

- The `useMemo` hook is a built-in hook in React that allows you to memoize expensive calculations so that they don't have to be re-computed every time the component re-renders.
- It takes a function as its first argument and an array of dependencies as its second argument. The function will only be re-computed if any of the dependencies change. You can use this hook to optimize your components and improve performance.

```
**import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(1);
    const fun=useMemo(function Clicker(){
        console.log("render")
        return count*10;
    },[count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <button onClick={()=>setCount(count+1)}>Click Count</button>
      <button onClick={()=>setItem(item*10)}>Click Item</button>
      <h1>{fun}</h1>
    </div>
  )
}
export default UseMemo**
```

## useRef Hook And ref in React

It allows you to access and manipulate DOM elements or other values without triggering a re-render.

```jsx
**//class components
import React, { Component,createRef } from 'react'

export default class UseRefClass extends Component {
    constructor(){
        super();
        this.ref=createRef();
    }
    Clicker(){
        console.log(this.ref.current.value);
        this.ref.current.style.color="red";
        this.ref.current.style.backgroundColor="gray";
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.ref}/>
        <button onClick={()=>this.Clicker()}>Submit</button>
      </div>
    )
  }
}

//Functional components
import React,{useRef} from 'react'

function UseRefFun() {
    const ref1=useRef(null);
    function Clicker(){
        ref1.current.value="1000";
        ref1.current.style.color="green";
        ref1.current.style.display="none";//hide on click
        ref1.current.focus() //focus on click
    }
  return (
    <div>
      <input type="text" ref={ref1}/>
      <button onClick={Clicker}>Click me</button>
    </div>
  )
}

export default UseRefFun**
```

### Can we use more than one use ref in class?

```jsx
**Yes, you can use more than one use ref in class.
constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.otherRef = React.createRef();
  }**
```

### Forward Ref

In React, the **`forwardRef`** function is a way to pass a **`ref`** from a parent component to a child component.

```jsx
//parent
**import React,{useRef} from 'react'
import ForwardRef1 from './ForwardRef1';

function ForwardRef2(props) {
    const iref=useRef(null);
    function Clicker(){
        iref.current.style.color="red";
        iref.current.focus()
        iref.current.style.backgroundColor="black";
    }
  return (
    <div>
        <ForwardRef1 ref={iref}/>
      <button onClick={Clicker}>Update Input</button>
    </div>
  )
}

export default ForwardRef2

//child
import React, { forwardRef } from 'react'

function ForwardRef1(props,ref) {
    
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwardRef1);**
```

## Difference between controlled and uncontrolled Components.

In React, the concepts of controlled and uncontrolled components are related to how you manage and manipulate form elements and their data within your application.

1. **Controlled Components:**
A controlled component is one where the React component itself manages and controls the state of the form element. This means that the value of the form element (such as an input field) is controlled by React's state and is updated through state changes. When the user interacts with the form element, it triggers a change event which, in turn, updates the component's state. This allows you to have full control over the data and behavior of the form element.

Example of a controlled input component:

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      />
    );
  }
}

```

1. **Uncontrolled Components:**
An uncontrolled component is one where the form element maintains its own state and does not rely on React's state. In this case, you typically use a ref to access the DOM element and retrieve its value when needed. Uncontrolled components are often used when you want to integrate React with non-React code or when you prefer to let the DOM handle the state of the form element.

Example of an uncontrolled input component:

```jsx
class UncontrolledInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleButtonClick = () => {
    const inputValue = this.inputRef.current.value;
    console.log('Input value:', inputValue);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleButtonClick}>Log Value</button>
      </div>
    );
  }
}

```

In general, it's recommended to use controlled components in most cases because they provide a predictable way to manage and validate form data within your React application. However, uncontrolled components can be useful in specific scenarios where integrating with external libraries or managing state manually makes more sense.

### High Order component

take compo as an input and give comp as an output

```jsx
**import React from 'react'
import {HocRED,HocGREEN} from './Hoc'
import CounterFunction from '../CounterFunction'

function UseOfHOF() {
  return (
    <div>
      <HocRED CounterFunction={CounterFunction} />
      <HocGREEN CounterFunction={CounterFunction} />
    </div>
  )
}
export default UseOfHOF

//take component as an input and return component as an output
import React from 'react';
function HocRED(props) {
  return (
    <h1 style={{backgroundColor:'red',color:'orange',width:'100px'}}><props.CounterFunction/>Red</h1>
  )
}
function HocGREEN(props) {
  return (
    <h1 style={{backgroundColor:'green',color:'brown',width:'100px'}}><props.CounterFunction/>Green</h1>
  )
}
export {HocRED,HocGREEN};**
```
