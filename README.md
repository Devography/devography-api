<p align='center'><a href="https://github.com/Devography/devography-api/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Devography/devography-api?style=for-the-badge"></a>
<a href="https://github.com/Devography/devography-api/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Devography/devography-api?style=for-the-badge"></a>
<a href="https://github.com/Devography/devography-api/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Devography/devography-api?style=for-the-badge"></a>
<a href="https://github.com/Devography/devography-api"><img alt="GitHub license" src="https://img.shields.io/github/license/Devography/devography-api?style=for-the-badge"></a>
</p>

<h1 align='center'>devOgraphy Api</h1>

![devOgraphy_mobile](https://user-images.githubusercontent.com/65795477/125980378-26c0e672-d7a1-4ea6-8fff-702595eec637.jpeg)

## Project Description

devOgraphy API is a Node, Express, and Mongoose API that stores programming language data. Create, Read, Update, and Destroy functionality are built throughout the app.

Project Link: [devOgraphy](https://devography.netlify.app/)

Project API: [devOgraphy-Api](devography.herokuapp.com/)

### Programs/Applications Used:

#### Backend (Framework)
- Express
- NodeJS

#### Database
- MongoDB

#### Deployment
- Heroku

#### Dependencies

"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"mongoose": "^5.13.2"

#### Libraries
- Mongoose

#### Package Manager
- Yarn

## Installation

devOgraphy api requires `nodemon` and `yarn` to run.

1. Download the repo using git.
    ```
    git clone git@github.com:Devography/devography-api.git
    ```
2. Install yarn dependencies
    ```
    yarn add cors dotenv express mongoose
    ```
3. Start the Server
    ```
    yarn run dev
    ```

## Learning Experience

This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about division of labor, project planning, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Component Tree

component-tree.png<img width="514" alt="component-tree" src="https://user-images.githubusercontent.com/65795477/125981555-ecc23dba-8ce6-4487-9529-a0735615e308.png">

## Dynamic API Calls

By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

### APIs <a name="apis"></a>

`GET: /languages`

- **Description:** responds with a list of all programming languages

`GET: /languages/:id`

- **Description:** responds with a specified languages
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the language id. (required value)</td>
    </tr>
   </tbody>
  </table>

`GET: /comments/`

- **Description:** response with a list of all comments


`POST: /languages`

- **Description:** creates a new language in the database excluding the comments
- **Body Parameters:**
   <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
   </thead>
   <tbody>
    <tr>
     <td>Name</td>
     <td>string</td>
     <td>a string of the programming language name</td>
    </tr>
    <tr>
     <td>Author</td>
     <td>string</td>
     <td>a string of the programming language name</td>
    </tr>
    <tr>
     <td>Year</td>
     <td>number</td>
     <td>a number of the year the programming language was founded</td>
    </tr>
    <tr>
     <td>Logo</td>
     <td>string</td>
     <td>a string of a url of the programming language logo</td>
    </tr>
   </tbody>
  </table>

`POST: /comments/:id`

- **Description:** creates a new comment in the database
- **Body Parameters:**
  <table>
    <thead>
     <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </thead>
    <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the language id. (required value)</td>
    </tr>
     <tr>
      <td>Name</td>
      <td>string</td>
      <td>a string of the comment creator</td>
     </tr>
     <tr>
      <td>Body</td>
      <td>string</td>
      <td>a string of a comment</td>
     </tr>
    </tbody>
  </table>

`PUT: /language/:id`

- **Description:** updates a specific language based on the provided language id.
- **Body Parameters:**
   <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the language id. (required value)</td>
    </tr>
    <tr>
     <td>Name</td>
     <td>string</td>
     <td>a string of the programming language name</td>
    </tr>
    <tr>
     <td>Author</td>
     <td>string</td>
     <td>a string of the programming language name</td>
    </tr>
    <tr>
     <td>Year</td>
     <td>number</td>
     <td>a number of the year the programming language was founded</td>
    </tr>
    <tr>
     <td>Logo</td>
     <td>string</td>
     <td>a string of a url of the programming language logo</td>
    </tr>
   </tbody>
  </table>

`PUT: /comments/:id`

- **Description:** updates a specific comment based on the provided comment id.
- **Body Parameters:**
  <table>
    <thead>
     <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </thead>
    <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the comment id. (required value)</td>
    </tr>
     <tr>
      <td>Name</td>
      <td>string</td>
      <td>a string of the comment creator</td>
     </tr>
     <tr>
      <td>Body</td>
      <td>string</td>
      <td>a string of a comment</td>
     </tr>
    </tbody>
  </table>

`DELETE: /languages/:id`

- **Description:** responds with a specified languages
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the language id. (required value)</td>
    </tr>
   </tbody>
  </table>

`DELETE: /comments/:id`

- **Description:** responds with a specified languages
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>string</td>
     <td>a string value representing the language id. (required value)</td>
    </tr>
   </tbody>
  </table>

## Future Directions
- [] Create a search feature that allows me to search either programing languages or paradigm.
- [] Create a filter
- [] Edit Schema to include different usage.
- [] Create a user model

## Accomplishments

This application uses a Node, Express, and Mongoose API. There is Create, Read, Update, and Destroy functionality built throughout the app.

## Support

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

Steps: 
1. Fork the Project
2. Create your Feature Branch
    - Ex. `git checkout -b <your_branch_name>`
3. Add your Changes
    - Ex. `git add .`
4. Commit your Changes
    - Ex. `git commit -m "Description of your Changes"`
5. Push to the Branch
    - Ex. `git push origin <your_branch_name>`
6. Open a Pull Request

## License
- License - Not Specified

## Contact
<br />
<img  align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/83842451?v=4" width="44" height="44" alt="@trieule50">

**Trieu Le** - Full Stack Web Developer<br>
[GitHub](https://github.com/trieule50) • [LinkedIn](https://www.linkedin.com/in/trieule1/)

<img  align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/65795477?v=4" width="44" height="44" alt="@CrowdedAstronaut">

**Ross Phillips** - Full Stack Web Developer<br>
[GitHub](https://github.com/CrowdedAstronaut) • [LinkedIn](https://www.linkedin.com/in/johnrossphillips/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/83424322?v=4" width="44" height="44" alt="@abrarmohammed109">

**Mohammed Abrar** - Full Stack Web Developer<br>
[GitHub](https://github.com/abrarmohammed109) • [LinkedIn](https://www.linkedin.com/in/abrarmohammed/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/77644242?v=4" width="44" height="44" alt="@turekjesse">

**Jesse Turek** - Full Stack Web Developer<br>
[GitHub](https://github.com/turekjesse) • [LinkedIn](https://www.linkedin.com/in/turekjesse/)

<img align="left" class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/84121059?v=4" width="44" height="44" alt="@income3000">

**Lou Thomas** - Full Stack Web Developer<br>
[GitHub](https://github.com/income3000) • [LinkedIn](https://www.linkedin.com/in/lou-thomas/)

<br />





<!-- ## devOgraphy-api

devOgraphy_mobile.jpeg![devOgraphy_mobile](https://user-images.githubusercontent.com/65795477/125980378-26c0e672-d7a1-4ea6-8fff-702595eec637.jpeg)

## Project Description

devOgraphy API is a Node, Express, and Mongoose API that stores programming language data. Create, Read, Update, and Destroy functionality are built throughout the app.

Link To Site: devography.herokuapp.com/

## Programs/Applications Used:

Express
Mongoose
NodeJS
Yarn

## Learning Experience

This was our first project as a team and so we relied heavily upon each other to debug our own problems. We learned a lot about division of labor, project planning, project management, and how to utilize each of our individual strengths. Read documentation!!! Most of the answers are available if you know where and how to search.

## Component Tree

component-tree.png<img width="514" alt="component-tree" src="https://user-images.githubusercontent.com/65795477/125981555-ecc23dba-8ce6-4487-9529-a0735615e308.png">

## Dynamic API Calls

By creating our own API, the App is able to make dynamic request. For this app, the programming languages endpoint was used. So different props variables were created to make multiple calls.

## Future Directions

- As a user of Devography, I want a search feature that allows me to search either programing languages or paradigm and get a result of different usage. (edited)
  .

## Accomplishments

This application uses a Node, Express, and Mongoose API. There is Create, Read, Update, and Destroy functionality built throughout the app.

## Installation

```
yarn add cors dotenv express mongoose
```

## Dependencies

"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"mongoose": "^5.13.2"

## Support

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. -->
