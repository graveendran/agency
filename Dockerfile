FROM node:argon

#Create app directory
RUN mkdir -p app/


#Install app dependencies

#Bundle app source
COPY . app/

WORKDIR app/

RUN npm install

EXPOSE 8080
CMD [ "node", "index"]
