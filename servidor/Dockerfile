FROM openjdk:11-jdk-slim
LABEL maintainer="erivelto@gmail.com"
VOLUME /tmp
EXPOSE 8085
ARG JAR_FILE=target/crudFuncionario-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} crud.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/crud.jar"]