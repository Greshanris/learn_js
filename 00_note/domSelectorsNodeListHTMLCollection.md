# DOM Selectors

- first created one.html
- Then, gave id to the heading as title
- gave bg-color class to the heading
- styled background to dark and color to white.
- Then opened the one.html with live server

## document.getElementById()
- Since, we are learning about the id, we used the getElementById() function, then passed 'title'
like this,
document.getElementById('title')
output: <h1 id="title" class="heading">DOM Learning on Chai aur Code</h1>

### Using methods inside the getElementById()

- Here, we used the document.getElementById('title').id
output: 'title'

- we used the document.getElementById('title').class
output: undefined

- then, we used the document.getElementById('title').className
ouput: 'heading'
so, here we use className because inside the html document or the css we use class but behind all of it we refer to it as className.

- then, we used the document.getElementById('title').getAttribute()
This was done to get all the attribute the element by id 'title'
output: caused error

document.getElementById('title').getAttribute
output: a function

- so, we used now document.getElementById('title').getAttribute
('id')
output: 'title'

- we also used the document.getElementById('title').getAttribute('class')
output: 'heading'

- Now, we used
document.getElementById('title').setAttribute('class', 'test')
output: undefined
but if we see the h1 class, the class has been changed from the heading to test.
so, it always will overwrite the content.

- Now again, if we also need the heading class
document.getElementById('title').setAttribute('class', 'test heading')
output: class = 'test heading'

## Now, to store in the variable,
const title = document.getElementById('title')
title
<h1 id="title" class="heading">DOM Learning on Chai aur Code</h1>

### Now, comes styling through the variable we defined earlier

- title.style.backgroundColor = "green"
- title.style.padding = "15px"
- title.style.borderRadius = "15px"

Now, we can see that we styled inside the title,
now, comes the methods available

### title variable which stores the instance of the object that we get through the getElementById('title')

here, we will see the properties, not methods that we can execute to manipulate the content of the html tags

- title.textContent
- title.innerHTML
- title.innerText

First of all, all of this will give same result, if we don't add anything to the <h1> tag
so, we will use the <span></span> and will write something inside, and set the style display to none. and see what is the difference?

so,
title.innerContent
output: 'DOM Learning on Chai aur Code'
no span element content appearing

title.textContent
output: 'DOM Learning on Chai aur Code test text'
span element content appearing but no span html element

title.innerHTML
output: 'DOM Learning on Chai aur Code <span style="display: none;">test text</span>'
span , styling and the content all appearing.

now, we know what innerContent means, innerHTML means, and textContent means

## querySelector

document.querySelector('h2')
- gives first h2 element

document.querySelector('#title')
- gives the one with id title

document.querySelector('.heading')
- gives the first with class heading

document.querySelector('input')
- gives input element which came first

document.querySelector('input[type="password"])
- gives the input element whose type is password that also first.

### for list
suppose, we have a unordered list, we can store it in variable and then from here , we can use the querySelector('li') to know the list item which is first one.
- but if we want to change any styling or content inside the list first item.
- we first store it using const turnGreen = myul.querySelector('li')
- then, use turnGreen.style.backgroundColor = "green"
- turnGreen.style.padding = "10px"
- turnGreen.innerText = "five"

now, we can manipulate the style and content inside the DOM

## querySelectorAll()

now, comes to select all the element that we want to know:
so, if we want to know the list, we can use
document.querySelectorAll('li')
output: NodeList(3) [li, li, li]

inside, prototype, we can see there is forEach, it resembles array, so can we use the loop and manipulate it to our will?

The thing is that nodelist and array in javascript are not the same.
The nodelist and HTMLCollection is not our pure Array.

so, we always have to see the protype and see what is available.
We can see that, inside the node list, there is forEach but no map, 

## to use Array:

we can use the Array.from(variable where we stored either nodelist(querySelector) or HTML Collection(.getElementById()))
and, from here we can use the map and anything related to loops or other things.
here, also we have to store it and then use the loop or other function and objects.

But, if forEach loop is in nodeList, we can change the content, or style using callback function 
myH2.forEach(function (h) {
    h.style.color = 'black'
    h.style.backgroundColor = 'green'
    h.style.padding = '10px'
    h.innerText = 'Rishav'
})

now, if we want to change a particular text, first select, right click, inspect, and see the class or id related to it.
use .querySelectorAll('.className')
see what it is, whether nodelist or HTMl collection and also see how many elements have same class.
then use .forEach if nodelist and if HTMLCollection then change to the Array.from(), store it and change as needed.