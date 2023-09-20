# Coins Movements

---

## POST `/coinsMovements/coinsInflow/:id`

Endpoint encargado de crear un nuevo coinsMovements
id = userId que debe ser un User Role === "ADMIN"

### Ejemplo ruta

```
/coinsMovements/coinsInflow/45fc3c3c-5b7c-400f-b352-cb3a80dca63e

```

### Parámetros body

| param        | descripción                                                |
| ------------ | ---------------------------------------------------------- | --- |
| userCasinoId | identificador del userCasino: string                       |
| inflow_qty   | cantidad de fichas que se le asignan al userCasino: number |     |

### Ejemplo Body

```json
{
  "userCasinoId": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
  "inflow_qty": "10000"
}
```

---

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": {
    "id": "8b8c5774-8528-4871-ae73-bf9949553251",
    "inflow_qty": "10000",
    "outflow_qty": "0",
    "coins_balance": "20000",
    "createdAt": "2023-07-17T21:15:00.496Z",
    "user": {
      "id": "41feed0c-3711-402f-a309-b16933f38962",
      "username": "redtron",
      "role": "ADMIN",
      "email": "desasur.sa@gmail.com"
    },
    "userCasinoId": {
      "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496"
    }
  }
}
```

---

## GET `/coinsMovements?adminId=id`

Endpoint encargado de traer todos los movimientos de fichas (coinsMovements) que esten relacionados al id de un administrador

### Parámetros query

| param | descripción                                                              |
| ----- | ------------------------------------------------------------------------ |
| adminId  | id: identificador del usuario (administrador) que creó el Coins Movement |

### Ejemplo ruta

```
/coinsMovements?adminId=41feed0c-3711-402f-a309-b16933f38962

```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "8b8c5774-8528-4871-ae73-bf9949553251",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "20000",
      "createdAt": "2023-07-17T21:15:00.496Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "a0763160-cf81-4408-8ee6-9192baab5ba4",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "10000",
      "createdAt": "2023-07-13T15:23:39.107Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "989cb699-4008-48a6-b099-71eb5bcc0896",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "1000",
      "createdAt": "2023-07-13T14:44:49.627Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "76470561-beb5-431a-9002-175522bb9dce",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "92f6d557-8cc9-4c8e-8a0b-a49e527f0e76",
          "username": "kbenez9"
        }
      }
    },
    {
      "id": "be736bf0-bb70-4643-9120-9be7d637af51",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "500",
      "createdAt": "2023-07-13T14:43:54.313Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "76470561-beb5-431a-9002-175522bb9dce",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "92f6d557-8cc9-4c8e-8a0b-a49e527f0e76",
          "username": "kbenez9"
        }
      }
    }
  ]
}
```

---

## GET `/coinsMovements?tellerId=id`

Endpoint encargado de traer todos los movimientos de fichas (coinsMovements) que esten relacionados al id de un cajero

### Parámetros query

| param    | descripción                  |
| -------- | ---------------------------- |
| tellerId | id: identificador del cajero |

### Ejemplo ruta

```
/coinsMovements?tellerId=6fea47ad-98d8-4dbf-9566-c261d7e15c3f
```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "8b8c5774-8528-4871-ae73-bf9949553251",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "20000",
      "createdAt": "2023-07-17T21:15:00.496Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "a0763160-cf81-4408-8ee6-9192baab5ba4",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "10000",
      "createdAt": "2023-07-13T15:23:39.107Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    }
  ]
}
```

---

## GET `/coinsMovements?casinoId=id`

Endpoint encargado de traer todos los movimientos de fichas (coinsMovements) que esten relacionados al id de un casino

### Parámetros query

| param    | descripción                  |
| -------- | ---------------------------- |
| casinoId | id: identificador del casino |

### Ejemplo ruta

```
/coinsMovements?casinoId=d7a28e76-1f92-4ec5-be3c-13520bcd632d

```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "8b8c5774-8528-4871-ae73-bf9949553251",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "20000",
      "createdAt": "2023-07-17T21:15:00.496Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "989cb699-4008-48a6-b099-71eb5bcc0896",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "1000",
      "createdAt": "2023-07-15T14:44:49.627Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "76470561-beb5-431a-9002-175522bb9dce",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "92f6d557-8cc9-4c8e-8a0b-a49e527f0e76",
          "username": "kbenez9"
        }
      }
    },
    {
      "id": "a0763160-cf81-4408-8ee6-9192baab5ba4",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "10000",
      "createdAt": "2023-07-14T15:23:39.107Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "be736bf0-bb70-4643-9120-9be7d637af51",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "500",
      "createdAt": "2023-07-13T14:43:54.313Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "76470561-beb5-431a-9002-175522bb9dce",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "92f6d557-8cc9-4c8e-8a0b-a49e527f0e76",
          "username": "kbenez9"
        }
      }
    }
  ]
}
```

---

## GET `/coinsMovements?date=fechaInicial&end=fechaFinal`

Endpoint encargado de traer todos los movimientos de fichas que esten relacionados a la fecha inicial

### Parámetros query

