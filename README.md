# Docker Resources

For local development use only. Instead of manually installing each of these applications **(Postgres, MySQL, MongoDB & etc)** you can just install **Docker Desktop** and provide a `docker-compose.yaml` for your tools.

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** ^18.16.1
- Install **pnpm** ^8.6.1
- Install **Docker Desktop**

---

- **(Required for MacOSX):** Execute this command to grant Husky the necessary permissions to run the pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use # For MacOSX and Linux
nvm use $(cat .nvmrc) # For Windows (Git Bash)
```

- Install dependencies.

```bash
pnpm i
```

---

| List of resources |
| :---------------- |
| mongodb           |
| mysql             |
| neo4j             |
| postgres          |
| redis             |

---

- Run and choose which resource you want to start or stop.
  - **up** - to start/run the resource.
  - **down** - to stop/remove the resource.

```bash
pnpm dev
```
