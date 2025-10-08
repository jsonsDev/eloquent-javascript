# Chapter 03 Exercises

These are my solutions to the chapter exercises as instructed:

## Exercise 01 - Minimum

> The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.

## Exercise 02 - Recursion

> We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

> • Zero is even. <br />
> • One is odd. <br />
> • For any other number N, its evenness is the same as N - 2.

> Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

> Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

## Exercise 03 - Bean Counting

> Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

> Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.