# Docker Resources

For local development use only. Instead of manually installing each of these applications **(Postgres, MySQL, MongoDB & etc)** you can just install **Docker Desktop** and provide a `docker-compose.yaml` for your application and run/stop it in just one command.

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0
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
| mysql             |
| neo4j             |
| postgres          |
| redis             |

---

- Build container.

```bash
pnpm docker -r <resource_name> --build # Build without cache
pnpm docker -r <resource_name> --build --no-cache # Build with cache
```

- Run container.

```bash
pnpm docker -r <resource_name> --start # Run in foreground
pnpm docker -r <resource_name> --start -d # Run in background
```

- Shutdown container.

```bash
pnpm docker -r <resource_name> --stop # Stop without volumes
pnpm docker -r <resource_name> --stop -v # Stop with volumes
```

- Access the container.

```bash
docker exec -it <container_name> bash
```

```bash
docker logs <container_name>
```
