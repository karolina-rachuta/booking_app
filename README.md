# Booking App

## Tech Stack:

- React router
- Formik (formularz)
- React Bootstrap
- JSON server (do zabawy, nie do produkcji)
- convert dates
- CRUD

### Setup / boilerplate

- react router

```js
npm install react-router-dom@6
```

- test the snippet

  ```js
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/book" element={<div>Book</div>} />
      </Routes>
    </BrowserRouter>
  </div>
  ```

- json server + komunikacja

```js
npm install json-server
```

- add script in package.json (and changing port to 3004):
  "json-server": "json-server --watch ./backend_api/api.json --port 3004"
- adding folder and file db.json (endpoint posts, comments, profile)

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

- bootstrap

```js
npm install react-bootstrap bootstrap
```

```js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Button variant="primary">Button as link</Button>}
          />
          <Route path="/book" element={<div>Book</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

## JSON server (was created databases for visits)

- choose endpoint, tablica obiektów, w każdym obiekcie zawsze id
- json type data: "2012-04-23T18:25:43.511Z"

```json
{
  "visits": [
    {
      "id": "1",
      "dates": ["hour", "hour"]
    }
  ]
}
```

or

```json
{
  "visits": [
    {
      "id": "1",
      "16.11.2024": ["15:00", "16:00", "17:00"],
      "data": "2024-11-23",
      "avaiableHours": ["15:00", "16:00", "17:00"]
    }
  ]
}
```

- canceled visit: confirmation false

```json
 "confirmation": false
```

## Notatki

1. Dodawanie zmiennych środowiskowych do scirpts

- "scripts": {
  "start": "PORT=3000 react-scripts start",
  }

2. Rest API opiera się na protokole HTTP i na status codes HTTP i endpointach

- endpoints na high level w api.json
- endpoints w liczbie mnogiej
- pobieranie i zapisywanie danych na backend serverze
- CRUD - get, post, put/patch, delete

3. Current date (today)
```ja
const currentDate = newDate().toJSON().slice(0, 10); // 29/10/2024
```
