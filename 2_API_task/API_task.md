## API testing task
Exported Postman collection file is attached in the `2_API_task` folder.

### What test cases should be executed while testing?
- Positive scenario where 200 is shown when correct authorization is used;
- Negative scenario when a number or special symbol is added to user's new name or surname (test if it's also not allowed like in UI mode);
- Negative scenario when a user password is not provided with the request and 400 error should be shown;
- Negative scenario when incorrect bearer token is provided and 401 error is shown.

### What kind of risks you would identify for this endpoint (in other words: what could have gone wrong if we left bugs)?
Names and surnames could be updated with invalid symbols (like numbers, special characters, etc.). Also, users without correct authorization could change other users' names and surnames. In that case, it might also be possible to change other user data like passwords or get payment and bank details without proper authorization.

### Without which headers this endpoint will not work properly?
- Authorization;
- Content-Type;
- Content-Lengh;
- Host.
