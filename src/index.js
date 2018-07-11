import React from "react";
import ReactDOM from "react-dom";
import TextTruncate from "./components/TextTruncate";

import "./styles.css";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sodales lorem. Sed rutrum sagittis odio eu pretium. Sed ultricies metus ac aliquet mollis. Ut bibendum tellus ut enim scelerisque, sed laoreet urna euismod. Phasellus tempor dui vel sapien vehicula, in fringilla nulla pretium. Fusce sagittis urna id suscipit volutpat. Fusce laoreet ultricies pretium. Vivamus lobortis rutrum quam ac rhoncus. In in consequat odio, at dictum dolor. Maecenas non sollicitudin lorem, eu faucibus neque. Nullam fringilla velit vel posuere aliquam. Vivamus sem nisi, luctus sed lacus et, cursus porttitor ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sodales lorem. Sed rutrum sagittis odio eu pretium. Sed ultricies metus ac aliquet mollis. Ut bibendum tellus ut enim scelerisque, sed laoreet urna euismod. Phasellus tempor dui vel sapien vehicula, in fringilla nulla pretium. Fusce sagittis urna id suscipit volutpat. Fusce laoreet ultricies pretium. Vivamus lobortis rutrum quam ac rhoncus. In in consequat odio, at dictum dolor. Maecenas non sollicitudin lorem, eu faucibus neque. Nullam fringilla velit vel posuere aliquam.";

function App() {
  return (
    <div className="App">
      <h1>React Demo - Text Truncate Component</h1>
      <h3>Truncate a given text along with container height and width.</h3>
      <TextTruncate
        text={testText}
        height={200}
        width={600}
        lineHeight={20}
        containerClassName="Text-Container"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
