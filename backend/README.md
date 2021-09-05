# Routes

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