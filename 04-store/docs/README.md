## Product-Store API Documentation
This documentation provides details about the endpoints available in the Product-Store Postman Collection. The APIs allows you to interact with product-related information.

## Base URL
- All API endpoints are relative to the base URL: http://localhost:5000
- You can configure it according to your requirements in the collection environment variable storage.

## Endpoints
### 1. App Info
Description: Get information about the application.

Endpoint
```bash
GET /api/healthCheck
```

Example
```bash
curl http://localhost:5000/api/healthCheck
```


### 2. Get All Products
Description: Get a list of products based on various filters.

Endpoint
```bash
GET /api/v1/products
```

Query Parameters
| Property | Description | Type | Boolean |
| -------- | -------- | -------- | -------- |
| `featured` | Filter the result based on featured property | Boolean | `?featured=true`, `?featured=false` |
| `company` | Filter the result based on company | Enum - [Laptop, Mobile, Microphone, Router, Television] | `?company=Laptop`, `?company=Router` |
| `name` | Search by character/string | String | `?name=a`, `?name=dell` |
| `sort` | Sort the result based on properties | String | `?sort=price`, `?sort=-price`, `?sort=name,-price"` |
| `fields` | Used to only get certain fields from the result | String | `?fields=name`, `?fields=name,price`, `?fields=name,price,createdAt` |
| `limit` | Maxium number of items shown in result-set (default is 10) | Integer | `?limit=5` |
| `page` | Items shown based on page number (default is 10 items per page) | Integer | `?page=1`, `?page=2` |
| `numericFilter` | Numeric conditional filters on integer based properties | String | `?numericFilter=price>50`, `?numericFilter=price>=50,rating<4` |

Example
```bash
curl http://localhost:5000/api/v1/products?featured=true&company=Mobile
curl http://localhost:5000/api/v1/products?fields=name,price,company&limit=8
curl http://localhost:5000/api/v1/products?numericFilter=price<50&fields=name,price&sort=-price
```

### 3. Get All Products - Static
Description: Get static product information. This endpoint is only used for manual operation.

Endpoint
```bash
GET /api/v1/products/static
```
