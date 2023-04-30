import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - BABEL
// JSX => BABEL transpiled it to React.createElement => React.createElement Object => HTMLElement(render)

// Functional Component
const Title = () => {
  return <h1 className="title">Namaste React Functional Title Component 🚀</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading">Namaste React Functional Heading Component 🚀</h1>
    </div>
  );
};

// React Component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
