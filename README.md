<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <p align="center">An API built with NestJS to manage orders, customers, products, and order items using MongoDB as the database.</p>

## ✍️ Author

**Joaquin Orihuela**  
Versión: `0.0.1`  
Licencia: `UNLICENSED`

## Features

- Create, update, delete and list orders
- Add products to existing orders
- Orders store references to `OrderItems`, which in turn reference individual `Products`
- Populate references for easy access to customer and product information
- MongoDB integration using Mongoose
- Docker support for MongoDB instance
- Swagger documentation for API reference

## Tech Stack

- NestJS
- TypeScript
- MongoDB with Mongoose
- Docker (for MongoDB)
- Swagger for API documentation

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### Create Order
`POST /orders`
```json
{
  "customer": "customer_id",
  "products": [
    { "product": "product_id", "quantity": 2, "price": 100 }
  ]
}
```

### Add Product to Order
`POST /orders/add-product/:id`
```json
{
  "product": "product_id",
  "quantity": 2
}
```

### Update Order
`PATCH /orders/:id`

### Get All Orders
`GET /orders`

### Get Single Order
`GET /orders/:id`

### Delete Order
`DELETE /orders/:id`

## Environment Variables

Set the following environment variables in a `.env` file:
```env
MONGO_URI=mongodb://root:root@localhost:27017/?authSource=admin
```

## Docker Support

To spin up MongoDB using Docker:

```yaml
services:
  mongo:
    image: mongo:4.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root
    ports:
      - 27017:27017
    volumes:
      - ./mongo_data:/data/db
```

Run it with:
```bash
docker-compose up -d
```

## Swagger Documentation

The full API documentation is available at:

[http://localhost:3000/docs#/](http://localhost:3000/docs#/)

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).