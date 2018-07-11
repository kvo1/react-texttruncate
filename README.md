# react-texttruncate 

A React component takes a text content and truncates it to specific lengths. This component will render a DIV container with the given text and truncate it based on the given container's Height and Width.


## Properties

| Name            | Type              | Required                    | Default         | Description|
|:-----|:-----|:-----|:-----|:-----|
| `containerClassName`     | `String`             | No                | `''`            | Sets a class name to give custom styles.|
| `height`      | `Number`             | Yes               | 0         | Text container/wrapper height.|
| `lineHeight`         | `Number`             | No      |      16     | The height of each text line.|
| `text`      | `String`             | Yes               | `''`          | Given text to show inside the container.|
| `width`          | `Number`             | Yes      | 0            | Text container/wrapper width.|


<!-- example -->
```jsx
import React from "react";
import ReactDOM from "react-dom";
import TextTruncate from "./react-texttruncate";

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sodales lorem. Sed rutrum sagittis odio eu pretium. Sed ultricies metus ac aliquet mollis. Ut bibendum tellus ut enim scelerisque, sed laoreet urna euismod. Phasellus tempor dui vel sapien vehicula, in fringilla nulla pretium. Fusce sagittis urna id suscipit volutpat. Fusce laoreet ultricies pretium. Vivamus lobortis rutrum quam ac rhoncus. In in consequat odio, at dictum dolor. Maecenas non sollicitudin lorem, eu faucibus neque. Nullam fringilla velit vel posuere aliquam. Vivamus sem nisi, luctus sed lacus et, cursus porttitor ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sodales lorem. Sed rutrum sagittis odio eu pretium. Sed ultricies metus ac aliquet mollis. Ut bibendum tellus ut enim scelerisque, sed laoreet urna euismod. Phasellus tempor dui vel sapien vehicula, in fringilla nulla pretium. Fusce sagittis urna id suscipit volutpat. Fusce laoreet ultricies pretium. Vivamus lobortis rutrum quam ac rhoncus. In in consequat odio, at dictum dolor. Maecenas non sollicitudin lorem, eu faucibus neque. Nullam fringilla velit vel posuere aliquam.";

function App() {
  return (
    <div className="App">
      <TextTruncate
        text={testText}
        height={200}
        width={600}
        lineHeight={20}
        containerClassName="text-wrapper"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
