FROM node:18
# Create app directory
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080
ENV VITE_WEBSOCKETS_URL=http://localhost:8081

EXPOSE 3000
EXPOSE 3010

CMD [ "npm", "run", "preview"]