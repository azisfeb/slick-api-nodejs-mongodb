# WEB SERVICE FOR SELLING ROCKET AND COMPONENTS

RESTful APU for selling rocket and the component

## Endpoint
|  Method  | Endpoint              | Description                 | Data                           |
|----------|-----------------------|-----------------------------|--------------------------------|
| GET      | api/products          | list of products            | [{}, {}, {}]                   |
| GET      | api/products/:id      | detail of product           | {}                             |
| POST     | api/products          | create new product          | {"info": ""}                   |
| PUT      | api/products/:id      | Update a product            | {"info": ""}                   |
| DELETE   | api/products/:id      | Delete a product            | {"info": ""}                   |