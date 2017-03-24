# Typescript - Cure or Curse

This is a demo content of lecture.

## Setup

```bash
npm install
```

## Build

```bash
npm run build
```

## Run

```bash
npm start
```

## Docker support

### Image build

```bash
docker build -t <yourname>/node-app .
```

### Container run

```bash
docker run -d <yourname>/node-app
```

To be able to see logs run.

```bash
docker logs <container id>
```

Tested on:

* `node.js v7.7.04`,
* `win 8.1/10 x64`

additionally

* `docker 17.03.1-ce-rc1`
