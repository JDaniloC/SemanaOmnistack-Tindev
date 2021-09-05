# SemanaOmnistack-Tindev
An clone of tinder using Express as backend, React as web and React native for mobile

## How to run the backend

Go to backend folder: 
` cd backend `

And install the dependencies running:
` yarn `

So, create a MongoDB collection called `tindev`.
And fill your `.env` file with the port and database uri, like:

```py
PORT = 3333
DATABASE = mongodb+srv://
```

## Backend routes

### GET /devs/
    Get all devs which the given user don't interacted yet.

    :headers 
        user - The _id of the user
    :params
    :body

### POST /devs/
    Creates an user based on their github profile

    :headers 
    :params
    :body
        username - The github profile name

### POST /devs/:id/likes/
    Give an user like to another

    :headers 
        user - The _id of the user that will like
    :params
        devId - The _id of the user that will be liked
    :body

### POST /devs/:id/dislikes/
    Give an user dislike to another

    :headers 
        user - The _id of the user that will dislike
    :params
        devId - The _id of the user that will be disliked
    :body