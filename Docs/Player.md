# Player

---

## POST `/players`

Endpoint encargado de crear un nuevo Player

### Parámetros body

| param        | descripción                                                    |
| ------------ | -------------------------------------------------------------- | --- |
| nickname     | nombre del nuevo player: string                                |
| userCasinoId | identificador del userCasino donde va a estar asociado: string |     |

### Ejemplo Body

```json
{
  "nickname": "JonyAibox",
  "userCasinoId": "17c09e86-1d14-4416-b91c-c77b33885d0d"
}
```

---

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": {
		"nickname": "JonyAibox",
		"user_casino": {
			"id": "17c09e86-1d14-4416-b91c-c77b33885d0d",
			"debits": "0",
			"status": "ACTIVE",
			"credits": "0",
			"coins": "6000",
			"createdAt": "2023-07-08T04:53:31.556Z",
			"user": {
				"id": "140f8fc5-2ae9-428d-b869-4e468334cd4c",
				"username": "jdunks0",
				"email": "pcrammy0@bluehost.com"
			},
			"casino": {
				"id": "31621ad0-8d38-48eb-b8ef-608111168fa3",
				"name": "Aibox"
			}
		},
		"id": "c499b356-2cac-4c8e-8696-577be5d3ea40",
		"status": "ACTIVE",
		"createdAt": "2023-08-04T23:19:22.330Z"
	}
}
```

---

## GET `/players`

Endpoint encargado de traer todos los players creados en la base de datos

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": [
		{
			"id": "a9ff6b4d-5e5a-4292-a609-d26b7af47b57",
			"nickname": "JonyZooveo",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:50:07.966Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "98534b25-d60d-42b3-95e0-861bb6e85712",
			"nickname": "JulioZooveo",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:50:17.498Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "6b35effe-d402-4bb6-8d78-98611ef72210",
			"nickname": "JulioAibox",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:51:11.602Z",
			"user_casino": {
				"id": "f18ebec9-4e12-4eab-8120-a8467db4f355",
				"casino": {
					"id": "31621ad0-8d38-48eb-b8ef-608111168fa3",
					"name": "Aibox"
				},
				"user": {
					"username": "asollam3",
					"email": "bcannell3@joomla.org"
				}
			}
		},
		{
			"id": "52f03c0b-798f-488a-9484-b5ea79dff8e9",
			"nickname": "EmiliaAibox",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:51:20.814Z",
			"user_casino": {
				"id": "f18ebec9-4e12-4eab-8120-a8467db4f355",
				"casino": {
					"id": "31621ad0-8d38-48eb-b8ef-608111168fa3",
					"name": "Aibox"
				},
				"user": {
					"username": "asollam3",
					"email": "bcannell3@joomla.org"
				}
			}
		},
		{
			"id": "b51b61c5-17b8-414d-b2b1-f1bbbd69fa1d",
			"nickname": "EmiliaZooveo",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:52:10.221Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "6a532d55-068e-4157-9ebd-f2a85797cc28",
			"nickname": "DayanaZooveo",
			"status": "ACTIVE",
			"createdAt": "2023-07-14T22:52:22.736Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "4329d25f-6e09-488d-8263-3ece02dc8c7d",
			"nickname": "Modificado",
			"status": "DISABLED",
			"createdAt": "2023-07-14T22:52:30.888Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "27312f79-795d-428d-9b5d-96d71fcf2691",
			"nickname": "JoseZooveo",
			"status": "ACTIVE",
			"createdAt": "2023-07-17T20:37:55.690Z",
			"user_casino": {
				"id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
				"casino": {
					"id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
					"name": "Zooveo"
				},
				"user": {
					"username": "rcoodeb",
					"email": "kskinleyb@ihg.com"
				}
			}
		},
		{
			"id": "c499b356-2cac-4c8e-8696-577be5d3ea40",
			"nickname": "JonyAibox",
			"status": "ACTIVE",
			"createdAt": "2023-08-04T23:19:22.330Z",
			"user_casino": {
				"id": "17c09e86-1d14-4416-b91c-c77b33885d0d",
				"casino": {
					"id": "31621ad0-8d38-48eb-b8ef-608111168fa3",
					"name": "Aibox"
				},
				"user": {
					"username": "jdunks0",
					"email": "pcrammy0@bluehost.com"
				}
			}
		}
	]
}
```

