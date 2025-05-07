

# Introduction to TypeScript 

TypeScript is a programming language built on top of JavaScript. It adds something very important to JavaScript: types. TypeScript files end with .ts, and they are converted into normal JavaScript to run in the browser.




## Why use TypeScript?
Here are some reasons why developers love using TypeScript:

- It helps catch errors early (before running your code).
- It gives better autocomplete and suggestions in editors like VS Code.
- It makes big projects easier to manage.
-  It supports modern JavaScript features and more!

Now let’s learn about two powerful features of TypeScript:




## What is the use of enums in TypeScript?
An enum is used to store a group of related values. For example, days of the week, directions, or user roles.


## Numeric Enum Example 



```bash
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Left); // Output: 2
```

TypeScript gives values starting from 0.
So: Up = 0, Down = 1, Left = 2, Right = 3.


## String Enum Example 



```bash
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

console.log(UserRole.Editor); // Output: "EDITOR"

```

## String Enum Example 



```bash
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

console.log(UserRole.Editor); // Output: "EDITOR"

```

##  Why use enums?


- Easy to read and understand

- Avoids mistakes with spelling

- Useful for fixed values (like days or roles)
## 2. What is type inference in TypeScript?

TypeScript can guess the type of a variable when you assign a value. You don’t always have to tell the type.

This feature is called type inference.


## Example

```bash
let userName = "Sojib"; a string
let age = 25;          

age = "twenty"; //  Error: Type 'string' is not assignable to type 'number'

```
## Conclusion

TypeScript is a powerful tool that makes your JavaScript code better. In this blog, you learned:

- What enums are and how they make code cleaner

- How type inference helps you write smart and safe code

- If you're a beginner, don’t worry — just start small and practice regularly. TypeScript will become easier with time.

