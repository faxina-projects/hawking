# HAWKING

- POC using elasticsearch, nodejs (Express) and React 
- Description: using elasticsearch to search location data by id, state or city.
- Node (Express)
- React (React)

- [HAWKING](#hawking)
  - [References](#references)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Access](#access)
    - [Application](#application)
  
### References
- https://betterprogramming.pub/your-first-elasticsearch-application-7db5ea74ef02
- https://henriquemauri.net/configurando-o-elasticsearch-e-kibana-no-docker-3f4679eb5feb/

## Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

### App
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
### Insert data to elasticsearch
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
