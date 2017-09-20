FROM node:6.11-stretch

RUN npm install -g cordova ionic

#RUN apk update && apk add git
#RUN apk update && apk add xvfb libxfont xorg-server chromium
# to test...
# /usr/bin/Xvfb :99 & #run Xvfb in background
# export DISPLAY=:99.0 #export the display environment var
# export CHROME_BIN=chromium-browser

# Android...
# Java
RUN apt-get update && apt-get install -y openjdk-8-jdk-headless

VOLUME /root/work
EXPOSE 8100
#ionic server
EXPOSE 35729 
#(live reload) 
EXPOSE 53703
# (logger)
