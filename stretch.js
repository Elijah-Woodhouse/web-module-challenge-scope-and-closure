/*
1. Write a function that would allow you to do this using a closure.
(This is another interview question we've seen before - when you're ready for
answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-
common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
*/



function addSix(num){
  number = 6;
  number += num;
  console.log(number);
  return number;
}

addSix(10);
addSix(21);




/*2. Research the differences between functional programming and object oriented
programming. Then, describe the pros and cons of functional programming vs
object-oriented programming. This is a common interview question and great
practice!
*/


// ANSWER:
/*
I think object oriented programming is useful for when you're automating tasks
or when there are a lot of variables to keep track of that rely on one another
as inputs for their own scope of functionality.

for example If you needed to run a webscraping program that was looking for
certain key words in thousands of pages of text....
writing that using functional programming would be a nightmare where as if  you
used OOP programing and instantiated objects that would web scrape and Then
those objects might instantiate other objects under certain parameters... It makes
life a lot easer and less verbose.

functional programming would be good in very specific contexts... like a specialization
or a heavy focus on on a particular thing...
such as... You might write a page of code that goes through a complex mathematical formula that takes
in very specific parameters that don't change and won't change over time.
*/
