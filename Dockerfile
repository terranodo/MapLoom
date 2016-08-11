FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install grunt-cli karma bower

# Bundle app source
COPY . /usr/src/app

RUN npm install
RUN bower install
RUN grunt

EXPOSE 9000

CMD [ "grunt", "serve" ]
