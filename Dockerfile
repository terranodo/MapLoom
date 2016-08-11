FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g grunt-cli karma bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc

COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN bower install
RUN grunt

EXPOSE 3000

CMD [ "grunt", "serve" ]
