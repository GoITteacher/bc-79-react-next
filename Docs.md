# Simple Cookie-Based Auth Demo Server

This project is a minimal Express + MongoDB sample that shows how cookie-based
authentication works along with protected resources like **news posts**,
**tasks**, and **notes**. Every mutable endpoint is gated behind a JWT access
token, while refresh tokens are issued via an HttpOnly+SameSite=Strict cookie.

## Quick start

1. Copy `.env` from the example (if any) and fill in one of your MongoDB URIs
   plus the optional JWT secrets.
2. Run `npm install`.
3. Start in dev mode with `npm run dev` (Hot reload) or `npm run build` +
   `npm start`.

Cookies require HTTPS in production, so run locally over `http://localhost:3001`
and disable secure cookies by leaving `NODE_ENV` unset.

## Configuration

| Variable                   | Purpose                                           | Default              |
| -------------------------- | ------------------------------------------------- | -------------------- |
| `MONGODB_*`                | Database connection                               | See `.env`           |
| `ACCESS_TOKEN_SECRET`      | Secret used to sign short-lived JWT access tokens | `demo-access-secret` |
| `ACCESS_TOKEN_EXPIRES_IN`  | JWT lifespan (expressed as `15m`, `1h`, etc.)     | `15m`                |
| `REFRESH_TOKEN_MAX_AGE_MS` | Cookie lifespan for refresh tokens                | 1 week               |
| `PORT`                     | HTTP port                                         | `3001`               |

## Authentication overview

1. The client registers or logs in. The response body contains an `accessToken`
   (JWT) and `user` object, while a `refreshToken` cookie is issued.
2. For protected requests (`/news`, `/tasks`, `/notes`), the client attaches the
   `Authorization: Bearer <accessToken>` header.
3. When the access token expires, hit `POST /api/auth/refresh` (the cookie is
   sent automatically) to receive a new access token and refreshed cookie.
4. `POST /api/auth/logout` clears the refresh cookie + server-side token.

Access tokens are signed with `ACCESS_TOKEN_SECRET` and expire quickly; refresh
tokens are UUIDs stored in the user record and rotated on every refresh.

## API Reference

All endpoints are mounted under `/api` when running via Serverless; in
development they are direct Express routes.

---

### Auth (/auth)

#### `POST /auth/register`

Creates a new user.

- **Body**:
  `{ "email": string, "name": string, "password": string, "typeAccount"?: "freeUser" | "paidUser" | "agencyUser" }`
- **Response**: `201`
  `{ "accessToken": string, "user": { id, name, email, typeAccount } }`
- **Cookies**: `refreshToken`, `accessToken` (HttpOnly, SameSite=Strict)

#### `POST /auth/login`

Existing users get access + refresh tokens.

- **Body**: `{ "email": string, "password": string }`
- **Response**: `200` same as register.
- **Cookies**: `refreshToken`, `accessToken` (rotated on every login; HttpOnly)

#### `POST /auth/refresh`

Uses the `refreshToken` cookie to issue a fresh access token.

- **Response**: `200` `{ "accessToken": string, "user": { ... } }`
- **Cookies**: new `refreshToken`, new `accessToken`.

#### `POST /auth/logout`

Clears the refresh token server-side and removes the cookie.

- **Response**: `204`

#### `GET /auth/me`

Returns the currently authenticated user.

- **Headers**: `Authorization: Bearer <accessToken>`
- **Response**: `200` `{ "user": { ... } }`

---

### News (/news)

All news endpoints require the bearer token in the header.

#### `POST /news`

- **Body**:
  `{ topic, text, type: "updates"|"news"|"testimonials"|"video stories", typeAccount: "freeUser"|"paidUser"|"agencyUser" }`
- **Response**: `201` created news.
- The logged-in user ID is inferred from the token.

#### `GET /news`

- **Query**: pagination (`page`, `perPage`), `topic`, `type`, `typeAccount`,
  `userId`.
- **Response**: `200` `{ pagination data, news: [...] }`
- Returns items created by the authenticated user only.

#### `DELETE /news/:newsId`

- Removes your own news post.
- **Response**: `200` deleted document.

---

### Tasks (/tasks)

Protected by authentication.

#### `GET /tasks`

- **Response**: `200` `{ tasks: Task[] }`

#### `POST /tasks`

- **Body**:
  `{ "title": string, "description"?: string, "status"?: "todo"|"in-progress"|"done", "dueDate"?: ISOString }`
- **Response**: `201` `{ task }` The `userId` is always the current user.

#### `GET /tasks/:taskId`

- **Response**: `200` `{ task }`

#### `PATCH /tasks/:taskId`

- **Body**: only supplied fields are updated (`title`, `description`, `status`,
  `dueDate`).
- **Response**: `200` updated task data.

#### `DELETE /tasks/:taskId`

- **Response**: `204`

---

### Notes (/notes)

Protected resource for simple note-taking.

#### `GET /notes`

- **Response**: `200` `{ notes: Note[] }`

#### `POST /notes`

- **Body**:
  `{ "title": string, "content": string, "tags"?: string[], "archived"?: boolean }`
- **Response**: `201` `{ note }`

#### `GET /notes/:noteId`

- **Response**: `200` `{ note }`

#### `PATCH /notes/:noteId`

- **Body**: allow updating `title`, `content`, `tags`, `archived`.
- **Response**: `200` updated note.

#### `DELETE /notes/:noteId`

- **Response**: `204`

Both tasks and notes endpoints only operate on documents that belong to the
authenticated user.
