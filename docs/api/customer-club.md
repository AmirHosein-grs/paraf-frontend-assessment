# GET /customer-club/summary

## Endpoint

GET /customer-club/summary

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

# GET /customer-club/summary-user-vitrin/{id}

## Endpoint

GET /customer-club/summary-user-vitrin/{id}

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
