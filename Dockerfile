FROM  node:10

# Stablish the working directory and cd into it
WORKDIR /usr/src/app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the source code
COPY . . 

#Expose port
EXPOSE 8080

#Run this thing!
CMD ["npm", "start"]   