sudo service docker start;

docker container rm -f $(docker container ls -aq);

docker pull mongo;

docker run --name help_desk_mongo -p 17017:27017 -d mongo;
