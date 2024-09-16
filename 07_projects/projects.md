# Projects related to DOM

## Project Solution Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-nzenre?file=index.html)

## Solution code (solution tried by me)

### Project 1
```
// How to achieve the goal of clicking a button will change the background color?

// Answer:

// The first step will be the selecting all buttons through className or id (individually)
// Better is to select all through className where we can use loop to fill the color to body.

const buttons = document.querySelectorAll('.button'); // Gives Nodelist
// console.log(buttons);

// Second, we need to select the body: document.querySelector('body'), or document.body
const body = document.querySelector('body');

// Now, comes here events
/* events include (inside the browser):
1. Cursor moving inside the browser
2. Closing tab is also an event
3. Clicking is also the event

Our only goal here is that whenver we click the button, we can take it in function, and we can do some activities there.
*/
buttons.forEach(function (button) {
  console.log(button);
  // logging in console gave HTMLSpanElements, (and all its attribute: Objects(like class: "button",  id="grey"), tagname: 'span', nodeType: 1, innerHTML: ""), in each iteration

  // now, in each button will attach event listener.
  // We know that there is events in browser, but we do need something to listen or store it. .addEventListener method, we can add it wherever.
  // But all the event does not need to be listened. Also, (2 arguments are required)
  // what we need is click event, we can also see mouse overview.
  button.addEventListener('click', function (e) {
    console.log(e); // PointerEvent or MouseEvent with isTrusted: True and some prototype
    console.log(
      e.target
    ); /* from which target did the event occured, first one HTMLSpanElement will be:

    attributes: Object (here id will correspond to which span element we clicked. like grey or yellow)
    innerHTML: ""
    nodeType: 1
    tagName: "span"
    <prototype>: HTMLSpanElement*/

    // From here we can know that we can take out id from here from HTMLSpanElement
    // I am using switch statement here
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id; // because the value in e.target.id is grey, we did not went to hardcore value like = 'grey'.
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'purple':
        body.style.backgroundColor = e.target.id; // the same as id
        break;
    }
  });
});

```