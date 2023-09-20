# Load

---

## POST `/loads/:userCasinoId`

Endpoint encargado de crear un nuevo Load

### Parámetros body

| param                                                          | descripción                                                       |
| -------------------------------------------------------------- | ----------------------------------------------------------------- |
| -------------------------------------------------------------- | ---                                                               |
| playerId                                                       | id del player:string (obligatorio)                                |
| coins_outflow_qty                                              | carga que realiza el userCasino al jugador : string (obligatorio) |
| transfer_url                                                   | url de transferencia realizada (obligatorio)                      |

### Ejemplo Body

```json
{
  "playerId": "09cff147-67c5-46b9-b23a-10c60e3d1463",
  "coins_outflow_qty": "200",
  "transfer_url": "fasdsafdafdadsadsadadsgfasd"
}
```

---

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": {
    "id": "5628cd44-6f5d-4737-bc82-37c13eb7f2f0",
    "transfer_url": "fasdsafdafdadsadsadadsgfasd",
    "status": "COMPLETED",
    "coins_outflow_qty": "200",
    "createdAt": "2023-08-09T23:11:18.472Z",
    "user_casino": {
      "id": "cc32c3c7-f36a-45e0-b480-a50171050fcb",
      "debits": null,
      "status": "ACTIVE",
      "credits": null,
      "coins": "300",
      "createdAt": "2023-08-08T00:06:58.337Z",
      "user": {
        "id": "92f6d557-8cc9-4c8e-8a0b-a49e527f0e76",
        "username": "kbenez9",
        "email": "aliley9@odnoklassniki.ru"
      },
      "casino": {
        "id": "b7449c33-2bd7-43bb-9fa2-b53ad59cb093",
        "name": "JUGA"
      }
    },
    "player": {
      "id": "09cff147-67c5-46b9-b23a-10c60e3d1463",
      "nickname": "JonyAibox2",
      "status": "ACTIVE",
      "createdAt": "2023-08-08T00:57:12.190Z"
    },
    "historic": {
      "entity": "load",
      "id": "78decf2f-7afc-4f85-a144-b9d526eb549f",
      "createdAt": "2023-08-09T23:11:18.560Z"
    }
  }
}
```

---
