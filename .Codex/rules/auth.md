# Authentification

- API login : `POST {environment.apiUrl}/login`
- Réponse login : `accessToken`, `user`
- `user` : `id`, `email`, `name`
- Token JWT :
  - Stockage runtime : signal `AuthService`
  - Persistance navigateur : `localStorage`
  - Clé : `cinetrack.accessToken`
- Requêtes HTTP :
  - Intercepteur fonctionnel
  - Header si token présent : `Authorization: Bearer <token>`
