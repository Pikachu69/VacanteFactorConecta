/*
Exercise 1 Code a `count()` function in Javascript. This function should return an integer 
in the following fashion: 

```js const count = undefined // replace this with your code; 
console.log(count()); // outputs 0 
console.log(count()); // outputs 1 
console.log(count()); // outputs 2 ``` 

In other words, the function should 'remember' how many times it has been invoked. 
Global variables are forbidden. Provide a brief explanation of how your solution works. 
*/

const counter = () => {
    let c = 0;

    return function() {
        return c++;
    }
}

const count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

/*
    Para este ejercicio es necesario utilizar las funciones closure, el cual nos permite tener un estado 
    privado dentro de nuestra función pero este sea un estado reusable.

    Cada vez que llamamos count() accedemos al closure, se retorna su valor actual y luego suma 1 a la 
    variable c.
*/