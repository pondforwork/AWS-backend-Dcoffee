# Use a Node.js image for building the backend app
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the rest of the backend source code
COPY . .

RUN npm install


# Rebuild bcrypt to match the container's architecture
# RUN npm rebuild bcrypt --build-from-source

# Expose backend port (e.g., 3000 for NestJS)
EXPOSE 3000

# Start the backend server
CMD ["npm", "run", "start:dev"]
