## April 27, 2023

Today I worked on:
Edit recipe form frontend
- Noah showed me a link to the docs for a cool component in chakra called Editable which could be how I make my recipe edit form. I decided to look at the docs and do some research to see if it would be possible. I decided that I'm going to try to implement the edit recipe form with Editable and accomplish this by storing all the inputs/changes in a state so that I can use those states to make a put call in the backend in order for the update to work. It took some time but I was able to get the form to work and what it shows it almost estianlly the recipe detail page, but when a user clicks on the title of the recipe they can change that title and whatever changes they make will be stored in a state. then at the end of the page there is a save button which will make the PUT call and there is also a cancel button which will redirect them to that specific recipe detail page.

## April 26, 2023

Today I worked on:
Recipes endpoint and edit recipe form frontend
- Before I started working on the form, I wanted to change my update recipe endpoint so that it also updates the ingredients that are related to the recipe. I was able to figure out how to change my update query to be able to do that. Similar to my create recipe query, I made 3 SQL statements in the update recipe query. The first SQL statement would update the recipe inputs. Then the second SQL statement would make a select all ingredients for the recipe and use the recipe id to get those specific ingredients. I then made a third SQL statement to update all the ingredients by iterating through the ingredients that I got from my second SQL statement. I tested the code and it worked, so I decided to make my merge request and get started on the frontend form

## April 25, 2023

Today I worked on:
Migrations and backend
- My team and I noticed that the rating we had on our recipe should be its own table since we want users to rate the recipe, so we decided to remove ratings from our recipe table and make it a stretch goal for us to work on another time. I realized that I haven’t done much frontend other than the Auth which is a group assignment so I decided to do the edit recipe form on the front end. I first made a merge request after I deleted the rating from the recipes table in the merge request.

## April 24, 2023

Today I worked on:
Migrations and database tables
- My team and I decided that the difficulties for our difficulty table will be already created in the database, so I worked on the migration file to insert difficulty data when the docker containers get built. I also noticed that the get all difficulties was also ordering them by the name, so I changed that to order them by id which will look nicer on the frontend, so when you’re in the create recipe form for the user they see the difficulty choices from easiest to hardest instead of them being in alphabetical order. I also created a comments table in the migration files. I  made a merge request after I got all that done.

## April 20, 2023

Today I worked on:
Fixing up some endpoints
- I was able to get an idea of how I can create ingredients for a recipe in the same create query, and it was thanks to a SEIR for giving me the idea. It was one of those moments where it was really hard to come up with a solution, but when the solution is given to you it seems so obvious. What I ended up doing is making two different SQL statements. The first SQL statement creates the recipe and returns the recipe id, then I was able to store that recipe id into a variable so that in the second SQL statement when I create the ingredients, I have the recipe id that the ingredients need as the foreign key. After I finished coding, I tested the create and it worked how I wanted it to. I then had to fix up my unit test since the create recipe endpoint works differently than before. I also got the user data, and the difficulty data to return when you make a get one recipe call, get all recipes call, and get all recipes created by a specific user call. I made a merge request after I got everything pushed and merged in my branch. Noah did an amazing job on the recipe form and it worked perfectly with the new create recipe endpoint.

## April 19, 2023

Today I worked on:
Fixing up some endpoints
- I was still trying to figure out how to create ingredients with the recipe at the same time in one create query, and also wanted to fix up some of my recipes endpoint to return more data. I also made a new ingredient endpoint that lets the user get all the ingredients for a specific recipe by their recipe id. I was able to get that endpoint to work which returns a list of ingredients that belong to a specific recipe.


## April 18, 2023

Today I worked on:
Merge request and endpoint fixup
- I was sick on Monday, and my team did CI/CD on Monday and was able to essentially complete it all on that day, so I was not able to help them out on that. I also made a merge request for my recipes endpoints.

## April 7- April 16, 2023

Today I worked on:
Unit test, chakra UI, and recipes endpoint
- Over the break I decided to get more familiar with a React component called Chakra UI which is what our team decided to use for styling in the frontend. I also decided to make my unit tests and get a new recipe endpoint that gets all the recipes created by a specific user.

## April 6, 2023

Today I worked on:
Frontend Auth
- My team and I worked on the frontend authentication. We noticed that the docs and the example given from learn was very different from how the instructor showed us how to do the frontend auth. We decided to look more at the instructors since if we do run into a problem the instructors can help us. We looked over the documentation for the galvanize jwtdown library and were able to get our sign up, login, and logout to work by the end of the day


## April 5, 2023

Today I worked on:
Recipes endpoints
- I worked on getting the main CRUD for the recipes endpoints. I got,  get all, get one, delete, and update recipe endpoints. I wanted to figure out if it was possible to create ingredients within the create recipe queries which I thought would be better for user interaction since then we can have the recipe inputs and the ingredient inputs all in one form.

## April 4, 2023

Today I worked on:
Recipes endpoints
- My team and I made our first merge request after getting auth done and this was a nice experience so that when I make my merge requests in the future I know what to do. Afterwards my team decided to split and start working on the endpoints that we assigned to ourselves. I decided to work on the recipes endpoint

## April 3, 2023

Today I worked on:
Authentication
- My team and I kept working on the authentication and with the SEIRS hints, we were able to figure out that the main reason our authentication was not working was because our SQL statements were all outside of the connection to the database, so those SQL statements were never being run and not doing anything to the database.

## March 31st- April 2nd, 2023

Today I worked on:
Difficulty table endpoint
- I decided to test what the SEIRS told me to and created the difficulty endpoint to see if the code is able to interact with the database, and it was a success.


## March 30th, 2023

Today I worked on:
Authentication
- My team and I were still struggling with authentication and kept getting an error with the get hashed_password that we couldn’t figure out how to solve, so we made a help-me-understand post and the SEIRS came to help. The SEIRS were also puzzled as to why we were getting the errors and told us when we have time, try to see if we can make a create call for a different table into the database.


## March 29th, 2023

Today I worked on:
Authentication
- My team and I started working on backend authentication. We decided to watch the authentication video that was on Learn as an exploration and get a better grasp before starting on the authentication. We got stuck and then realized that some variable names needed to remain unchanged from the docs since they are used for the authentication.


## March 28th, 2023

Today I worked on:
Planning and making issues in Gitlab for the project
- My team and I decided on how to make the issues and split the work between the team. I used references from our wireframe to map out what some of the backend issues will be.


## March 27, 2023

Today I worked on:
Team project management discussion
- My team and I explored Trello as a possible way to manage the project, but we aren’t 100% sure if we are going to use Trello just yet

## March 24, 2023

Today I worked on:
MVP discussion and wireframing
- My team and I spent the day working on our wireframe and figuring out what our MVP is going to be. We originally tried to use Figma to create our wireframes, but ran into an issue where only the host could make edits, so we decided to use Excalidraw instead.
