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
RUN apt-get install -y zip unzip
# gradle
RUN curl -s "https://get.sdkman.io" | bash
# source "/root/.sdkman/bin/sdkman-init.sh"
RUN /bin/bash -c 'source /root/.sdkman/bin/sdkman-init.sh; sdk install gradle 4.2'
# android
RUN mkdir /root/android && cd /root/android && wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip && unzip sdk-tools-linux-3859397.zip
#ENV ANDROID_HOME /root/android
RUN (echo 'y'; echo '') | /root/android/tools/bin/sdkmanager 'build-tools;26.0.1' 'platforms;android-26' 'extras;android;m2repository'
RUN /bin/bash -c 'echo "export ANDROID_HOME=/root/android" >> ~/.bashrc && echo "export PATH=\${PATH}:/root/android/platform-tools:/root/android/tools:/root/android/tools/bin" >> ~/.bashrc \
 && source /root/.sdkman/bin/sdkman-init.sh; sdk use gradle && echo "export PATH=\${PATH}:${GRADLE_HOME}/bin" >> ~/.bashrc'

# semantic player / dymo-core from source?!
RUN npm install -g typescript
# dymo-core dependency 'speaker', build-time dep?
RUN apt-get install -y libasound2-dev
RUN apt-get install -y vim

VOLUME /root/work
EXPOSE 8100
#ionic server
EXPOSE 35729 
#(live reload) 
EXPOSE 53703
# (logger)

ENTRYPOINT [ "/bin/bash" ]