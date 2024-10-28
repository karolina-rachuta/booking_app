# Booking App

## Tech Stack:

- React router
- Formik (formularz)
- React Bootstrap
- JSON server

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
