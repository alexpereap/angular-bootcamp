FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200/tcp
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]