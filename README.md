
# Web Chat Backend

Task for Branch International Internship!





## API Reference

#### Hosted Backend Base URL

```http
  https://web-chat-backend.glitch.me/
```

#### Find the questions for a particular agent 

```http
  POST /question/getQuestions/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `agentId`      | `string` | **Required**. Id of agent |


#### Answer a particular question 

```http
  POST /question/answerQuestion/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `questionId`      | `string` | **Required**. Id of Question |


#### Get all answered questions for a particular agent

```http
  POST /question/allAnsweredQuestions/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `agentId`      | `string` | **Required**. Id of Agent |

#### Store answer answered by an agent 

```http
  POST /answer/answerQuestion/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `answerId`      | `string` | **Required**. Id of Answer |
| `questionId`      | `string` | **Required**. Id of Question |
| `answerText`      | `string` | **Required**. Answer Text |

#### Get answer of particular Question   

```http
  POST /answer/getAnswer/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `questionId`      | `string` | **Required**. Id of Question |

#### Get Unique agent ID with email

```http
  POST /getId/getAgentId/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of Agent |




## Live Working Link

https://web-chat-task.netlify.app/



## Video Demo Link

https://youtu.be/v02rNXcJzAg
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client:** React, Material UI

**Server:** Node, Express

**Database:** MongoDB


## Features

- Agents can login into the website.
- Agent can answer a particular query.
- Agent can see the previous answers answered by them.
- No two agents work on the same query.
- Agent can see user profile to get the context about the user.
- Loader when we send request.

