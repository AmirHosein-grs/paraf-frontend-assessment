# GET /users/vitrin/all-user

## Endpoint

GET /users/vitrin/all-user

## Authentication

Bearer Token

## Response

```json
{
  "success": true,
  "result": [
    {
      "id": 130,
      "role": "retailer",
      "status": "ACTIVE",
      "companyPhones": ["8885555521"],
      "companyName": "فروشگاه زارع"
    },
    {
      "id": 128,
      "role": "user",
      "status": "ACTIVE",
      "companyPhones": null,
      "companyName": null
    }
  ]
}
```

# GET /users/vitrin/{id}

## Endpoint

GET /users/vitrin/{id}

## Authentication

Bearer Token

## Response

```json
{
  "success": true,
  "result": {
    "id": 130,
    "userId": 45,
    "role": "retailer",
    "typeGuild": "PARAF",
    "status": "ACTIVE",
    "unionApprovalStatus": "ACCEPTED",
    "parafApprovalStatus": null,
    "categories": [1, 80],
    "groupCategories": [48],
    "groupCategoryChildrens": null,
    "businessActivityId": null,
    "cities": [476, 483],
    "companyPhones": ["8885555521"],
    "companyName": "فروشگاه زارع",
    "companyAddress": "احمدآباد-رضا 1 - پلاک 2",
    "companyEmail": "mojtaba.zare.sany@gmail.com",
    "aboutUs": null,
    "keywords": null,
    "lat": "36.29442222803476",
    "long": "59.57221627235413",
    "logoId": 246,
    "guildId": null,
    "guildName": null,
    "businessLicenseId": 247,
    "businessLicenseStatus": null,
    "authenticatedVitrin": false,
    "latestUpdateProducts": null,
    "showData": true,
    "createdAt": "2024-11-24T07:38:37.015Z",
    "updatedAt": "2026-07-07T14:23:59.083Z",
    "daysOfWeek": {},
    "startWorkTime": "08:00:00",
    "endWorkTime": "16:00:00",
    "postalCode": null,
    "trademarkId": null,
    "trademarkStatus": null,
    "isGoldenVerified": true,
    "scores": "150",
    "logo": {
      "id": 246,
      "key": "15c0f41c-f562-4fd8-878f-35ebe889bdd0",
      "mimeType": "image/jpeg",
      "size": "11199",
      "link": "2024/11/24/15c0f41c-f562-4fd8-878f-35ebe889bdd0",
      "type": "IMAGE",
      "createdAt": "2024-11-24T07:38:36.768Z",
      "updatedAt": "2026-06-01T10:25:31.205Z",
      "deletedAt": null
    },
    "businessLicense": {
      "id": 247,
      "key": "2a021493-790b-4629-acd3-f3c9e13582b0",
      "mimeType": "image/jpeg",
      "size": "34164",
      "link": "2024/11/24/2a021493-790b-4629-acd3-f3c9e13582b0",
      "type": "IMAGE",
      "createdAt": "2024-11-24T07:38:36.987Z",
      "updatedAt": "2026-06-01T10:25:31.205Z",
      "deletedAt": null
    },
    "guild": null,
    "user": {
      "roles": [],
      "userType": "natural",
      "status": 0,
      "trustLevel": [],
      "firstName": "محمد",
      "lastName": "غلامی",
      "phone": "989027927890",
      "cityId": 296,
      "countryId": 3072,
      "scores": "90",
      "file": null,
      "city": {
        "id": 296,
        "name": "بردخون",
        "locationType": "city"
      },
      "country": {
        "id": 3072,
        "name": "ایران",
        "locationType": "country"
      },
      "citiesRow": [
        {
          "id": 296,
          "name": "بردخون",
          "locationType": "city"
        }
      ]
    },
    "vitrinCover": null,
    "level": {
      "id": 2,
      "name": "نقره ای ",
      "scores": "200",
      "status": true,
      "createdAt": "2026-01-06T15:12:51.125Z",
      "updatedAt": "2026-01-06T15:12:51.125Z",
      "deletedAt": null,
      "file": {
        "id": 10,
        "key": "e47958a4-fc58-4e9c-b132-694536322ba5",
        "mimeType": "image/jpeg",
        "size": "11738",
        "link": "2024/10/20/e47958a4-fc58-4e9c-b132-694536322ba5",
        "type": "IMAGE",
        "createdAt": "2024-10-20T19:31:15.519Z",
        "updatedAt": "2026-06-01T10:25:31.205Z",
        "deletedAt": null
      }
    },
    "businessActivity": null,
    "categoriesRow": [
      {
        "id": 80,
        "type": "PRODUCT",
        "isRequire": false,
        "removeBackgroundImage": true,
        "displayMegaMenu": false,
        "class": null,
        "name": "لپتاپ",
        "isActive": true,
        "priority": 1,
        "parentId": 3,
        "fileId": null,
        "reservation": false,
        "iconName": null,
        "file": null
      },
      {
        "id": 1,
        "type": "PRODUCT",
        "isRequire": false,
        "removeBackgroundImage": true,
        "displayMegaMenu": false,
        "class": "PRODUCE",
        "name": "موبایل ",
        "isActive": true,
        "priority": 1,
        "parentId": 639,
        "fileId": null,
        "reservation": false,
        "iconName": null,
        "file": null
      }
    ],
    "citiesRow": [
      {
        "id": 476,
        "name": "مشهد",
        "locationType": "city"
      },
      {
        "id": 483,
        "name": "نیشابور",
        "locationType": "city"
      }
    ],
    "groupCategoriesRow": [
      {
        "id": 48,
        "categoryId": null,
        "roles": [],
        "isRequire": true,
        "name": "بازرگانی موبایل",
        "isActive": true,
        "priority": 1,
        "parentId": 13,
        "fileId": null,
        "file": null
      }
    ],
    "fieldOfActivity": {
      "id": 13,
      "categoryId": null,
      "roles": [],
      "isRequire": true,
      "name": "کالا و خدمات دیجیتال",
      "isActive": true,
      "priority": 3,
      "parentId": null,
      "fileId": null,
      "file": null
    }
  }
}
```

