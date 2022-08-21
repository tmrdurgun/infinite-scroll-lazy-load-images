# imagemanagement

Example react app with modular architecture &amp; design patterns

MVVM like pattern used. Seperation of concerns approach applied.

It may only has a small feature (infinite scroll & retrieve data) but to be a well designed real-world example I've created this architecture.

state management:

service -> action -> context -> component

3rd party libraries:

- node-sass (My personal choise for styling. I'm using sass for all of my projects)
- react-lazyload (To have lazy loading functionality for rendering images)
- react-router-dom (I've added this for only to stay close to a real world example)
- eslint (Just helpes to keep your code clean)

To start application run as follows:

1. yarn install / npm install
2. yarn run start / npm start

To build:

yarn run build / npm run build

To Test:

yarn run test / npm run test

Test are only added for more important sections but can be added for all components included element level.

Dockerfile also help to run this app inside a docker container
