## **API documentation**

<_this is the V1.0 so expect updates in the near future_>

---

- **URL**

  <_/helloPost_>

- **description**

  <_the main root that's being sent to by the slash command on slack_>  
   <_saves the pair and the zoom link to the object users_>  
   <_P.S: don't change the path, please_>

- **Method:**

  <_`POST`_>

- **Data Params**

  <_req.body should be under this form below_>

  ```
  {
    "user_name": "seif", // name of the student that used the command
    "text": "@mohameddhia, zoom link right here", // text attached to the command(contains the pair name and the zoom link)
    "command": " ", // the command sends this every time (it's not bieng used for the moment)
    "user_id": "119922883377" // user id of the sender
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `"Thank you for sharing your Zoom link with us, HaPPy HaCkinG :D"`

---

- **URL**

  <_/all_>

- **description**

  <_responsible of returning all of the students rooms to render in the front end_>

- **Method:**

  <_`GET`_>

* **Success Response:**

  - **Code:** 202 <br />
    **Content:** `array of students zoom rooms`

- **Sample response:**

```
  [
    {
        "user_name": "seif", // to understand the fields more refer back to the /helloPost route
        "text": ["@mohameddhia", " zoom link right here"],
        "command": " ",
        "user_id": "119922883377",
        "pair": "@mohameddhia",
        "zoomLink": " zoom link right here",
    }
  ]
```

---

- **URL**

  <_/delete/id/:id_>

- **description**

  <_deletes a zoom room using the id of who ever made it_>

- **Method:**

  <_`DELETE`_>

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

* **Success Response:**

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  - **Code:** 200 <br />
    **Content:** `"ok"`

* **Error Response:**

  - **Code:** 400 <br />
    **Content:** `"not ok"`

---

- **URL**

  <_/delete/name/:name_>

- **description**

  <_deletes a zoom room using the name of who ever made it_>

* **Method:**

  <_`DELETE`_>

- **URL Params**

  **Required:**

  `name=[string]`

* **Success Response:**

  - **Code:** 202 <br />
  - **Content:** `the users object` // still debating if it should be the array