---

## GET `/players?query`

Endpoint encargado de traer todos los players que coincidan con los siguientes filtros posibles pasados por query:

### Parámetros query

| param        | descripción                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------- |
| name         | nombre del player que se quiere buscar(es indistinto de mayusculas o minisculas y relaliza busquedas parciales.) |
| userCasinoId | id: identificador del userCasino al que esta asociado el player                                                  |
| userId       | id: identificador del usuario(Cajero) que creo el player                                                         |
| user         | username: identificador del usuario(Cajero) que creo el player                                                   |
| casino       | name: identificador del casino al que esta asociado el player                                                    |

### Ejemplo rutas:

```
userCasinoId

/players?userCasinoId=17c09e86-1d14-4416-b91c-c77b33885d0d

```

```
name

/players?name=JonyZooveo

```

```
userId

/players?userId=140f8fc5-2ae9-428d-b869-4e468334cd4c

```

```
user

/players?user=rcoodeb

```

```
casino

/players?casino=Zooveo

```

Respuesta en caso de éxito en busqueda por casino:

```json
{
  "error": false,
  "data": [
    {
      "id": "37edc33b-1b8e-4811-a75f-73fe0bbb8285",
      "nickname": "HugoZooveo",
      "status": "ACTIVE",
      "createdAt": "2023-07-14T22:49:47.844Z",
      "user_casino": {
        "id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
        "casino": {
          "id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
          "name": "Zooveo"
        },
        "user": {
          "username": "rcoodeb",
          "email": "kskinleyb@ihg.com"
        }
      }
    },
    {
      "id": "4329d25f-6e09-488d-8263-3ece02dc8c7d",
      "nickname": "JoseZooveo",
      "status": "ACTIVE",
      "createdAt": "2023-07-14T22:52:30.888Z",
      "user_casino": {
        "id": "c14ff7cd-9220-462d-84e0-445cb946e8cd",
        "casino": {
          "id": "dd4cb3c7-2455-47c4-bccc-6ee5ae5612fc",
          "name": "Zooveo"
        },
        "user": {
          "username": "rcoodeb",
          "email": "kskinleyb@ihg.com"
        }
      }
    }
  ]
}
```

---

## PUT `/players/:playerId`

Endpoint encargado de editar el nickname de un player.

### Parámetros query

| param    | descripción                  |
| -------- | ---------------------------- |
| playerId | id: identificador del player |

### Parámetros body

| param    | descripción                      |
| -------- | -------------------------------- |
| nickname | Nombre que indentifica al player |

### Ejemplo Body

```json
{
  "nickname": "Modificado"
}
```

---

### Ejemplo ruta

```
/players/4329d25f-6e09-488d-8263-3ece02dc8c7d

```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": {
    "id": "4329d25f-6e09-488d-8263-3ece02dc8c7d",
    "nickname": "Modificado",
    "status": "ACTIVE",
    "createdAt": "2023-07-14T22:52:30.888Z"
  }
}
```

---

## DELETE `/players/:playerId`

Endpoint encargado de editar el status de un player para realizar el borrado logico. Si el
estado es "ACTIVE" lo va a cambiar por "DISABLED" y en caso de que sea "DISABLED" lo
va a dejar como "ACTIVE"

### Parámetros query

| param    | descripción                  |
| -------- | ---------------------------- |
| playerId | id: identificador del player |

---

### Ejemplo ruta

```
/players/4329d25f-6e09-488d-8263-3ece02dc8c7d

```

Players antes de realizar el DELETE con el status ACTIVE:

```json
{
  "error": false,
  "data": {
    "id": "4329d25f-6e09-488d-8263-3ece02dc8c7d",
    "nickname": "Modificado",
    "status": "ACTIVE",
    "createdAt": "2023-07-14T22:52:30.888Z"
  }
}
```

Respuesta en caso de éxito al realizar el DELETE:

```json
{
  "error": false,
  "data": {
    "id": "4329d25f-6e09-488d-8263-3ece02dc8c7d",
    "nickname": "Modificado",
    "status": "DISABLED",
    "createdAt": "2023-07-14T22:52:30.888Z"
  }
}
```

---