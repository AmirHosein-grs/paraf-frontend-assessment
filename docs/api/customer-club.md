# POST /customer-club/summary

## Endpoint

POST /customer-club/summary

## Authentication

Bearer Token

## Response

```json
{
  "success": true,
  "result": {
    "numberTasksCompleted": 3,
    "totalScoreMonthly": 0,
    "totalCoinMonthly": 0
  }
}
```

# POST /customer-club/summary-user-vitrin/{id}

## Endpoint

POST /customer-club/summary-user-vitrin/{id}

## Authentication

Bearer Token

## Response

```json
{
  "success": true,
  "result": {
    "numberTasksCompleted": 0,
    "totalScoreMonthly": 0
  }
}
```
