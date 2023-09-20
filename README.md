# REDTRON_API

API REST PARA LA APLICACION REDTRON

.ENV PARA IR PROBANDO:

PG_HOST=localhost
PG_PORT=5432
PG_USER=fede
PG_PASSWORD=...
PG_DATABASE=desasur
PORT=3001
JWT_SECRET=desasur2023
SALT=10
EMAIL=hugoschierano@gmail.com
EMAIL_PASSWORD=keummkqrhmplhkgv

MOCK_USERS_URL="https://my.api.mockaroo.com/redtron_users.json?key=784e5460"

---

Deploy de Base de Datos
DATABASE_URL= `postgresql://postgres:OrbSyrG0p1TCaF572U0C@containers-us-west-52.railway.app:7846/railway`

Deploy de api
`https://redtronapi-development.up.railway.app`

---

Para levantar el servidor en modo desarrollo correr:

```
npm run dev
```

Para recargar la base de datos de usuario correr el siguiente script:

```
npm run reset-users-db

```

Para recargar la base de datos de casinos correr el siguiente script:

```
npm run reset-casinos-db
```

Para levantar el servidor con la base de datos deploy

```
npm run db
```

---

# Indice:

- [Login User](./Docs/LoginUser.md)
- [User](./Docs/User.md)
- [ChangePassword](./Docs/ChangePassword.md)
- [Casino](./Docs/Casino.md)
- [UserCasino](./Docs/UserCasino.md)
- [CoinsMovements](./Docs/CoinsMovements.md)
- [Player](./Docs/Player.md)
- [Load](./Docs/Load.md)

---
