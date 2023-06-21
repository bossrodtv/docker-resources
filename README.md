# Docker Resources

For local development use only. Instead of manually installing each of these applications **(Postgres, MySQL, MongoDB & etc)** you can just install **Docker Desktop** and provide a `docker-compose.yaml` for your tools.

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** 16.14.2
- Install **pnpm** 8.6.1
- Install **Docker Desktop**

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use # For MacOSX and Linux
nvm use $(cat .nvmrc) # For windows (Git Bash)
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

- Run and choose which resource you want to start/stop/build.
  - **up** - to start/run the resource.
  - **down** - to stop/remove the resource.
  - **build** - to build the resource.

```bash
pnpm dev
```
