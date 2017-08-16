# Health and Wellness Tracker

## Project Links

- [Heroku](https://health-wellness-tracker.herokuapp.com/)

- [Trello Board](https://trello.com/b/xf9cVocq/health-tracking)

## Overview
For project three, I created a Health and Wellness Tracker

When users come to they can see all users listed, and select their user account. Future iterations will have functional login options. Users can then go to their dashboard where currently displayed is the daily recommended water intake, and a button to increase water intake. A dropdown button displays historical data, populated from the database. Finally, Show Food allows a user to see what food they have confused that day, add new food to the database, and add food from the database to their day.

### Food Actions

The user can create a new food item for the global database. Then, a user may add any food item from the global database to his/her own daily intake. 

Once there, a user can edit an item, (for example, if you ate banana pudding instead of a banana) and/or delete that item.

Bug: Deleting a food item that is listed multiple times deletes all elements with the same ID.

## Technologies Used

* Languages - HTML5, CSS3, Javascript, jQuery
* Frameworks - Mongo, Express, React, Node
* Design - Sketch, Google Fonts
* Project Planning & User Stories - Trello
* Visual Studio Code
* Heroku

## Features

* User can easily increment daily water intake. 
* Global database stores and displays all available food items. 
* User can add, edit, delete food items from their daily intake. 

## Wireframe



### Skecth wireframes

![Wireframe 1](https://github.com/jwats287/health-wellness-tracker/blob/master/images/Desktop%20HD.png?raw=true)

![Wireframe 2](https://github.com/jwats287/health-wellness-tracker/blob/master/images/Dashboard.png?raw=true)

![Wireframe 3](https://github.com/jwats287/health-wellness-tracker/blob/master/images/Log%20Meal%20Selector.png?raw=true)

![Wireframe 4](https://github.com/jwats287/health-wellness-tracker/blob/master/images/Log%20Meal%20Edit%20Copy.png?raw=true)


## Future Development

* Create full Login Feature
* Create full New Account feature
* Add in user account authorization
* Automatically creates new days upon login. 
* Calculates total calories for a day. 
* Add meals to days and restrict food items to a specific meal. 
* Searchable food database. 
* Incorporate external API for food database
