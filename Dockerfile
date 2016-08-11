FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g grunt-cli karma bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc

COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/
COPY bower-local /usr/src/app/bower-local

RUN npm install
RUN bower install

# Bundle app source
COPY . /usr/src/app

RUN grunt

EXPOSE 3000

CMD [ "grunt", "serve" ]