{
"success": true,
"result": {
"id": 128,
"userId": 45,
"role": "user",
"typeGuild": null,
"status": "active",
"unionApprovalStatus": "PENDING",
"parafApprovalStatus": null,
"categories": null,
"groupCategories": null,
"groupCategoryChildrens": null,
"businessActivityId": null,
"cities": null,
"companyPhones": null,
"companyName": null,
"companyAddress": null,
"companyEmail": null,
"aboutUs": null,
"keywords": null,
"lat": null,
"long": null,
"logoId": null,
"guildId": null,
"guildName": null,
"businessLicenseId": null,
"businessLicenseStatus": null,
"authenticatedVitrin": false,
"latestUpdateProducts": null,
"showData": true,
"createdAt": "2024-12-01T10:56:04.429Z",
"updatedAt": null,
"coverId": null,
"daysOfWeek": {},
"startWorkTime": "08:00:00",
"endWorkTime": "16:00:00",
"postalCode": null,
"trademarkId": null,
"trademarkStatus": null,
"isGoldenVerified": true,
"scores": "0",
"logo": null,
"businessLicense": null,
"guild": null,
"user": {
"roles": [],
"userType": "natural",
"status": 0,
"trustLevel": [],
"firstName": "محمد",
"lastName": "غلامی",
"phone": "989027927890",
"cityId": 296,
"countryId": 3072,
"scores": "90",
"file": null,
"city": {
"id": 296,
"name": "بردخون",
"locationType": "city"
},
"country": {
"id": 3072,
"name": "ایران",
"locationType": "country"
},
"citiesRow": [
{
"id": 296,
"name": "بردخون",
"locationType": "city"
}
]
},
"cover": null,
"level": null,
"businessActivity": null,
"categoriesRow": [],
"citiesRow": []
}
}
