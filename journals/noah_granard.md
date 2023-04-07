## April 6, 2023

Today I worked on:
* Created merge request for users endpoints and started work on frontend for users

We merged all of our endpoints together for users, which went fine. We were stuck for a time on figuring out frontend authenticatio while simultaneously trying to implement Chakra-UI for our frontend. I got the login to work (sends a token) with a basic form, so that was nice.

## April 5, 2023

Today I worked on:
* Finishing endpoints for users

I wrapped up the users endpoints with the update user and delete account functionality. I also added some error handling for the endpoints, but nothing too fancy compared to what we already have been using. The delete account endpoint functions a little strangely, but I think that is more to do with the way tokens are handled in FastAPI. I will look into this more tomorrow, but overall it does not worry me and I'm marking the issue as complete.

I also wrote issues for said endpoints and added them to our Gitlab issue board.


## April 4, 2023

Today I worked on:
* Creating additional endpoints for users

We created our first merge request and merged the newly completed authorization branch into main. We then split up work to handle individually.
I have since learned how delicate and irritating FastAPI can be, so I had to restart from a safe point a few times. I got the delete, get user, and get all users endpoints done.

## April 3, 2023

Today I worked on:
* Implementing authentication and authorization

We struggled as a team to get through implementing authentication and authorization, but with some SEIR guidance we finally got the basics working. We can now create a user, login, and see this information reflected in Beekeeper.

We learned how painful and crucial indentation is with FastAPI.

## March 29, 2023

Today I worked on:
* Started authentication process for the project

As a team we began working on the authentication and authorization process for the project. We are using the jwtdown for FastAPI provided by Galvanize to secure our app.
We struggled for a little while with the documentation/instructions, but eventually got it working after realizing some variable names need to remain unchanged. We also wrote out some more necessarsy files like those in the queries and routers folder.

Tenzing helped catch some inconsistencies from the instructional video to the docs.

## March 28, 2023

Today I worked on:
* Creating issues for the project in Gitlab with the entire team

As a team we decided on a structure for how our issues should look and also decided to split them up into front and back-end. We also decided to use the Gitlab issue board to track our progress in addition to Trello.

I found some references for the .yml file in Learn, which was helpful.

## March 27, 2023

Today I worked on:
* Creating a .yml file for the project

I spent time alone working on the .yml file and trying to get more familiar with SQL. We also explored using Trello as a project management tool, but aren't completely sure if that's the best option for us.

John found a demo for Chakra UI, which seems like the direction we're going in for the front-end styling.

## March 24, 2023

Today I worked on:
* Wireframing and MVP discussion

We spent the day working on wireframing and discussing the MVP. We've been using Excalidraw to create our wireframes. We also decided to push guest features to stretch goals and focus on the logged-in user experience.
