const request = {
  get(url) {
    return fetch(url);
  },
  post(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
  patch(url, payload) {
    return fetch(url, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
  delete(url) {
    return fetch(url, { method: "DELETE" });
  },
};
//GET요청
request
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
//{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//POST 요청
request
  .post("https://jsonplaceholder.typicode.com/todos", {
    userId: 1,
    title: "Javascript",
    completed: false,
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err));
//{ userId: 1, title: 'Javascript', completed: false, id: 201 }

//PATCH요청
request
  .patch("https://jsonplaceholder.typicode.com/todos/1", {
    completed: true,
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err));
//{ userId: 1, id: 1, title: 'delectus aut autem', completed: true }
//complted가 true 로 바뀜

//DELETE 요청
request
  .delete("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err));
