# Projects related to DOM and Events

## Project Solution Link (Stackblitz)
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-nzenre)

## Solution code (solution tried by me)

### Project 1
```javascript
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
### Project 2 Solution tried
```javascript
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

### Project 3: Updating Clock time every Second through setInterval method.

```javascript
// Project 3: To display local time inside that yellow rounded box.

// Let's first examine the index.html:
/*
1. Styling is done through css flexbox property.
2. There is three styling, one to body, one to className center, and one to id center.
3. There is a parent div with className "center" inside body tag.
4. Inside the parent div, there is two child div with id "banner" and id "clock".
5. The child div with id "banner" stores span element with text node "Your local time".
6. The child div with id "clock" is the yellow rounded box. Inside here, we need to display the local time. */

/*
const myDate = new Date()
console.log(myDate.toLocaleTimeString()); // 9:12:52 AM (so, current time)

This is the js for logging Locale time to console.

But it should be updated every second.
*/

const clock = document.querySelector('#clock');
// const clockThroughId = document.getElementById('clock');

// let date = new Date()
// console.log(date.toLocaleTimeString()); // current: 4:34:26 PM

// To update it manually or automatically in seconds, we need a method that controls the events, that is .setInterval() , running continuously in set interval.
// There is two parameters: one is function, another is the set interval in milisecond. 

setInterval(function (){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
  // console.log(clock.innerHTML)
}, 1000)

```

### Projects 4: Number Guessing Game
```javascript
// Project 4:

/* Project Description:
1. It is a Number Guessing Game.
2. Here, we will have 10 attempts.
3. The Number we have to guess is between 1 and 100.
4. We will write it down in input tag.
5. After one attempt it checks, whether the number we guessed is correct with the random number generated.
6. If yes, then we won.
7. If not, then a attempt got reduced and we have to again submit a guess.
8. It will go on until we lose our all attempt if not guessed properly.
9. Additionally, the previous guesses will be stored and viewed. here, array.
10. and Also, as told earlier, Guessess Remaining will also reduce. */

/* Index.html discussion:
1. There is div with #wrapper.
2. Inside there is h1, and two p tag which we should not have relation with.
3. Now, there is a form element. From here, we will have to use js.
4. With each event, on submit, we need to disable default action, and perform the action of guessing, we could do that.
5. There is another div outside form element,with className "resultParas"
6. There is a p tag with "Previous Guesses" written inside the span element with class="Guesses" where we need to view the previous guesses.
7. There is another p tag with "Guesses Remaining" with class = "lastResult" whose text value 10 needs to be reduced with each click.
8. There is additional p tag with class ="lowOrHi" which is empty, probably trying to result the score into low score, if certain score is low, and high, if certain score is high. */

/*
This is the game of 
viewing one time won, but after 
guessing one right, storing the 
score in an empty variable, and keep 
on adding and storing if guessed right, and 
based on it viewing whether the 
score is high or low. */

// Let's get started:

// for random number from 1 to 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// for selecting needed, and wanted classes and ids as HTMLCollection
const submit = document.querySelector('#subt');
// console.log(submit);
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// Selecting the .resultParas so that the we can display to StartOver Again.
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// Strategy:
// initializing counters for tracking
let prevGuess = [];
// User Attempts initialization starting from 1
let numGuess = 1;

// There is always a variable that allows users to play the game, like suppose our events is finished, or coins is all spent, this condition checked first.
let playGame = true;

// First of all to check whether the user is available to play game.
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessString = userInput.value;
    const guess = parseInt(guessString);
    if (/^\d+[a-zA-z]/.test(guessString)) {
      const userConfirmed = confirm(
        `Your input contains letters. Do you want to use "${guess}" instead of "${guessString}"?`
      );

      if (userConfirmed) {
        validateGuess(guess);
      } else {
        alert('Please reenter a valid number.');
      }
    } else {
      // here, hoisting
      validateGuess(guess);
    }
  });
}

function validateGuess(guess) {
  // checking whether the value is valid or not
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    // putting value to prevGuess array
    prevGuess.push(guess);
    // if it is the 10th attempt,
    if (numGuess >= 10) {
      displayGuess(guess);
      // displaying message
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Checks whether the number entered is equal to random number generated at that time.
  if (guess === randomNumber) {
    displayMessage(
      `You guessed it Right. The random number was ${randomNumber}.`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  // Making User Input empty after each attempt
  // Displaying previous guesses.
  // Updating previous Guesses array after each attempt
  // updating number of guessed
  guessSlot.innerHTML += `${guess} , `;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
  userInput.value = '';
}

function displayMessage(message) {
  // Interacts DOM to display message
  // Displays Winning message after winning. like low or high.
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
### project 5 solution:

#### Press any key and show key, keycode and value in table.

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class="color">
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});

```

### Project 6 Solution:

```javascript
// Project 6: Unlimited colors

// To change the background colors randomly with set Interval, when Start button is clicked and stops when stop is clicked with the background remaining.

// color: should be in HEX code

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; // adding professionalism to code, making intervalid value to null, because in previous code we were overwriting values.
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```