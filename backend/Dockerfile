# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the backend port
EXPOSE 5000

# Command to run the backend
CMD ["npm", "start"]
