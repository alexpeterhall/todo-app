# TODO App

Just what the world needs! Another "hello world" style Todo App! You're welcome world. :)

This is built with React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I originally built this in early 2021 using class based components and then immediately refactored it to functional components using a reducer for my state. I refactored in early 2023 to clean it up for fun. I removed the overkill reducer and just used a couple of state variables. I also removed a bunch of unnecessary components to clean up the file structure. Further refactoring completely changed the data structure for storing the todos to something that I think makes more sense.

## Feature Backlog

- [x] Mobile first layout
- [x] Implement checkbox to complete items
- [x] Filter for active/completed items
- [x] Keep track of deleted items
- [x] Hook it up to Firebase - March 2023
  - [x] Read default items from Firebase
  - [x] Save/Write changes to Firebase
- [x] Make checkbox keyboard accessible
- [x] Save state in Firebase for hiding completed items
- [ ] Open items in a modal overlay to further edit
- [ ] Drag and drop re-ordering of items
- [ ] Color code prioritizing
- [ ] Toggle display date on items
- [ ] Backend job that moves completed items to an archive every so often
