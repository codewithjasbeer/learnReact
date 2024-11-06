# React Components 

React components are the building blocks of any React application. They allow developers to split the UI into independent, reusable parts, making code more organized and easier to manage. Components can be thought of as JavaScript functions or classes that return HTML-like elements to display on the screen.

React has two main types of components:

Functional Components: Defined as JavaScript functions, functional components are simpler and preferred for stateless components.
Class Components: Defined as ES6 classes, class components allow the use of state and lifecycle methods (though they are now less common with the advent of React Hooks).


# Setting Up the Project
1. Create a React App 
2. Structure: This small project will have:
  A main App component that displays a header and a list of items.
  A Header component to display the title.
  An Item component to render each item in the list.

# Creating Components
1. App Component (src/App.js)
The App component is the main component that renders the Header and multiple Item components.
2. Header Component (src/components/Header.js)
The Header component is a simple functional component that displays the title.
3. Item Component (src/components/Item.js)
The Item component receives a name prop and displays it.

