# REST API with Node.js and Express

This project is a simple, clean, and refactored RESTful API built with Node.js and Express. It provides basic CRUD (Create, Read, Update, Delete) functionality for managing a list of users.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **CORS Enabled**: Cross-Origin Resource Sharing is enabled for all routes.
- **CRUD Operations**: Full support for creating, reading, updating, and deleting users.
- **JSON-Based**: The API uses JSON for requests and responses.
- **Error Handling**: Basic error handling for 404 (Not Found) and 500 (Internal Server Error) responses.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yeasin4745/rest-api-nodejs.git
    cd rest-api-nodejs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

-   **Start the server:**

    ```bash
    npm start
    ```

-   **Start the server in development mode (with auto-reload):**

    ```bash
    npm run dev
    ```

The server will be running at `http://localhost:5000`.

## API Endpoints

The base URL for all endpoints is `/api/users`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Shows a welcome message and API information. |
| `GET` | `/api/users` | Retrieves a list of all users. |
| `GET` | `/api/users/:id` | Retrieves a single user by their ID. |
| `POST` | `/api/users` | Creates a new user. |
| `PUT` | `/api/users/:id` | Updates an existing user. |
| `DELETE` | `/api/users/:id` | Deletes a user. |

### `POST /api/users`

**Request Body:**

```json
{
  "name": "New User",
  "email": "new.user@example.com",
  "role": "Developer"
}
```

### `PUT /api/users/:id`

**Request Body:**

```json
{
  "name": "Updated Name",
  "email": "updated.email@example.com"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
