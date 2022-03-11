# HAWKING

- POC using elasticsearch, nodejs (Express) and React 
- Description: using elasticsearch to search location data by id, state or city.
- Node (Express)
- React (React)

- [HAWKING](#hawking)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Access](#access)
    - [Application](#application)

## Requirements

- [Docker](https://www.docker.com/get-started) (Windows)
- [Docker Compose](https://docs.docker.com/compose/install/) (Linux)

## Installation

### APP
- Clone this repository

```bash
$ git clone https://github.com/faxina-projects/hawking.git
```

- Access the project folder

```bash
$ cd hawking
```

- Build image and create containers

```bash
$ docker-compose up --build
```
### INSERT DATA TO ELASTICSEARCH
- Access the seed folder

```bash
$ cd elastic-seed
```

- Run seed

```bash
$  sh ./elastic-seed.sh
```

## Access

### Application

- App: http://localhost:3000
- Front: http://localhost:3001
- Elasticsearch: http://localhost:9200
