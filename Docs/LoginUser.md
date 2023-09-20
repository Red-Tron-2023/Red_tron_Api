# Endpoints

---

# Login User

## POST `/auth/login`

Endpoint encargado de perrmitir el ingreso de un usuario

### Parámetros body

| param    | descripción            |
| -------- | ---------------------- |
| username | nombre del usuario     |
| password | contraseña del usuario |

### Ejemplo Body

```json
{
	"username": "Juanito",
	"password": "Redtron2023"
}
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