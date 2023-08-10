# Budget API

A simple API to manage budget items and keep track of your balance. Accompanied by a basic UI for testing and interaction.

## UI

Access the basic UI by navigating to the root URL (`/`). From here, you can:

- Add new budget items using the provided form.
- View a list of all budget items.
- Delete specific budget items directly from the list.

It's a simple interface designed for testing purposes and to offer a straightforward way to interact with the underlying API.

## Endpoints

### `GET /api/budget`

- **Description**: Fetches all budget items.
- **Response**: A JSON array of budget items.
- **Example Response**:
  ```json
  [
    {
      "_id": "603f650095b1b01234c9a8b6",
      "title": "Salary",
      "amount": "5000",
      "category": "Job",
      "type": "income"
    },
    {
      "_id": "603f670095b1b01234c9a8b7",
      "title": "Groceries",
      "amount": "100",
      "category": "Food",
      "type": "expense"
    }
  ]
  ```

### `POST /api/budget`

- **Description**: Adds a new budget item.
- **Body**:
  - `title` (string): The title of the budget item.
  - `amount` (string): The amount of the budget item.
  - `category` (string): The category of the budget item.
  - `type` (string): The type of the budget item, either "income" or "expense".
- **Example Request Body**:
  ```json
  {
    "title": "Lunch",
    "amount": "10",
    "category": "Food",
    "type": "expense"
  }
  ```
- **Response**: Status code `201` if successful.

### `DELETE /api/budget/:id`

- **Description**: Deletes a specific budget item based on its ID.
- **Parameters**:
  - `id` (string): The ID of the budget item to delete.
- **Response**: Status code `200` if successful.

## How to use

1. Set up the server (provide instructions here, e.g., "run `npm install` then `npm start`").
2. Access the basic UI by opening your browser and navigating to the server's root URL.
3. Alternatively, use a tool like Postman to directly interact with the endpoints.

---

*Created by Alexander Mayer