| param | descripción                                                                                          |
| ----- | ---------------------------------------------------------------------------------------------------- |
| ?     | Fecha desde y (opcional) fecha hasta las que se desea ver los Coins Movement segun su fecha cratedAt |

### Ejemplo ruta

```
/coinsMovements?date=2023-07-10&end=2023-07-12

```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "3ca01904-384d-43c2-8ec9-8d4145e2f538",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "9500",
      "createdAt": "2023-07-13T10:55:09.029Z",
      "user": {
        "id": "45fc3c3c-5b7c-400f-b352-cb3a80dca63e",
        "username": "Hugo Schierano",
        "role": "ADMIN",
        "email": "hugoschierano@gmail.com"
      },
      "userCasinoId": {
        "id": "d62dc6e2-dd65-4a53-a423-5e57e03899d9",
        "casino": {
          "id": "cb74b548-4e94-484e-8f75-c9b2058bf7ef",
          "name": "Zeus"
        },
        "user": {
          "id": "8699b95d-f316-49b0-867b-6cdbe0521306",
          "username": "Carlos Garces"
        }
      }
    },
    {
      "id": "f62d67e8-5243-4b82-8ae4-09b87d414150",
      "inflow_qty": "500",
      "outflow_qty": "0",
      "coins_balance": "9000",
      "createdAt": "2023-07-13T00:42:43.341Z",
      "user": {
        "id": "45fc3c3c-5b7c-400f-b352-cb3a80dca63e",
        "username": "Hugo Schierano",
        "role": "ADMIN",
        "email": "hugoschierano@gmail.com"
      },
      "userCasinoId": {
        "id": "d62dc6e2-dd65-4a53-a423-5e57e03899d9",
        "casino": {
          "id": "cb74b548-4e94-484e-8f75-c9b2058bf7ef",
          "name": "Zeus"
        },
        "user": {
          "id": "8699b95d-f316-49b0-867b-6cdbe0521306",
          "username": "Carlos Garces"
        }
      }
    }
  ]
}
```

## GET `/coinsMovements?userCasinoId=id`

Endpoint encargado de traer todos los movimientos de fichas (coinsMovements) que esten relacionados al id de un userCasino

### Parámetros query

| param        | descripción                       |
| ------------ | --------------------------------- |
| userCasinoId | id: identificador del user_casino |

### Ejemplo ruta

```
/coinsMovements?userCasinoId=65c55ba0-c4f2-431d-bcb5-2d5403809496
```

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": [
    {
      "id": "8b8c5774-8528-4871-ae73-bf9949553251",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "20000",
      "createdAt": "2023-07-17T21:15:00.496Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    },
    {
      "id": "a0763160-cf81-4408-8ee6-9192baab5ba4",
      "inflow_qty": "10000",
      "outflow_qty": "0",
      "coins_balance": "10000",
      "createdAt": "2023-07-13T15:23:39.107Z",
      "user": {
        "id": "41feed0c-3711-402f-a309-b16933f38962",
        "username": "redtron",
        "role": "ADMIN",
        "email": "desasur.sa@gmail.com"
      },
      "userCasinoId": {
        "id": "65c55ba0-c4f2-431d-bcb5-2d5403809496",
        "casino": {
          "id": "d7a28e76-1f92-4ec5-be3c-13520bcd632d",
          "name": "Linkbuzz"
        },
        "user": {
          "id": "6fea47ad-98d8-4dbf-9566-c261d7e15c3f",
          "username": "redtron_teller2"
        }
      }
    }
  ]
}
```

---

## DELETE `/coinsMovements/:id`

Endpoint encargado de borrar un movimiento de ficha (coin movements)

### Parámetros query

| param | descripción                         |
| ----- | ----------------------------------- |
| user  | id: identificador del coinsMovement |

### Ejemplo ruta

```
/coinsMovements/3d8b5cd4-7f58-4461-8016-68a767b5ccca

```

Respuesta en caso de éxito:

```json
{
	"error": false,
	"data": true
}
```

---

## PUT `/coinsMovements/:id`

Endpoint encargado de editar un Coins Movement. Se puede modificar el User Casino y/o la cantidad de Coins que se le asignan al movimiento.

### Parámetros query

| param | descripción                         |
| ----- | ----------------------------------- |
| user  | id: identificador del coinsMovement |

### Parámetros body

| param        | descripción                        |
| ------------ | ---------------------------------- |
| userCasinoId | Id del User Casino                 |
| inflow_qty   | Cantidad de Coins que se agregarán |

### Ejemplo Body

```json
{
  "userCasinoId": "40c8bab8-35e6-472c-9795-c9c89312173b",
  "inflow_qty": 443
}
```

---

### Ejemplo ruta

```
/coinsMovements/1b6a9d16-5236-4bd6-b603-d00df5e4f44b

```

Respuesta en caso de éxito:

```json
{
  "id": "1b6a9d16-5236-4bd6-b603-d00df5e4f44b",
  "inflow_qty": 442,
  "outflow_qty": "0",
  "coins_balance": 3999
}
```

---