# Revision of Document Object Model and Readings on one.html

- Document represent Document Object Model
- document has different key properties
```javascript
console.log(document.title) // : shows title of document
console.log(document.body) // : represents the <body> element
console.log(document.head) //: represents the <head>
console.log(document.documentElement) //: represents the <html> element
console.log(document.URL)//: represents the url of current document
console.log(document.cookie)//: get or set cookies for the document
console.log(document.domain)//: represents the domain of the document
console.log(document.referrer) //: URL of the referring document(the page that linked to the current page)
```

## Selecting Elements
```javascript
document.getElementById(id) // returns the element with specific ID
document.querySelector(selector) // returns the first element that matches a CSS selector
document.querySelectorAll(selector) // returns all elements that match a CSS selector as a NodeList

document.getElementByClassName(className) // returns a live HTMLCollection of elements with the specified class

document.getElementsByTagName(tagName) // Returns a live HTMlCollection of elements with the specified tag name.
```

## Creating and Modifying Elements

```javascript
const newDiv = document.createElement("div"); // creates a new element

const text = document.createTextNode("Hello!"); // creates a new text node

document.body.appendChild(newDiv); // Appends a child to an element.
```

## Accessing Element

```javascript
document.write("<h1>Hello World</h1>"); // writes content directly to the document which is not recommended

document.getElementById("parrot").innerHTML = "New Content"; // gets or sets the HTML content of an element

document.getElementById("parrot").textContent = "Hello"; // gets or sets the text content of an element
```

## Document Events

```javascript
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is fully loaded!");
}); // Fired when the initial HTML document has been completely loaded and parsed

window.onload = function() {
    console.log("Page is fully loaded!");
}; // Fired when the entire page(including images, scripts, etc.) is fully loaded

window.onresize = function () {
    console.log("Window resized!");
}; // Triggered when the window is resized

document.body.onclick = function () {
    console.log("Body clicked!");
}; // Triggered when an element is clicked
```

## Adding an Element Dynamically

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    document.body.appendChild(newParagraph);
});
```

## Mouse Events
Mouse events are triggered by mouse actions such as clicks movements, and scolling

```javascript
element.addEventListener("eventType", callback);
```
### mouse Event Type
