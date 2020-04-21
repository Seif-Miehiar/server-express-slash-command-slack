## **API documentation**

<_this is the V1.1 so expect updates in the near future_>

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
        "pair1": "daiii",
        "user_id": "119922883378",
        "pair2": "mohameddhia",
        "zoomLink": "zoom link right here",
        "timeStamp": "2020-04-07T16:19:23.528Z"
    },
    {
        "pair1": "seif",
        "user_id": "119922883377",
        "pair2": "mohameddhia",
        "zoomLink": "zoom link right here",
        "timeStamp": "2020-04-07T17:00:26.122Z"
    }
]
```

---

- **URL**

  <_/delete/name/:name_>

- **description**

  <_deletes a zoom room using the name of either studens_>

* **Method:**

  <_`DELETE`_>

- **URL Params**

  **Required:**

  `name=[string]`

* **Success Response:**

  - **Code:** 202 <br />
  - **Content:** `array of the remaining users`

---

- **URL**

  <_/deleteAll_>

- **description**

  <_deletes all the zoom rooms_>

* **Method:**

  <_`DELETE`_>

* **Success Response:**

  - **Code:** 202 <br />
  - **Content:** `[]`
