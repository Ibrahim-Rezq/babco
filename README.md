## Getting Started

First, add `.env` file and add variables from `.env.example`

Secound, Install Docker for your machine:

**_Lastly run the run.sh file by writing in the console the following:_**

```bash
run.sh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cart API

##### _@Protected_

| Data     |                                                        |
| -------- | ------------------------------------------------------ |
| Function | Get the current user cart                              |
| URL      | /api/cart                                              |
| Method   | GET                                                    |
| Body     | {}                                                     |
| Response | id: string, userId: string, artPieces: { id:string }[] |

##### _@Protected_

| Data     |                                                        |
| -------- | ------------------------------------------------------ |
| Function | Add the items of the array to the current user cart    |
| URL      | /api/cart                                              |
| Method   | POST                                                   |
| Body     | {art:artwork[]}                                        |
| Response | id: string, userId: string, artPieces: { id:string }[] |

##### _@Protected_

| Data     |                                                        |
| -------- | ------------------------------------------------------ |
| Function | Remove the array items from the current user cart      |
| URL      | /api/cart                                              |
| Method   | DELETE                                                 |
| Body     | {art:artwork[]}                                        |
| Response | id: string, userId: string, artPieces: { id:string }[] |

##### _@Protected_

| Data     |                                                        |
| -------- | ------------------------------------------------------ |
| Function | Remove all items from the current user cart            |
| URL      | /api/cart                                              |
| Method   | DELETE                                                 |
| Body     | {}                                                     |
| Response | id: string, userId: string, artPieces: { id:string }[] |

## Artwork API

##### _@NotProtected_

| Data     |                  |
| -------- | ---------------- |
| Function | Get All Artworks |
| URL      | /api/art         |
| Method   | GET              |
| Body     | {}               |
| Response | {artwork[]}      |

##### _@Protected_

| Data     |                               |
| -------- | ----------------------------- |
| Function | Get the current user Artworks |
| URL      | /api/art/me                   |
| Method   | GET                           |
| Body     | {}                            |
| Response | {artwork[]}                   |

##### _@Protected_

| Data     |                           |
| -------- | ------------------------- |
| Function | Get the Artwork with name |
| URL      | /api/art/:artwork-name    |
| Method   | GET                       |
| Body     | {}                        |
| Response | artwork                   |

##### _@Protected_

| Data     |                                                              |
| -------- | ------------------------------------------------------------ |
| Function | create a new Artwirk by the current user                     |
| URL      | /api/art/create                                              |
| Method   | POST                                                         |
| Body     | {name:string, details:string, price:number,image:photo/file} |
| Response | artwork                                                      |

##### _@Protected_

| Data     |                              |
| -------- | ---------------------------- |
| Function | remove the Artwork with name |
| URL      | /api/art/:artwork-name       |
| Method   | DELETE                       |
| Body     | {}                           |
| Response | artwork                      |

##### _@Protected_

| Data     |                                                                 |
| -------- | --------------------------------------------------------------- |
| Function | update the artwork by name with the data provided               |
| URL      | /api/art/:artwork-name                                          |
| Method   | PATCH                                                           |
| Body     | {name:string, details?:string, price?:number,image?:photo/file} |
| Response | artwork                                                         |

### Favorite_Artwork API

##### _@Protected_

| Data     |                                  |
| -------- | -------------------------------- |
| Function | add artwork to to user favorites |
| URL      | /api/art/:artwork-name/favorites |
| Method   | POST                             |
| Body     | {}                               |
| Response | {isSuccess: true/isError: true}  |

##### _@Protected_

| Data     |                                  |
| -------- | -------------------------------- |
| Function | add artwork to to user favorites |
| URL      | /api/art/:artwork-name/favorite  |
| Method   | DELETE                           |
| Body     | {}                               |
| Response | {isSuccess: true/isError: true}  |

## User API

##### _@Protected_

| Data     |                                        |
| -------- | -------------------------------------- |
| Function | update user image and role             |
| URL      | /api/auth/user                         |
| Method   | GET                                    |
| Body     | {role:BUYER/ARTIST, image?:photo/file} |
| Response | {user}                                 |
