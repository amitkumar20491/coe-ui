# coe-ui

1. Update env.list for environment variables.
For host machine studentService and school Service use host as 'host.docker.internal'
As node uses diffrent library for http and https communication , update protocol accordingly.
Default port is 8080 , if changes please also use same port in docker run.

2. To run locally , go in root directry and run 'npm start'

3. To Build Docker Image , go in root directory and run below command. 
docker build -t <user-name>/coe-ui:1.0.0 .

4. Docker Run 
docker run -p <forwaded-port>:8080 -d --env-file ./env.list <user-name>/coe-ui

5. logs
docker ps
fetch container id for <user-name>/coe-ui

docker logs <container-id>

6. Home page - http://host:port/

7. Health Check - http://host:port/health-check
