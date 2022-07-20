# Todo App using React

In this workshop, you will create a simple React Todo app. You will be using semantic HTML, modern Javascript and various React techniques to implement it.

## Setup

The project most likely will work in any node version starting from `10`, but it's recommended to use the one defined in `.nvmrc`. You can manage node versions with tools like `nvm` or `fnm`.

Then, navigate to the project folder in your terminal and type in the following command:

```
npm i --no-save
```

This will install the project dependencies.

## Workflow

To start working with the project, navigate to the project folder and execute the following command in your terminal:

```
./start
```

It will open the app in your browser and will automatically refresh the tab whenever the project code change. The page you will see is the `index.html` file in your project. 

You can always see the final but non-interactive HTML output of the app in `http://localhost:3000/initial.html`. This version of the app does not do much, but it can guide you to create expected HTML structure for the CSS to work correctly.

## Tasks

1. A list of Todos
2. Toggling a todo between active/completed
3. A counter for active/completed todos
4. Deleting a todo
5. Adding a new todo
6. Form validation

If you get stuck on any of the steps, you may take a peek at the proposed solution in the branch of the same name as the step, e.g. `git show 6` or `git checkout 6`.


## Homework/Part II

1. Make todos persisent between browser refreshes using `localStorage`
2. Cancel button for new todo form (with keyboard support)
3. Add a dropdown with ability to filter between showing All/only Completed/only Active todos in the list