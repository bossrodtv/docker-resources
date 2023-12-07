# Docker Resources

For local development use only. Instead of manually installing each of these applications **(Postgres, MySQL, MongoDB & etc)** you can just install **Docker Desktop** and provide a `docker-compose.yaml` for your tools.

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** version (check the version in `.nvmrc`)
- Install **pnpm** version (check the version in package.json: `packageManager`)
- Install **Docker Desktop**

---

- **(Required for MacOSX):** Execute this command to grant Husky the necessary permissions to run the pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
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

## Usage

- Start the docker container.

```bash
pnpm start
```

- Stop the docker container.

```bash
pnpm stop
```
