import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="blogs py-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" text-left blog shadow-sm border px-10 py-5 rounded-sm">
          <span class=" font-mono text-4xl">
            <span>1</span>
          </span>
          <h2 className="text-2xl md:text-3xl mb-5 text-green-700 font-bold">
            How does prototypical inheritance work?{" "}
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object. When it
            comes to inheritance, JavaScript only has one construct: objects.
            Each object has a private property which holds a link to another
            object called its prototype.{" "}
          </p>
        </div>
        <div className=" text-left blog shadow-sm border px-10 py-5 rounded-sm">
          <span class=" font-mono text-4xl">
            <span>2</span>
          </span>
          <h2 className="text-2xl md:text-3xl mb-5 text-green-700 font-bold">
             How will you improve the performance of a React Application?
          </h2>
          <p>
          To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components
          </p>
        </div>
        <div className=" text-left blog shadow-sm border px-10 py-5 rounded-sm">
          <span class=" font-mono text-4xl">
            <span>3</span>
          </span>
          <h2 className="text-2xl md:text-3xl mb-5 text-green-700 font-bold">
          What are the different ways to manage a state in a React application? 
          </h2>
          <p className="font-bold">There are four main types of state you need to properly manage in your React apps:</p>
          
                <ul>
                                <li> Local state </li> 
                                <li> Global state </li>
                            <li> Server state </li>
                            <li> URL state </li>
                </ul>
                                
                
        
        </div>
        <div className=" text-left blog shadow-sm border px-10 py-5 rounded-sm">
          <span class=" font-mono text-4xl">
            <span>4</span>
          </span>
          <h2 className="text-2xl md:text-3xl mb-5 text-green-700 font-bold">
          Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h2>
          <p> One should never update the state directly because of the following reasons:</p>
  <ul>
      <li> If you update it directly, calling the setState() afterward may just replace the update you made.</li> 
      <li> When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li> 
      <li>You will lose control of the state across all components.</li>
  </ul>



        </div>
        <div className=" text-left blog shadow-sm border px-10 py-5 rounded-sm">
          <span class=" font-mono text-4xl">
            <span>1</span>
          </span>
          <h2 className="text-2xl md:text-3xl mb-5 text-green-700 font-bold">
          What is a unit test? Why should write unit tests?
          </h2>
          <p>
          Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default Blogs;
