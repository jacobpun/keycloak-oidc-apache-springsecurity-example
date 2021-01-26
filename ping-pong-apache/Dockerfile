FROM ubuntu:latest
MAINTAINER PK Jacob 

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=America/New_York
RUN apt-get update
RUN apt-get install -y tzdata
RUN apt-get install -y apache2
RUN apt-get install -y libapache2-mod-auth-openidc
RUN mkdir -p /var/lock/apache2
RUN mkdir -p /var/run/apache2

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_PID_FILE /var/run/apache2.pid
ENV APACHE_RUN_DIR /var/run/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_LOG_DIR /var/log/apache2
ENV LANG C
COPY ./000-default.conf /etc/apache2/sites-available
RUN a2enmod proxy_http
RUN a2enmod auth_openidc
RUN a2enmod headers
RUN mkdir -p /var/www/html/ping-pong
COPY ./temp/ping-pong-angular-client /var/www/html/ping-pong

CMD ["/usr/sbin/apache2","-D","FOREGROUND"]
EXPOSE 80
