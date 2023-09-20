# User

---
Se modifica el PUT para detectar si el status es igual a INACTIVE se recetee la contraseña. Se modifica la funcion crear para que en caso de querer crear un usuario que ya existe con status DELETE se de una alerta
## POST `/users`

Endpoint encargado de crear un nuevo user/cajero

### Parámetros body

| param             | descripción                        |
| ----------------- | ---------------------------------- |
| username          | nombre del usuario                 |
| phone             | telefono del usuario               |
| email             | email del usuario                  |
| percent_agreement | porcentaje de ganancia del usuario |

### Ejemplo Body

```json
{
  "username": "Juanito",
  "phone": "01150645937",
  "email": "jonathan92_24@hotmail.com",
  "percent_agreement": "40"
}
```

---

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": {
		"username": "Juanito",
		"phone": "01150645937",
		"email": "jonathan92_24@hotmail.com",
		"percent_agreement": "40",
		"password": "",
		"token": null,
		"total_balance": null,
		"last_settle_date": null,
		"activation_date": null,
		"id": "cb505e02-d0c6-43cf-93b4-defe1bc12946",
		"role": "TELLER",
		"status": "INACTIVE",
		"createdAt": "2023-08-01T01:55:16.529Z"
	}
}
```
NOTA: Si se intenta crear un usuario que ya existe pero su status es DISABLED se obtendra la siguiente respuesta:

```json
{
	
	"error": true,
	"message": "El usuario Juanito ya existe con un status DELETE",
	"description": "1a868ada-1b3f-44ca-81e1-f748908d4fa6"

}
```	

Se proporciona el ID del usuario, en "description", para mediante un PUT poder pasar sus Status a "INACTIVE" lo que va a reiniciar
su password a "Redtron2023".
---

## GET `/users`

Endpoint encargado de traer todos los user/cajero

---

Respuesta en caso de éxito:

```json

	{
	"error": false,
	"data": [
		{
			"id": "7ec9641b-518e-4448-b4a7-7f0b3b6c100f",
			"username": "asollam3",
			"password": "",
			"phone": "6994849369",
			"role": "TELLER",
			"email": "bcannell3@joomla.org",
			"status": "DISABLED",
			"token": null,
			"percent_agreement": "54",
			"total_balance": "65.26",
			"last_settle_date": null,
			"activation_date": null,
			"createdAt": "2023-07-08T04:51:47.276Z",
			"user_casino": [
				{
					"id": "f18ebec9-4e12-4eab-8120-a8467db4f355",
					"debits": "0",
					"status": "ACTIVE",
					"credits": "0",
					"coins": "0",
					"createdAt": "2023-07-08T04:53:31.598Z",
					"casino": {
						"id": "31621ad0-8d38-48eb-b8ef-608111168fa3",
						"name": "Aibox",
						"status": "ACTIVE",
						"imageUrl": null,
						"createdAt": "2023-07-08T04:52:05.867Z"
					}
				},
				{
					"id": "fc1a3eda-a69d-4fea-b87a-079c0cf3d724",
					"debits": null,
					"status": "ACTIVE",
					"credits": null,
					"coins": "0",
					"createdAt": "2023-07-15T06:28:41.233Z",
					"casino": {
						"id": "a0cedb5b-d130-48e8-83b1-80c5bc2aed84",
						"name": "Kaymbo",
						"status": "ACTIVE",
						"imageUrl": null,
						"createdAt": "2023-07-08T04:52:05.865Z"
					}
				}
			]
		},
		{
			"id": "c568d4a2-5c17-467d-8415-d95a3e9927af",
			"username": "rcoodeb",
			"password": "",
			"phone": "5706335506",
			"role": "TELLER",
			"email": "kskinleyb@ihg.com",
			"status": "INACTIVE",
			"token": null,
			"percent_agreement": "65",
			"total_balance": "10.85",
			"last_settle_date": null,
			"activation_date": null,
			"createdAt": "2023-07-08T04:51:47.292Z",
			"user_casino": [
				{
					"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
					"debits": "0",
					"status": "ACTIVE",
					"credits": "0",
					"coins": "0",
					"createdAt": "2023-07-08T04:53:52.730Z",
					"casino": {
						"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
						"name": "Zooveo",
						"status": "ACTIVE",
						"imageUrl": null,
						"createdAt": "2023-07-08T04:52:05.870Z"
					}
				}
			]
		},
		-----
		{
			"id": "71ef40ef-8c87-42a8-88b4-8977024ea9f6",
			"username": "fechalliea",
			"password": "",
			"phone": "3949001915",
			"role": "TELLER",
			"email": "lganna@sciencedaily.com",
			"status": "ACTIVE",
			"token": null,
			"percent_agreement": "58",
			"total_balance": "78.84",
			"last_settle_date": null,
			"activation_date": null,
			"createdAt": "2023-07-08T04:51:47.290Z",
			"user_casino": []
		},
		{
			"id": "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
			"username": "lduigenan4",
			"password": "",
			"phone": "8753704364",
			"role": "TELLER",
			"email": "kmccrory4@addtoany.com",
			"status": "ACTIVE",
			"token": null,
			"percent_agreement": "61",
			"total_balance": "30.89",
			"last_settle_date": null,
			"activation_date": null,
			"createdAt": "2023-07-08T04:51:47.278Z",
			"user_casino": []
		}
	]
}

