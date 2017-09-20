FROM node:6.11-wheezy

RUN npm install -g cordova ionic
#RUN apk update && apk add git
#RUN apk update && apk add xvfb libxfont xorg-server chromium
# to test...
# /usr/bin/Xvfb :99 & #run Xvfb in background
# export DISPLAY=:99.0 #export the display environment var
# export CHROME_BIN=chromium-browser

VOLUME /root/work
EXPOSE 8100
# karma testing
EXPOSE 9876
