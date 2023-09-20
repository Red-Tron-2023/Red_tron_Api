# ChangePassword

## PUT `/users/changePassword`

Endpoint encargado de modificar la contraseña y el status de un cajero al iniciar por primera vez

---

### Parámetros body

| param           | descripción                     |
| --------------- | ------------------------------- |
| userName        | nombre de usuario               |
| item            | objero con las contraseñas      |
| password        | contraseña designada por defeto |
| newPassword     | nueva contraseña                |
| comparePassword | repite la nueva contraseña      |

### Ejemplo Body

```json
{
  "userName": "Juanito",
  "item": {
    "password": "Redtron2023",
    "newPassword": "juanitoCajero",
    "comparePassword": "juanitoCajero"
  }
}
```

---

Respuesta en caso de éxito:

```json
{
  "error": false,
  "data": true
}
```

---