# GET /users/me

## Endpoint

GET /users/me

## Authentication

Bearer Token

## Response

```json
{
  "success": true,
  "result": {
    "roles": ["user", "retailer", "admin"],
    "userType": "natural",
    "status": 0,
    "trustLevel": [],
    "id": 45,
    "firstName": "محمد",
    "lastName": "غلامی",
    "nationalCode": null,
    "birthDate": null,
    "latestUpdateExcel": null,
    "userUpdateExcelId": null,
    "latestUpdateProducts": null,
    "lastVisit": "2026-07-01T08:22:22.731Z",
    "affiliateCode": null,
    "phone": "989027927890",
    "email": "user@example.com",
    "reasonChangeStatus": null,
    "iranianAuthStatus": false,
    "verifiedEmail": false,
    "statusStore": "OPEN",
    "subscriptionExpiresAt": "2024-12-01T10:56:04.429Z",
    "defaultRole": "user",
    "faceValidationStatus": null,
    "nationalIdCardStatus": null,
    "coins": "2700",
    "scores": "90",
    "defaultLangId": 2,
    "defaultCurrencyId": 3,
    "fileId": null,
    "file": null,
    "city": {
      "id": 296,
      "name": "بردخون",
      "locationType": "city"
    },
    "country": {
      "id": 3072,
      "name": "ایران",
      "currency": {
        "id": 80,
        "unit": "fiat",
        "name": "ریال ایران",
        "symbol": "IRR",
        "currencyPrecision": 2,
        "priority": 1,
        "status": "inactivate",
        "countryId": 3072
      }
    },
    "faceValidationPicture": null,
    "nationalIdCardPicture": null,
    "level": {
      "id": 1,
      "name": "برنزی",
      "scores": "100",
      "status": true,
      "createdAt": "2026-01-06T15:12:24.475Z",
      "updatedAt": "2026-01-06T15:12:24.475Z",
      "deletedAt": null,
      "file": {
        "id": 9,
        "key": "3616951a-fbf2-4039-9c1d-860a11c65d4c",
        "mimeType": "image/jpeg",
        "size": "11738",
        "link": "2024/10/20/3616951a-fbf2-4039-9c1d-860a11c65d4c",
        "type": "IMAGE",
        "createdAt": "2024-10-20T19:31:14.831Z",
        "updatedAt": "2026-06-01T10:25:31.205Z",
        "deletedAt": null
      }
    },
    "defaultLang": {
      "status": true,
      "isDefault": false,
      "id": 2,
      "name": "English",
      "code": "en",
      "flag": "🇬🇧",
      "direction": "ltr",
      "calendar": "Gregorian",
      "semaphore": null,
      "createdAt": "2025-12-29T08:57:19.423Z",
      "updatedAt": "2025-12-29T08:57:19.423Z",
      "deletedAt": null
    },
    "defaultCurrency": {
      "id": 3,
      "unit": "fiat",
      "name": "تومان",
      "symbol": "IRT",
      "slug": "irt",
      "currencyPrecision": 2,
      "priority": 1,
      "status": "active",
      "countryId": null,
      "logoId": null,
      "show": true,
      "createdAt": "2025-04-23T07:33:25.473Z",
      "updatedAt": null,
      "deletedAt": null
    }
  }
}
```