```

---

## PUT `/users/:id`

Endpoint encargado de modificar los datos de un user/cajero

NOTA: Si en el cambio se encuntra un status = INACTIVE la funcion va a realizar un 
receteo de contraseña a "Redtron2023"

### Parámetros param

| param | descripción               |
| ----- | ------------------------- |
| id    | identificador del usuario |

### Ejemplo ruta

```
/users/d4fd0ee6-55f9-495a-a7f9-af973f26f7ce
```

---

### Parámetros body

| param             | descripción                        |
| ----------------- | ---------------------------------- |
| phone             | telefono del usuario               |
| email             | email del usuario                  |
| percent_agreement | porcentaje de ganancia del usuario |
| role              | rol del usuario                    |

### Ejemplo Body

```json
{
  "phone": "111111111",
  "email": "test-cajero_admin@hotmail.com",
  "percent_agreement": 60,
  "role": "ADMIN"
}
```

---

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": {
    "id": "d4fd0ee6-55f9-495a-a7f9-af973f26f7ce",
    "username": "test-cajero3",
    "password": "",
    "phone": "111111111",
    "role": "ADMIN",
    "email": "test-cajero_admin@hotmail.com",
    "status": "ACTIVE",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNGZkMGVlNi01NWY5LTQ5NWEtYTdmOS1hZjk3M2YyNmY3Y2UiLCJyb2xlIjoiVEVMTEVSIiwiaWF0IjoxNjg4MDkyMTQxLCJleHAiOjE2ODgwOTU3NDF9.qHt0n7FsKj4Rq-gn9QMLbRXGm-LrQOKlfMM-q0k_Dgk",
    "percent_agreement": 60,
    "total_balance": null,
    "last_settle_date": null,
    "activation_date": "2023-06-30T01:30:26.137Z",
    "createdAt": "2023-06-30T01:07:34.085Z"
  }
}
```

---

## GET `/users/:id`

Endpoint encargado de traer un user/cajero

### Parámetros param

| param | descripción               |
| ----- | ------------------------- |
| id    | identificador del usuario |

### Ejemplo ruta

```
/users/cb505e02-d0c6-43cf-93b4-defe1bc12946
```

---

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": {
		"id": "cb505e02-d0c6-43cf-93b4-defe1bc12946",
		"username": "Juanito",
		"password": "",
		"phone": "01150645937",
		"role": "TELLER",
		"email": "jonathan92_24@hotmail.com",
		"status": "INACTIVE",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjYjUwNWUwMi1kMGM2LTQzY2YtOTNiNC1kZWZlMWJjMTI5NDYiLCJyb2xlIjoiVEVMTEVSIiwiaWF0IjoxNjkwODU0OTM2LCJleHAiOjE2OTA4NTg1MzZ9.NWi-B-LE1FBnpvuRhjMjEjGdkxs2UHiEEtd_V73tFz0",
		"percent_agreement": "40",
		"total_balance": null,
		"last_settle_date": null,
		"activation_date": null,
		"createdAt": "2023-08-01T01:55:16.529Z"
	}
}
```

---


## DELETE `/users/:id`

Endpoint encargado de eliminar logicamente el registro de un cajero.
Su estado pasara a estar DELETE. Y el de sus user_casino DISABLE

### Parámetros param

| param | descripción               |
| ----- | ------------------------- |
| id    | identificador del usuario |

### Ejemplo ruta

```
/users/374ab3d5-1603-48fe-9aff-295318b846dc
```

---

Respuesta en caso de éxito:

```json
{
   "error": false,
    "data": {
        "id": "374ab3d5-1603-48fe-9aff-295318b846dc",
        "username": "jdunks0",
        "phone": "34023177744",
        "role": "TELLER",
        "email": "pcrammy0@bluehost.com",
        "status": "DELETE",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzRhYjNkNS0xNjAzLTQ4ZmUtOWFmZi0yOTUzMThiODQ2ZGMiLCJyb2xlIjoiVEVMTEVSIiwiaWF0IjoxNjkyOTIwNjE4LCJleHAiOjE2OTI5MjQyMTh9.fJ9cUAZ9OjQxvOXtvOIGVm4sc7Jag2lkOA4bB-xsxcs",
        "percent_agreement": "100",
        "total_balance": "23.64",
        "last_settle_date": null,
        "activation_date": null,
        "createdAt": "2023-07-08T17:18:57.523Z"
    }
}
```

---