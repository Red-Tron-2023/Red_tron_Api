# User_Casino

---

## POST `/userCasino`

Endpoint encargado de crear un nuevo user_casino

### Parámetros body

| param    | descripción                          |
| -------- | ------------------------------------ |
| usersId  | array de identificadores de usuarios |
| casinoId | identificador del casino             |

### Ejemplo Body

```json
{
  "usersId": [
    "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
    "71ef40ef-8c87-42a8-88b4-8977024ea9f6"
  ],
  "casinoId": "a32809d3-9b62-4f7b-8bc1-1156b527b10c"
}
```

---

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": [
		{
			"id": "9e0d506f-5683-42aa-a9b2-76b32d774027",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.404Z",
			"user": {
				"id": "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
				"username": "lduigenan4",
				"email": "kmccrory4@addtoany.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		},
		{
			"id": "45b31fcb-5b68-4625-b36f-f63613a1a3c8",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.457Z",
			"user": {
				"id": "71ef40ef-8c87-42a8-88b4-8977024ea9f6",
				"username": "fechalliea",
				"email": "lganna@sciencedaily.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		}
	]
}
```

---

## GET `/userCasino`

Endpoint encargado de traer todos los user_casino

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "2000c851-ce61-4f1c-8f0c-849c20b9bf5a",
      "debits": "0",
      "credits": "0",
      "coins": "0",
      "createdAt": "2023-07-02T22:28:22.077Z",
      "user": {
        "id": "75a27939-2133-4002-99b3-9efdde4daac1",
        "username": "test-cajero3"
      },
      "casino": {
        "id": "83229184-4805-4407-814a-90bdecf7279c",
        "name": "Zeus"
      }
    },
    {
      "id": "b83f4377-8a27-4611-aa8c-3ab70b8fff03",
      "debits": "0",
      "credits": "0",
      "coins": "0",
      "createdAt": "2023-07-02T22:26:51.724Z",
      "user": {
        "id": "06c7fef8-9b88-4163-b7cb-2c761498730a",
        "username": "test-cajero2"
      },
      "casino": {
        "id": "0abacb98-3427-484f-a406-56f4a62885fa",
        "name": "Faraon"
      }
    },
    {
      "id": "464174a4-380f-46c8-9ee1-5a31d1a77a4a",
      "debits": "0",
      "credits": "0",
      "coins": "0",
      "createdAt": "2023-07-02T22:26:10.126Z",
      "user": {
        "id": "75a27939-2133-4002-99b3-9efdde4daac1",
        "username": "test-cajero3"
      },
      "casino": {
        "id": "0abacb98-3427-484f-a406-56f4a62885fa",
        "name": "Faraon"
      }
    }
  ]
}
```

---

## GET `/userCasino?userId=id`

Endpoint encargado de traer todos los user_casino que esten relacionados al id de un usuario

### Parámetros query

| param | descripción                   |
| ----- | ----------------------------- |
| userId  | id: identificador del usuario |

### Ejemplo ruta

```
/userCasino?userId=d6a39794-17eb-4f1c-a03e-0658d9e3baa3

```

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": [
		{
			"id": "9e0d506f-5683-42aa-a9b2-76b32d774027",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.404Z",
			"user": {
				"id": "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
				"username": "lduigenan4",
				"email": "kmccrory4@addtoany.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		}
	]
}
```

---


## GET `/userCasino?casinoId=id`

Endpoint encargado de traer todos los user_casino que esten relacionados al id de un casino

### Parámetros query

| param  | descripción                  |
| ------ | ---------------------------- |
| casinoId | id: identificador del casino |

### Ejemplo ruta

```
/userCasino?casinoId=a32809d3-9b62-4f7b-8bc1-1156b527b10c

```

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": [
		{
			"id": "9e0d506f-5683-42aa-a9b2-76b32d774027",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.404Z",
			"user": {
				"id": "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
				"username": "lduigenan4",
				"email": "kmccrory4@addtoany.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		},
		{
			"id": "45b31fcb-5b68-4625-b36f-f63613a1a3c8",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.457Z",
			"user": {
				"id": "71ef40ef-8c87-42a8-88b4-8977024ea9f6",
				"username": "fechalliea",
				"email": "lganna@sciencedaily.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		}
	]
}
```

---


## GET `/userCasino?user=id&casino=id`

Endpoint encargado de traer todos los user_casino que esten relacionados al id de un casino y un usuario en particular

### Parámetros query

| param  | descripción                   |
| ------ | ----------------------------- |
| userId   | id: identificador del usuario |
| casinoId | id: identificador del casino  |

### Ejemplo ruta

```
/userCasino?userId=d6a39794-17eb-4f1c-a03e-0658d9e3baa3&casinoId=a32809d3-9b62-4f7b-8bc1-1156b527b10c

```

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": [
		{
			"id": "9e0d506f-5683-42aa-a9b2-76b32d774027",
			"debits": null,
			"status": "ACTIVE",
			"credits": null,
			"coins": "0",
			"createdAt": "2023-08-04T22:48:23.404Z",
			"user": {
				"id": "d6a39794-17eb-4f1c-a03e-0658d9e3baa3",
				"username": "lduigenan4",
				"email": "kmccrory4@addtoany.com"
			},
			"casino": {
				"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
				"name": "Zeus"
			}
		}
	]
}
```

---