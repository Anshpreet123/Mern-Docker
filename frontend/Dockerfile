# Use the official Node.js image as the base image
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the Vite app
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build output from the build stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Nginx command to keep the service running
CMD ["nginx", "-g", "daemon off;"]
