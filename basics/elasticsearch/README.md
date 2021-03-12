## Getting to know elasticsearch

This section will be constantly updated to reflect the latest and the most important things we need to know about elasticsearch.

### TODO Items
- Setup Elasticsearch using docker
- Read CCR and document steps to configure it
- Explore Data Rollup feature (not GA)
- Explore Runtime fields (not GA)
- Explore Data Streams and CCR.
- Explore Audit Logging in elasticsearch.
- Explore Elasticsearch query language.
- Explore Data frame Analytics
- Explore document transform.

#### Portainer

- I will also be using a container orchestration tool named 'portainer' to manage docker containers running on my machine. You can download it from https://documentation.portainer.io/quickstart/?hsCtaTracking=cb3a059b-7f57-4333-a92f-b06202ef8690%7C4427d7bc-1ae8-4a30-812c-d30ee496008f
- You will need to install below tools before you can use portainer:
  - Docker
  - Yarn `brew install yarn`
  - Nodejs
  - Golang
  - wget `brew install wget`
  
- Portainer runs two main components as docker containers i.e. portainer-server and portainer agent.

- Setup portainer:
  - Create docker volume for portainer:
    - `docker volume create portainer_data`
  - Start portainer server container in daemon mode:
    - `docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce`
  - Verify if portainer server container is up or not:
    - `docker ps`:
      output:
      `CONTAINER ID        IMAGE                    COMMAND             CREATED             STATUS              PORTS                                            NAMES
      669ba2bda0f8        portainer/portainer-ce   "/portainer"        4 seconds ago       Up 3 seconds        0.0.0.0:8000->8000/tcp, 0.0.0.0:9000->9000/tcp   portainer`
  - Start portainer agent container:
    `docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent`
  - Verify if the container is up or not:
    - `docker ps
      CONTAINER ID        IMAGE                    COMMAND             CREATED             STATUS              PORTS                                            NAMES
      08f7c37ba030        portainer/agent          "./agent"           5 seconds ago       Up 4 seconds        0.0.0.0:9001->9001/tcp                           portainer_agent
      669ba2bda0f8        portainer/portainer-ce   "/portainer"        3 minutes ago       Up 3 minutes        0.0.0.0:8000->8000/tcp, 0.0.0.0:9000->9000/tcp   portainer`
  - Create admin account through portainer UI at http://localhost:9000/

#### Setup Elasticsearch using docker

For the purpose of getting started with elasticsearch quickly, I would be using docker-compose config provided by elastic

- docker-compose.yml from elastic's website: https://www.elastic.co/guide/en/elasticsearch/reference/7.11/docker.html

- Command to start elasticsearch using docker compose:
  - `docker-compose up`
  Note: While starting elasticsearch using docker-compose, you might see java.net.UnknownHostException: es01: Name or service not known. Refer to this GitHub issue https://github.com/elastic/elasticsearch/issues/51196 and increase your docker daemon memory allocation to at least 4 GB (2 GB is default).

- Verify elasticsearch instance by accessing http://localhost:9200/ from your browser.
