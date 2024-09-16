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
## Project 2 Solution tried
```
// Project 2:

/* Through index.html we found out:
1. There is a form element. (There is separate form type event usage, which will not be used here.)
2. Inside form Element, inside <p> tag, there is <label> tag denoting to Height in CM. We don't have anything to do with this.
3. Input element, this is where we will use js with.
4. First input has id : "height", and type is text, so we even need to change the text to num.
5. Second input has id: "weight", and type is same text.
6. There is a button with text as Calculate
7. There is div tag with id: "result" which is empty right now. This is where we will show result after calculation.
 */

/* Steps part 1:
1. First of all we need to select the form element, this is because submit button is inside the form.
2. So, we can't use click event, but we have to use submit type event because this is form.
 */
const form = document.querySelector('form');

// form is submitted either with POST type or GET type.
// And, whenever it is submitted, the values goes to url or server.
// And, we need to stop it. Because, we are not submitting it to server. So, whatever the form's default action, we have to stop it here.

// To Stop the form's default action, there is a method in event's, .preventDefault inside call back function.
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Now, we need values, one we need height, another we need is weight.
  // so, what we need is Whenever, this submit event appears inside form, then select the values
  // We should not select values right in global scope.
  // we already know selecting id, but to select values, we will use .value method
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  // if we write it outside the form submit event,the height and weight will not take that particular instance of submit event inputs, but empty one when the page loaded, script loaded and height and weight becoming empty.
  // we want to extract the value after submit button event appears, or the user clicks button.
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
    let text = '';
    if (bmi < 18.6) {
      text = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      text = 'Normal Range';
    } else {
      text = 'Overweight';
    }
    // To show the result
    results.innerHTML = `<span>${bmi}</span><br>
    <span>${text}</span>`;
  }
});

```