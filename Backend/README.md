# LAB CRUD - BACKEND
Backend pedagógico con Express, MySQL, bcrypt, JWT y roles `admin` / `cliente`.
## 1. Base de datos
Ejecuta `../sql/lab_crud.sql` en Mysql

## 2. Variable de entorno
Copia:
`.env.example` → `.env`

y completa las credenciales de MySQl y `JWT_SECRET` .

## 3. Instalar
```bash
npm install
```


## 4. Ejecutar
```bash
npm run dev
```
API: `http://localhost:3000`

## Rutas
Públicas:
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/health`

Protegidas:
- GET `/api/equipos`
- GET `/api/equipos/:id`
- POST `/api/equipos`
- PUT `/api/equipos/:id`
- DELETE `/api/equipos/:id` - solo `admin`

## FLUJO pedagógico
Registro → brcrypt.hash → MySQl → login → bcrypt.compare → JWT → middleware → autorización por rol → CRUD.