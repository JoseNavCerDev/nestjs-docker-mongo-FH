<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execution in Development

1. Clone the repository
2. Execute
```
yarn install
```

3. Install or to have Nest CLI installed
```
npm install -g @nestjs/cli
```

4. Start the database
```
docker-compose up -d
```

5. Clone the file __.env.template__, rename to __.env__ and
fill out the variables with your data.

6. Execute the application with the command:
```
yarn start:dev
```

6. Rebuild database with seed
```
http://localhost:3000/api/v2/seed
```

# Build production
1. Create __.env.prod__.
2. Fill the enviromental production variables.
3. Create the new image:
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## Stack used
* MongoDB
* Nestjs
