# Use the official Node.js base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

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