# NODE EXPRESS Demo using Mongodb ATLAS with mongoose driver
#### This demo is created using ACADEMIND tutorials and also added some more features on top of it.
| Nodejs | Expressjs | Mongodb ATLAS | Mongoose | Swagger UI | Nodemon | Jsonwebtokens
## Version: 1.0

### host: localhost:3000
### basePath: /api/v1


### /orders

#### GET
##### Summary:

Get Orders

##### Description:

It will return all orders

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

#### POST
##### Summary:

/Orders

##### Description:

Create new order

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |
| Body | body |  | Yes | [~1OrdersRequest](#~1ordersrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /products

#### GET
##### Summary:

/Products

##### Description:

return list of all products

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

#### POST
##### Summary:

/Products

##### Description:

Create new product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |
| name | formData |  | Yes | string |
| price | formData |  | Yes | double |
| productImage | formData |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /orders/5df780088887261da29f4d1f

#### DELETE
##### Summary:

/Orders

##### Description:

delete a order using order ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /products/5e0de8c3e921a20ef102ec03

#### DELETE
##### Summary:

/Products

##### Description:

delete a product using Product ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /orders/5df8b2ac059d19253f487ff1

#### GET
##### Summary:

/Orders

##### Description:

Get single order using Order ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /products/5dd53790c376035c794cbf3d

#### PATCH
##### Summary:

/Products

##### Description:

Patch existing product using Product ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |
| Body | body |  | Yes | [ [~1ProductsRequest](#~1productsrequest) ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /user/signup

#### POST
##### Summary:

/Signup

##### Description:

New user signup

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |
| Body | body |  | Yes | [~1SignupRequest](#~1signuprequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /user/login

#### POST
##### Summary:

/Login

##### Description:

login user using email and password

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |
| Body | body |  | Yes | [~1LoginRequest](#~1loginrequest) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### /user/5e14877c87a2ef118f3530f3

#### DELETE
##### Summary:

/Login

##### Description:

delete user using User ID

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| Authorization | header |  | No | string |
| Content-Type | header |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 |  |

### Models


#### /OrdersRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| productId | string |  | Yes |
| quantity | string |  | Yes |

#### /ProductsRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| propName | string |  | Yes |
| value | string |  | Yes |

#### /SignupRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | Yes |
| password | string |  | Yes |

#### /LoginRequest

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | Yes |
| password | string |  | Yes |
