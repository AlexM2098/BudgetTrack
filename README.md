
# Budget API

A simple API to manage budget items and keep track of your balance.

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
2. Use a tool like Postman or simply your browser to access the endpoints.
3. Enjoy managing your budget!

---

*Created by Alexander Mayer


