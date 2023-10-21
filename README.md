# NestTemplate
## Подсказка для фронтенда
```Запрос с фронтенда необходимо отправлять с параметром credentials: 'includes'```
Пример: js```
  fetch("http://192.168.100.54:3000/auth/login/", {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then((response) => {
    return response.json().then((resp) => {
      console.log(resp);
    })
  });
```