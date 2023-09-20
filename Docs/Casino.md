# Casino

---

## POST `/casino`

Endpoint encargado de crear un nuevo casino

### Parámetros body

| param     | descripción               |
| --------- | ------------------------- |
| name      | nombre del casino         |
| image_url | imagen del logo de casino |

### Ejemplo Body

```json
{
  "name": "Zeus",
  "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg"
}
```

---

Respuesta en caso de éxito:

```json
{
	"name": "Zeus",
	"image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
	"imageUrl": null,
	"id": "a32809d3-9b62-4f7b-8bc1-1156b527b10c",
	"status": "ACTIVE",
	"createdAt": "2023-08-04T22:36:41.414Z"
}
```

---

## GET `/casino`

Endpoint encargado de traer todos los cajeros

---

Respuesta en caso de éxito:

```json
[
  {
    "id": "83229184-4805-4407-814a-90bdecf7279c",
    "name": "Zeus",
    "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
    "createdAt": "2023-07-01T01:06:16.545Z"
  },
  {
    "id": "0abacb98-3427-484f-a406-56f4a62885fa",
    "name": "Faraon",
    "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
    "createdAt": "2023-07-01T01:11:08.628Z"
  },
  {
    "id": "6785eb30-7a39-43dc-8edc-08a6b31750fd",
    "name": "Gana en Casa",
    "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
    "createdAt": "2023-07-01T01:11:25.376Z"
  }
]
```

---

## PUT `/casino/:id`

Endpoint encargado de modificar los datos de un casino

### Parámetros param

| param | descripción              |
| ----- | ------------------------ |
| id    | identificador del casino |

### Ejemplo ruta

```
/casino/6785eb30-7a39-43dc-8edc-08a6b31750fd
```

---

### Parámetros body

| param     | descripción               |
| --------- | ------------------------- |
| name      | nombre del casino         |
| image_url | imagen del logo de casino |

### Ejemplo Body

```json
{
  "name": "Modificado",
  "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg"
}
```

---

Respuesta en caso de éxito:

```json
{
  "id": "6785eb30-7a39-43dc-8edc-08a6b31750fd",
  "name": "Modificado",
  "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
  "createdAt": "2023-07-01T01:11:25.376Z"
}
```

---

## GET `/casino/:id`

Endpoint encargado de traer un casino

### Parámetros param

| param | descripción              |
| ----- | ------------------------ |
| id    | identificador del casino |

### Ejemplo ruta

```
/casino/6785eb30-7a39-43dc-8edc-08a6b31750fd
```

---

Respuesta en caso de éxito:

```json
{
  "id": "6785eb30-7a39-43dc-8edc-08a6b31750fd",
  "name": "Modificado",
  "image_url": "https://static.vecteezy.com/system/resources/previews/001/008/560/original/casino-frame-label-falling-ribbons-casino-vector.jpg",
  "createdAt": "2023-07-01T01:11:25.376Z"
}
```

---

# FALTA MODIFICAR PARA QUE SEA BORRADO LOGICO!!!!
## DELETE `/casino/:id`

Endpoint encargado de eliminar el registro de un casino

### Parámetros param

| param | descripción              |
| ----- | ------------------------ |
| id    | identificador del casino |

### Ejemplo ruta

```
/casino/6785eb30-7a39-43dc-8edc-08a6b31750fd
```

---

Respuesta en caso de éxito:

```json
true
```

---