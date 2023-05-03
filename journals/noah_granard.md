## April 28, 2023

Today I worked on:

- Deployment

We hit some serious roadblocks with deployment. We were able to get the frontend deployed, but the backend was not working. We spent a lot of time trying to figure out what was wrong, but ultimately after a lot of help from others it worked. We werent expecting to present today, but we did and it went well. We were able to show off our app and talk about our process. I'm proud of what we've accomplished.

## April 27, 2023

Today I worked on:

- Final styling, code clean-up, merging

I made my final merge request for the graded portion of the project. I have cleaned up some styling on the main page and made sure any newer pages are responsive. I helped where I could to catch miscellaneous bugs and errors. We were able to get through those and are basically ready for deployment.

## April 26, 2023

Today I worked on:

- Login form minor upgrade, deployment tests/fixes with linting

I took time to make sure the login form tells the user if they're missing a required field. We spent more time trying to clean up our code using Black and Prettier so that we can be ready to deploy easily.

## Apri 25, 2023

Today I worked on:

- Styling, attempted upgrades to the search form and login form. Built extra pages

I spent a lot of time trying to improve the search and login forms, but ultimately had to revert back to their default, functioning state. Searching by multiple ingredients would require a rewrite of the query and router, which I don't have time for. I also tried to add error handling to the login form, but it was not successful. I did add some styling to the main page, which was nice.

For fun, I also made a "Premium" page which shows a mock subscription model with different tiers. I helped John with the recipe details page, too.

## April 24, 2023

Today I worked on:

- Updated the search form and create recipe form. Difficulty fixed

I've updated the recipe search form to now handle searching by recipe name in addition to ingredient name! The recipe search was a project I was working on alone, so I'm glad to have it done. I spent many hours over the weekend fixing it after our schema was updated. I also updated the create recipe form to handle multiple ingredients being added at once. I have also added error catches for the required parts of the form. The backend difficulty schema was also updated.

## April 20, 2023

Today I worked on:

- Finished create recipe form, added styling

I finished the create recipe form. I also added some styling to the main page and the create recipe form. The site is overall dynamic and responsive, which is nice. Tenzing is working on what remains in the backend, which is necessary before more frontend work can be done.

## April 19, 2023

Today I worked on:

- Create recipe form(s), updated navbar, added styling

I created a form for creating a recipe, which is currently functional.It's actually multiple forms in one. I also updated the navbar to include a link to the create recipe form and the navbar now changes based on if the user is logged in or not. I also added some styling to the main page.

## April 18, 2023

Today I worked on:

- Working on frontend, created a new form for searching for recipes, and fixed our CI/CD (mostly)

I created a new form for searching for recipes, which is currently not functional. I also worked on the frontend for the users, but it is not complete. I also fixed our CI/CD, which was a pain. I had to change many things in the .yml file, but it is now working, just not consistently because of our unit tests.

## April 17, 2023

Today I worked on:

- Merging parts of the frontend, writing my unit test, starting CI/CD

We merged the what was left of the backend endpoints for recipes, adding a main and nav.js, and began our unit tests. I wrote one for the users, which proved to be harder than I thought. We began CI/CD, but have a lot of pipeline failures that we need to fix.

## April 6, 2023

Today I worked on:

- Created merge request for users endpoints and started work on frontend for users

We merged all of our endpoints together for users, which went fine. We were stuck for a time on figuring out frontend authenticatio while simultaneously trying to implement Chakra-UI for our frontend. I got the login to work (sends a token) with a basic form, so that was nice.

## April 5, 2023

Today I worked on:

- Finishing endpoints for users

I wrapped up the users endpoints with the update user and delete account functionality. I also added some error handling for the endpoints, but nothing too fancy compared to what we already have been using. The delete account endpoint functions a little strangely, but I think that is more to do with the way tokens are handled in FastAPI. I will look into this more tomorrow, but overall it does not worry me and I'm marking the issue as complete.

I also wrote issues for said endpoints and added them to our Gitlab issue board.

## April 4, 2023

Today I worked on:

- Creating additional endpoints for users

We created our first merge request and merged the newly completed authorization branch into main. We then split up work to handle individually.
I have since learned how delicate and irritating FastAPI can be, so I had to restart from a safe point a few times. I got the delete, get user, and get all users endpoints done.

## April 3, 2023

Today I worked on:

- Implementing authentication and authorization

We struggled as a team to get through implementing authentication and authorization, but with some SEIR guidance we finally got the basics working. We can now create a user, login, and see this information reflected in Beekeeper.

We learned how painful and crucial indentation is with FastAPI.

## March 29, 2023

Today I worked on:

- Started authentication process for the project

As a team we began working on the authentication and authorization process for the project. We are using the jwtdown for FastAPI provided by Galvanize to secure our app.
We struggled for a little while with the documentation/instructions, but eventually got it working after realizing some variable names need to remain unchanged. We also wrote out some more necessarsy files like those in the queries and routers folder.

Tenzing helped catch some inconsistencies from the instructional video to the docs.

## March 28, 2023

Today I worked on:

- Creating issues for the project in Gitlab with the entire team

As a team we decided on a structure for how our issues should look and also decided to split them up into front and back-end. We also decided to use the Gitlab issue board to track our progress in addition to Trello.

I found some references for the .yml file in Learn, which was helpful.

## March 27, 2023

Today I worked on:

- Creating a .yml file for the project

I spent time alone working on the .yml file and trying to get more familiar with SQL. We also explored using Trello as a project management tool, but aren't completely sure if that's the best option for us.

John found a demo for Chakra UI, which seems like the direction we're going in for the front-end styling.

## March 24, 2023

Today I worked on:

- Wireframing and MVP discussion

We spent the day working on wireframing and discussing the MVP. We've been using Excalidraw to create our wireframes. We also decided to push guest features to stretch goals and focus on the logged-in user experience.
