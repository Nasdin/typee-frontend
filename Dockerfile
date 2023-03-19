# Use the official Node.js base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

ARG API_BASE_URL
ENV REACT_APP_API_BASE_URL=${API_BASE_URL}


ARG REACT_APP_FIREBASE_API_KEY
ENV REACT_APP_FIREBASE_API_KEY=$REACT_APP_FIREBASE_API_KEY

ARG REACT_APP_FIREBASE_AUTH_DOMAIN
ENV REACT_APP_FIREBASE_AUTH_DOMAIN=$REACT_APP_FIREBASE_AUTH_DOMAIN

ARG REACT_APP_FIREBASE_PROJECT_ID
ENV REACT_APP_FIREBASE_PROJECT_ID=$REACT_APP_FIREBASE_PROJECT_ID

ARG REACT_APP_FIREBASE_STORAGE_BUCKET
ENV REACT_APP_FIREBASE_STORAGE_BUCKET=$REACT_APP_FIREBASE_STORAGE_BUCKET

ARG REACT_APP_FIREBASE_MESSAGING_SENDER_ID
ENV REACT_APP_FIREBASE_MESSAGING_SENDER_ID=$REACT_APP_FIREBASE_MESSAGING_SENDER_ID

ARG REACT_APP_FIREBASE_APP_ID
ENV REACT_APP_FIREBASE_APP_ID=$REACT_APP_FIREBASE_APP_ID

# Build the web app
RUN npm run build-web

# Use an Nginx image to serve the web app
FROM nginx:stable-alpine

# Copy the build output to Nginx's root directory
COPY --from=0 /app/web-build /usr/share/nginx/html

# Use a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 80

CMD ["npm", "start"]