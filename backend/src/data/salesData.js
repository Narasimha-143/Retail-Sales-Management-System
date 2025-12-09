
const salesData = [
  {
    "customerId": "CUST-40823",
    "productId": "PROD-8721",
    "quantity": 5,
    "pricePerUnit": 4268,
    "discountPercentage": 12,
    "totalAmount": 21340,
    "finalAmount": 18779.2
  },
  {
    "customerId": "CUST-79592",
    "productId": "PROD-5451",
    "quantity": 5,
    "pricePerUnit": 4626,
    "discountPercentage": 28,
    "totalAmount": 23130,
    "finalAmount": 16653.6
  },
  {
    "customerId": "CUST-53317",
    "productId": "PROD-8448",
    "quantity": 3,
    "pricePerUnit": 575,
    "discountPercentage": 43,
    "totalAmount": 1725,
    "finalAmount": 983.25
  },
  {
    "customerId": "CUST-13864",
    "productId": "PROD-5915",
    "quantity": 1,
    "pricePerUnit": 2538,
    "discountPercentage": 26,
    "totalAmount": 2538,
    "finalAmount": 1878.12
  },
  {
    "customerId": "CUST-98319",
    "productId": "PROD-5961",
    "quantity": 4,
    "pricePerUnit": 4890,
    "discountPercentage": 44,
    "totalAmount": 19560,
    "finalAmount": 10953.6
  },
  {
    "customerId": "CUST-53321",
    "productId": "PROD-9434",
    "quantity": 4,
    "pricePerUnit": 1103,
    "discountPercentage": 12,
    "totalAmount": 4412,
    "finalAmount": 3882.56
  },
  {
    "customerId": "CUST-76213",
    "productId": "PROD-2486",
    "quantity": 1,
    "pricePerUnit": 4981,
    "discountPercentage": 17,
    "totalAmount": 4981,
    "finalAmount": 4134.23
  },
  {
    "customerId": "CUST-10839",
    "productId": "PROD-9154",
    "quantity": 1,
    "pricePerUnit": 671,
    "discountPercentage": 45,
    "totalAmount": 671,
    "finalAmount": 369.05
  },
  {
    "customerId": "CUST-43872",
    "productId": "PROD-7475",
    "quantity": 3,
    "pricePerUnit": 2720,
    "discountPercentage": 45,
    "totalAmount": 8160,
    "finalAmount": 4488
  },
  {
    "customerId": "CUST-66880",
    "productId": "PROD-2390",
    "quantity": 5,
    "pricePerUnit": 1787,
    "discountPercentage": 30,
    "totalAmount": 8935,
    "finalAmount": 6254.5
  },
  {
    "customerId": "CUST-64912",
    "productId": "PROD-7692",
    "quantity": 1,
    "pricePerUnit": 4707,
    "discountPercentage": 2,
    "totalAmount": 4707,
    "finalAmount": 4612.86
  },
  {
    "customerId": "CUST-58160",
    "productId": "PROD-3174",
    "quantity": 3,
    "pricePerUnit": 2749,
    "discountPercentage": 21,
    "totalAmount": 8247,
    "finalAmount": 6515.13
  },
  {
    "customerId": "CUST-26938",
    "productId": "PROD-8823",
    "quantity": 5,
    "pricePerUnit": 1223,
    "discountPercentage": 9,
    "totalAmount": 6115,
    "finalAmount": 5564.65
  },
  {
    "customerId": "CUST-23645",
    "productId": "PROD-6571",
    "quantity": 1,
    "pricePerUnit": 2601,
    "discountPercentage": 13,
    "totalAmount": 2601,
    "finalAmount": 2262.87
  },
  {
    "customerId": "CUST-56533",
    "productId": "PROD-7533",
    "quantity": 5,
    "pricePerUnit": 4779,
    "discountPercentage": 48,
    "totalAmount": 23895,
    "finalAmount": 12425.4
  },
  {
    "customerId": "CUST-39007",
    "productId": "PROD-3386",
    "quantity": 3,
    "pricePerUnit": 861,
    "discountPercentage": 50,
    "totalAmount": 2583,
    "finalAmount": 1291.5
  },
  {
    "customerId": "CUST-58667",
    "productId": "PROD-4773",
    "quantity": 5,
    "pricePerUnit": 4376,
    "discountPercentage": 16,
    "totalAmount": 21880,
    "finalAmount": 18379.2
  },
  {
    "customerId": "CUST-28378",
    "productId": "PROD-7079",
    "quantity": 2,
    "pricePerUnit": 3091,
    "discountPercentage": 34,
    "totalAmount": 6182,
    "finalAmount": 4080.12
  },
  {
    "customerId": "CUST-81808",
    "productId": "PROD-5761",
    "quantity": 4,
    "pricePerUnit": 320,
    "discountPercentage": 2,
    "totalAmount": 1280,
    "finalAmount": 1254.4
  },
  {
    "customerId": "CUST-40371",
    "productId": "PROD-9556",
    "quantity": 4,
    "pricePerUnit": 2416,
    "discountPercentage": 30,
    "totalAmount": 9664,
    "finalAmount": 6764.8
  },
  {
    "customerId": "CUST-38431",
    "productId": "PROD-7348",
    "quantity": 5,
    "pricePerUnit": 4642,
    "discountPercentage": 31,
    "totalAmount": 23210,
    "finalAmount": 16014.9
  },
  {
    "customerId": "CUST-69462",
    "productId": "PROD-4354",
    "quantity": 2,
    "pricePerUnit": 2760,
    "discountPercentage": 2,
    "totalAmount": 5520,
    "finalAmount": 5409.6
  },
  {
    "customerId": "CUST-52509",
    "productId": "PROD-3744",
    "quantity": 4,
    "pricePerUnit": 3966,
    "discountPercentage": 8,
    "totalAmount": 15864,
    "finalAmount": 14594.88
  },
  {
    "customerId": "CUST-22154",
    "productId": "PROD-6544",
    "quantity": 2,
    "pricePerUnit": 2266,
    "discountPercentage": 31,
    "totalAmount": 4532,
    "finalAmount": 3127.08
  },
  {
    "customerId": "CUST-10587",
    "productId": "PROD-5173",
    "quantity": 4,
    "pricePerUnit": 1951,
    "discountPercentage": 11,
    "totalAmount": 7804,
    "finalAmount": 6945.56
  },
  {
    "customerId": "CUST-73216",
    "productId": "PROD-4535",
    "quantity": 4,
    "pricePerUnit": 1063,
    "discountPercentage": 21,
    "totalAmount": 4252,
    "finalAmount": 3359.08
  },
  {
    "customerId": "CUST-34297",
    "productId": "PROD-2257",
    "quantity": 3,
    "pricePerUnit": 1514,
    "discountPercentage": 0,
    "totalAmount": 4542,
    "finalAmount": 4542
  },
  {
    "customerId": "CUST-99205",
    "productId": "PROD-7683",
    "quantity": 1,
    "pricePerUnit": 3369,
    "discountPercentage": 28,
    "totalAmount": 3369,
    "finalAmount": 2425.68
  },
  {
    "customerId": "CUST-46465",
    "productId": "PROD-5032",
    "quantity": 3,
    "pricePerUnit": 305,
    "discountPercentage": 24,
    "totalAmount": 915,
    "finalAmount": 695.4
  },
  {
    "customerId": "CUST-25581",
    "productId": "PROD-8510",
    "quantity": 2,
    "pricePerUnit": 4071,
    "discountPercentage": 1,
    "totalAmount": 8142,
    "finalAmount": 8060.58
  },
  {
    "customerId": "CUST-60519",
    "productId": "PROD-7925",
    "quantity": 1,
    "pricePerUnit": 2737,
    "discountPercentage": 20,
    "totalAmount": 2737,
    "finalAmount": 2189.6
  },
  {
    "customerId": "CUST-21198",
    "productId": "PROD-6272",
    "quantity": 2,
    "pricePerUnit": 2258,
    "discountPercentage": 25,
    "totalAmount": 4516,
    "finalAmount": 3387
  },
  {
    "customerId": "CUST-85127",
    "productId": "PROD-8669",
    "quantity": 3,
    "pricePerUnit": 2001,
    "discountPercentage": 30,
    "totalAmount": 6003,
    "finalAmount": 4202.1
  },
  {
    "customerId": "CUST-30412",
    "productId": "PROD-5466",
    "quantity": 3,
    "pricePerUnit": 1428,
    "discountPercentage": 20,
    "totalAmount": 4284,
    "finalAmount": 3427.2
  },
  {
    "customerId": "CUST-71052",
    "productId": "PROD-9137",
    "quantity": 1,
    "pricePerUnit": 2419,
    "discountPercentage": 35,
    "totalAmount": 2419,
    "finalAmount": 1572.35
  },
  {
    "customerId": "CUST-10009",
    "productId": "PROD-5418",
    "quantity": 1,
    "pricePerUnit": 338,
    "discountPercentage": 29,
    "totalAmount": 338,
    "finalAmount": 239.98
  },
  {
    "customerId": "CUST-32738",
    "productId": "PROD-5816",
    "quantity": 3,
    "pricePerUnit": 2410,
    "discountPercentage": 22,
    "totalAmount": 7230,
    "finalAmount": 5639.4
  },
  {
    "customerId": "CUST-32974",
    "productId": "PROD-3210",
    "quantity": 1,
    "pricePerUnit": 4733,
    "discountPercentage": 36,
    "totalAmount": 4733,
    "finalAmount": 3029.12
  },
  {
    "customerId": "CUST-96540",
    "productId": "PROD-1745",
    "quantity": 1,
    "pricePerUnit": 3889,
    "discountPercentage": 0,
    "totalAmount": 3889,
    "finalAmount": 3889
  },
  {
    "customerId": "CUST-99318",
    "productId": "PROD-7140",
    "quantity": 5,
    "pricePerUnit": 4542,
    "discountPercentage": 6,
    "totalAmount": 22710,
    "finalAmount": 21347.4
  },
  {
    "customerId": "CUST-70298",
    "productId": "PROD-7359",
    "quantity": 4,
    "pricePerUnit": 3984,
    "discountPercentage": 24,
    "totalAmount": 15936,
    "finalAmount": 12111.36
  },
  {
    "customerId": "CUST-81320",
    "productId": "PROD-4571",
    "quantity": 4,
    "pricePerUnit": 4077,
    "discountPercentage": 4,
    "totalAmount": 16308,
    "finalAmount": 15655.68
  },
  {
    "customerId": "CUST-82389",
    "productId": "PROD-7406",
    "quantity": 3,
    "pricePerUnit": 2454,
    "discountPercentage": 10,
    "totalAmount": 7362,
    "finalAmount": 6625.8
  },
  {
    "customerId": "CUST-69171",
    "productId": "PROD-2255",
    "quantity": 3,
    "pricePerUnit": 4702,
    "discountPercentage": 34,
    "totalAmount": 14106,
    "finalAmount": 9309.96
  },
  {
    "customerId": "CUST-49004",
    "productId": "PROD-2579",
    "quantity": 5,
    "pricePerUnit": 2528,
    "discountPercentage": 11,
    "totalAmount": 12640,
    "finalAmount": 11249.6
  },
  {
    "customerId": "CUST-92264",
    "productId": "PROD-1775",
    "quantity": 2,
    "pricePerUnit": 248,
    "discountPercentage": 24,
    "totalAmount": 496,
    "finalAmount": 376.96
  },
  {
    "customerId": "CUST-71546",
    "productId": "PROD-7195",
    "quantity": 2,
    "pricePerUnit": 1679,
    "discountPercentage": 14,
    "totalAmount": 3358,
    "finalAmount": 2887.88
  },
  {
    "customerId": "CUST-56241",
    "productId": "PROD-7136",
    "quantity": 2,
    "pricePerUnit": 3431,
    "discountPercentage": 14,
    "totalAmount": 6862,
    "finalAmount": 5901.32
  },
  {
    "customerId": "CUST-80966",
    "productId": "PROD-9309",
    "quantity": 4,
    "pricePerUnit": 3248,
    "discountPercentage": 31,
    "totalAmount": 12992,
    "finalAmount": 8964.48
  },
  {
    "customerId": "CUST-66475",
    "productId": "PROD-6315",
    "quantity": 4,
    "pricePerUnit": 3056,
    "discountPercentage": 5,
    "totalAmount": 12224,
    "finalAmount": 11612.8
  },
  {
    "customerId": "CUST-67622",
    "productId": "PROD-8043",
    "quantity": 1,
    "pricePerUnit": 2216,
    "discountPercentage": 16,
    "totalAmount": 2216,
    "finalAmount": 1861.44
  },
  {
    "customerId": "CUST-69388",
    "productId": "PROD-1745",
    "quantity": 3,
    "pricePerUnit": 4970,
    "discountPercentage": 15,
    "totalAmount": 14910,
    "finalAmount": 12673.5
  },
  {
    "customerId": "CUST-39359",
    "productId": "PROD-5547",
    "quantity": 5,
    "pricePerUnit": 1522,
    "discountPercentage": 24,
    "totalAmount": 7610,
    "finalAmount": 5783.6
  },
  {
    "customerId": "CUST-96739",
    "productId": "PROD-5772",
    "quantity": 4,
    "pricePerUnit": 3512,
    "discountPercentage": 21,
    "totalAmount": 14048,
    "finalAmount": 11097.92
  },
  {
    "customerId": "CUST-20420",
    "productId": "PROD-8625",
    "quantity": 2,
    "pricePerUnit": 3970,
    "discountPercentage": 48,
    "totalAmount": 7940,
    "finalAmount": 4128.8
  },
  {
    "customerId": "CUST-50854",
    "productId": "PROD-4665",
    "quantity": 1,
    "pricePerUnit": 3258,
    "discountPercentage": 24,
    "totalAmount": 3258,
    "finalAmount": 2476.08
  },
  {
    "customerId": "CUST-24057",
    "productId": "PROD-1329",
    "quantity": 4,
    "pricePerUnit": 3579,
    "discountPercentage": 33,
    "totalAmount": 14316,
    "finalAmount": 9591.72
  },
  {
    "customerId": "CUST-47379",
    "productId": "PROD-7598",
    "quantity": 1,
    "pricePerUnit": 4361,
    "discountPercentage": 46,
    "totalAmount": 4361,
    "finalAmount": 2354.94
  },
  {
    "customerId": "CUST-28339",
    "productId": "PROD-6368",
    "quantity": 4,
    "pricePerUnit": 2665,
    "discountPercentage": 24,
    "totalAmount": 10660,
    "finalAmount": 8101.6
  },
  {
    "customerId": "CUST-96946",
    "productId": "PROD-2810",
    "quantity": 4,
    "pricePerUnit": 391,
    "discountPercentage": 13,
    "totalAmount": 1564,
    "finalAmount": 1360.68
  },
  {
    "customerId": "CUST-14639",
    "productId": "PROD-1058",
    "quantity": 4,
    "pricePerUnit": 4295,
    "discountPercentage": 26,
    "totalAmount": 17180,
    "finalAmount": 12713.2
  },
  {
    "customerId": "CUST-51819",
    "productId": "PROD-3673",
    "quantity": 4,
    "pricePerUnit": 2382,
    "discountPercentage": 28,
    "totalAmount": 9528,
    "finalAmount": 6860.16
  },
  {
    "customerId": "CUST-16498",
    "productId": "PROD-3658",
    "quantity": 3,
    "pricePerUnit": 1371,
    "discountPercentage": 42,
    "totalAmount": 4113,
    "finalAmount": 2385.54
  },
  {
    "customerId": "CUST-87689",
    "productId": "PROD-1216",
    "quantity": 4,
    "pricePerUnit": 1839,
    "discountPercentage": 37,
    "totalAmount": 7356,
    "finalAmount": 4634.28
  },
  {
    "customerId": "CUST-49862",
    "productId": "PROD-8341",
    "quantity": 3,
    "pricePerUnit": 2147,
    "discountPercentage": 13,
    "totalAmount": 6441,
    "finalAmount": 5603.67
  },
  {
    "customerId": "CUST-53434",
    "productId": "PROD-2414",
    "quantity": 3,
    "pricePerUnit": 4928,
    "discountPercentage": 37,
    "totalAmount": 14784,
    "finalAmount": 9313.92
  },
  {
    "customerId": "CUST-42411",
    "productId": "PROD-8937",
    "quantity": 5,
    "pricePerUnit": 3311,
    "discountPercentage": 2,
    "totalAmount": 16555,
    "finalAmount": 16223.9
  },
  {
    "customerId": "CUST-24941",
    "productId": "PROD-1168",
    "quantity": 1,
    "pricePerUnit": 2766,
    "discountPercentage": 0,
    "totalAmount": 2766,
    "finalAmount": 2766
  },
  {
    "customerId": "CUST-50069",
    "productId": "PROD-7493",
    "quantity": 4,
    "pricePerUnit": 1385,
    "discountPercentage": 46,
    "totalAmount": 5540,
    "finalAmount": 2991.6
  },
  {
    "customerId": "CUST-19767",
    "productId": "PROD-8965",
    "quantity": 5,
    "pricePerUnit": 1457,
    "discountPercentage": 12,
    "totalAmount": 7285,
    "finalAmount": 6410.8
  },
  {
    "customerId": "CUST-19808",
    "productId": "PROD-3685",
    "quantity": 2,
    "pricePerUnit": 3002,
    "discountPercentage": 49,
    "totalAmount": 6004,
    "finalAmount": 3062.04
  },
  {
    "customerId": "CUST-77962",
    "productId": "PROD-6278",
    "quantity": 2,
    "pricePerUnit": 3488,
    "discountPercentage": 29,
    "totalAmount": 6976,
    "finalAmount": 4952.96
  },
  {
    "customerId": "CUST-89397",
    "productId": "PROD-5090",
    "quantity": 4,
    "pricePerUnit": 1240,
    "discountPercentage": 18,
    "totalAmount": 4960,
    "finalAmount": 4067.2
  },
  {
    "customerId": "CUST-77493",
    "productId": "PROD-9043",
    "quantity": 2,
    "pricePerUnit": 122,
    "discountPercentage": 5,
    "totalAmount": 244,
    "finalAmount": 231.8
  },
  {
    "customerId": "CUST-36012",
    "productId": "PROD-3853",
    "quantity": 3,
    "pricePerUnit": 805,
    "discountPercentage": 18,
    "totalAmount": 2415,
    "finalAmount": 1980.3
  },
  {
    "customerId": "CUST-22740",
    "productId": "PROD-1463",
    "quantity": 2,
    "pricePerUnit": 2051,
    "discountPercentage": 42,
    "totalAmount": 4102,
    "finalAmount": 2379.16
  },
  {
    "customerId": "CUST-38313",
    "productId": "PROD-8126",
    "quantity": 5,
    "pricePerUnit": 2902,
    "discountPercentage": 6,
    "totalAmount": 14510,
    "finalAmount": 13639.4
  },
  {
    "customerId": "CUST-78720",
    "productId": "PROD-9758",
    "quantity": 5,
    "pricePerUnit": 4951,
    "discountPercentage": 49,
    "totalAmount": 24755,
    "finalAmount": 12625.05
  },
  {
    "customerId": "CUST-52925",
    "productId": "PROD-7948",
    "quantity": 4,
    "pricePerUnit": 4420,
    "discountPercentage": 17,
    "totalAmount": 17680,
    "finalAmount": 14674.4
  },
  {
    "customerId": "CUST-22522",
    "productId": "PROD-8364",
    "quantity": 2,
    "pricePerUnit": 1378,
    "discountPercentage": 12,
    "totalAmount": 2756,
    "finalAmount": 2425.28
  },
  {
    "customerId": "CUST-35141",
    "productId": "PROD-1877",
    "quantity": 5,
    "pricePerUnit": 2011,
    "discountPercentage": 37,
    "totalAmount": 10055,
    "finalAmount": 6334.65
  },
  {
    "customerId": "CUST-13062",
    "productId": "PROD-1867",
    "quantity": 4,
    "pricePerUnit": 3062,
    "discountPercentage": 24,
    "totalAmount": 12248,
    "finalAmount": 9308.48
  },
  {
    "customerId": "CUST-47033",
    "productId": "PROD-7973",
    "quantity": 5,
    "pricePerUnit": 1453,
    "discountPercentage": 28,
    "totalAmount": 7265,
    "finalAmount": 5230.8
  },
  {
    "customerId": "CUST-46881",
    "productId": "PROD-8307",
    "quantity": 2,
    "pricePerUnit": 1332,
    "discountPercentage": 40,
    "totalAmount": 2664,
    "finalAmount": 1598.4
  },
  {
    "customerId": "CUST-93925",
    "productId": "PROD-6517",
    "quantity": 5,
    "pricePerUnit": 2997,
    "discountPercentage": 29,
    "totalAmount": 14985,
    "finalAmount": 10639.35
  },
  {
    "customerId": "CUST-91194",
    "productId": "PROD-7518",
    "quantity": 1,
    "pricePerUnit": 1660,
    "discountPercentage": 38,
    "totalAmount": 1660,
    "finalAmount": 1029.2
  },
  {
    "customerId": "CUST-53858",
    "productId": "PROD-4196",
    "quantity": 5,
    "pricePerUnit": 4963,
    "discountPercentage": 35,
    "totalAmount": 24815,
    "finalAmount": 16129.75
  },
  {
    "customerId": "CUST-73010",
    "productId": "PROD-7937",
    "quantity": 2,
    "pricePerUnit": 892,
    "discountPercentage": 23,
    "totalAmount": 1784,
    "finalAmount": 1373.68
  },
  {
    "customerId": "CUST-25966",
    "productId": "PROD-2468",
    "quantity": 4,
    "pricePerUnit": 2651,
    "discountPercentage": 38,
    "totalAmount": 10604,
    "finalAmount": 6574.48
  },
  {
    "customerId": "CUST-55448",
    "productId": "PROD-9186",
    "quantity": 1,
    "pricePerUnit": 4977,
    "discountPercentage": 30,
    "totalAmount": 4977,
    "finalAmount": 3483.9
  },
  {
    "customerId": "CUST-22122",
    "productId": "PROD-4552",
    "quantity": 4,
    "pricePerUnit": 3244,
    "discountPercentage": 20,
    "totalAmount": 12976,
    "finalAmount": 10380.8
  },
  {
    "customerId": "CUST-87858",
    "productId": "PROD-1202",
    "quantity": 5,
    "pricePerUnit": 1288,
    "discountPercentage": 36,
    "totalAmount": 6440,
    "finalAmount": 4121.6
  },
  {
    "customerId": "CUST-25133",
    "productId": "PROD-8401",
    "quantity": 3,
    "pricePerUnit": 114,
    "discountPercentage": 37,
    "totalAmount": 342,
    "finalAmount": 215.46
  },
  {
    "customerId": "CUST-93093",
    "productId": "PROD-2465",
    "quantity": 4,
    "pricePerUnit": 1919,
    "discountPercentage": 22,
    "totalAmount": 7676,
    "finalAmount": 5987.28
  },
  {
    "customerId": "CUST-94513",
    "productId": "PROD-8513",
    "quantity": 1,
    "pricePerUnit": 302,
    "discountPercentage": 6,
    "totalAmount": 302,
    "finalAmount": 283.88
  },
  {
    "customerId": "CUST-61149",
    "productId": "PROD-3791",
    "quantity": 5,
    "pricePerUnit": 2866,
    "discountPercentage": 45,
    "totalAmount": 14330,
    "finalAmount": 7881.5
  },
  {
    "customerId": "CUST-26919",
    "productId": "PROD-5570",
    "quantity": 4,
    "pricePerUnit": 2087,
    "discountPercentage": 42,
    "totalAmount": 8348,
    "finalAmount": 4841.84
  },
  {
    "customerId": "CUST-64103",
    "productId": "PROD-4086",
    "quantity": 5,
    "pricePerUnit": 4102,
    "discountPercentage": 19,
    "totalAmount": 20510,
    "finalAmount": 16613.1
  },
  {
    "customerId": "CUST-21719",
    "productId": "PROD-9679",
    "quantity": 2,
    "pricePerUnit": 3073,
    "discountPercentage": 26,
    "totalAmount": 6146,
    "finalAmount": 4548.04
  },
  {
    "customerId": "CUST-17224",
    "productId": "PROD-9888",
    "quantity": 3,
    "pricePerUnit": 3491,
    "discountPercentage": 38,
    "totalAmount": 10473,
    "finalAmount": 6493.26
  },
  {
    "customerId": "CUST-80547",
    "productId": "PROD-1449",
    "quantity": 4,
    "pricePerUnit": 4114,
    "discountPercentage": 27,
    "totalAmount": 16456,
    "finalAmount": 12012.88
  },
  {
    "customerId": "CUST-21171",
    "productId": "PROD-7455",
    "quantity": 3,
    "pricePerUnit": 2710,
    "discountPercentage": 17,
    "totalAmount": 8130,
    "finalAmount": 6747.9
  },
  {
    "customerId": "CUST-58177",
    "productId": "PROD-9248",
    "quantity": 4,
    "pricePerUnit": 4849,
    "discountPercentage": 33,
    "totalAmount": 19396,
    "finalAmount": 12995.32
  },
  {
    "customerId": "CUST-98090",
    "productId": "PROD-3799",
    "quantity": 4,
    "pricePerUnit": 3541,
    "discountPercentage": 12,
    "totalAmount": 14164,
    "finalAmount": 12464.32
  },
  {
    "customerId": "CUST-38624",
    "productId": "PROD-7935",
    "quantity": 1,
    "pricePerUnit": 1643,
    "discountPercentage": 21,
    "totalAmount": 1643,
    "finalAmount": 1297.97
  },
  {
    "customerId": "CUST-98966",
    "productId": "PROD-2420",
    "quantity": 1,
    "pricePerUnit": 2541,
    "discountPercentage": 4,
    "totalAmount": 2541,
    "finalAmount": 2439.36
  },
  {
    "customerId": "CUST-37969",
    "productId": "PROD-9888",
    "quantity": 5,
    "pricePerUnit": 1263,
    "discountPercentage": 26,
    "totalAmount": 6315,
    "finalAmount": 4673.1
  },
  {
    "customerId": "CUST-88832",
    "productId": "PROD-2353",
    "quantity": 5,
    "pricePerUnit": 654,
    "discountPercentage": 46,
    "totalAmount": 3270,
    "finalAmount": 1765.8
  },
  {
    "customerId": "CUST-80565",
    "productId": "PROD-5272",
    "quantity": 1,
    "pricePerUnit": 2921,
    "discountPercentage": 47,
    "totalAmount": 2921,
    "finalAmount": 1548.13
  },
  {
    "customerId": "CUST-72717",
    "productId": "PROD-6952",
    "quantity": 4,
    "pricePerUnit": 84,
    "discountPercentage": 30,
    "totalAmount": 336,
    "finalAmount": 235.2
  },
  {
    "customerId": "CUST-68678",
    "productId": "PROD-9427",
    "quantity": 1,
    "pricePerUnit": 2061,
    "discountPercentage": 5,
    "totalAmount": 2061,
    "finalAmount": 1957.95
  },
  {
    "customerId": "CUST-42042",
    "productId": "PROD-6037",
    "quantity": 4,
    "pricePerUnit": 954,
    "discountPercentage": 15,
    "totalAmount": 3816,
    "finalAmount": 3243.6
  },
  {
    "customerId": "CUST-84086",
    "productId": "PROD-4269",
    "quantity": 2,
    "pricePerUnit": 3284,
    "discountPercentage": 35,
    "totalAmount": 6568,
    "finalAmount": 4269.2
  },
  {
    "customerId": "CUST-24322",
    "productId": "PROD-9265",
    "quantity": 2,
    "pricePerUnit": 2224,
    "discountPercentage": 33,
    "totalAmount": 4448,
    "finalAmount": 2980.16
  },
  {
    "customerId": "CUST-68542",
    "productId": "PROD-9397",
    "quantity": 3,
    "pricePerUnit": 4150,
    "discountPercentage": 34,
    "totalAmount": 12450,
    "finalAmount": 8217
  },
  {
    "customerId": "CUST-62092",
    "productId": "PROD-5531",
    "quantity": 2,
    "pricePerUnit": 1188,
    "discountPercentage": 50,
    "totalAmount": 2376,
    "finalAmount": 1188
  },
  {
    "customerId": "CUST-89204",
    "productId": "PROD-2738",
    "quantity": 1,
    "pricePerUnit": 1336,
    "discountPercentage": 32,
    "totalAmount": 1336,
    "finalAmount": 908.48
  },
  {
    "customerId": "CUST-50003",
    "productId": "PROD-2415",
    "quantity": 4,
    "pricePerUnit": 218,
    "discountPercentage": 36,
    "totalAmount": 872,
    "finalAmount": 558.08
  },
  {
    "customerId": "CUST-82596",
    "productId": "PROD-4871",
    "quantity": 3,
    "pricePerUnit": 1295,
    "discountPercentage": 26,
    "totalAmount": 3885,
    "finalAmount": 2874.9
  },
  {
    "customerId": "CUST-13947",
    "productId": "PROD-4961",
    "quantity": 5,
    "pricePerUnit": 3186,
    "discountPercentage": 37,
    "totalAmount": 15930,
    "finalAmount": 10035.9
  },
  {
    "customerId": "CUST-78024",
    "productId": "PROD-9187",
    "quantity": 1,
    "pricePerUnit": 3117,
    "discountPercentage": 34,
    "totalAmount": 3117,
    "finalAmount": 2057.22
  },
  {
    "customerId": "CUST-23290",
    "productId": "PROD-3685",
    "quantity": 2,
    "pricePerUnit": 2225,
    "discountPercentage": 29,
    "totalAmount": 4450,
    "finalAmount": 3159.5
  },
  {
    "customerId": "CUST-27521",
    "productId": "PROD-4719",
    "quantity": 5,
    "pricePerUnit": 2817,
    "discountPercentage": 39,
    "totalAmount": 14085,
    "finalAmount": 8591.85
  },
  {
    "customerId": "CUST-80206",
    "productId": "PROD-3676",
    "quantity": 2,
    "pricePerUnit": 4725,
    "discountPercentage": 34,
    "totalAmount": 9450,
    "finalAmount": 6237
  },
  {
    "customerId": "CUST-37547",
    "productId": "PROD-2039",
    "quantity": 5,
    "pricePerUnit": 4583,
    "discountPercentage": 35,
    "totalAmount": 22915,
    "finalAmount": 14894.75
  },
  {
    "customerId": "CUST-16181",
    "productId": "PROD-4197",
    "quantity": 1,
    "pricePerUnit": 3143,
    "discountPercentage": 45,
    "totalAmount": 3143,
    "finalAmount": 1728.65
  },
  {
    "customerId": "CUST-67408",
    "productId": "PROD-3616",
    "quantity": 4,
    "pricePerUnit": 1864,
    "discountPercentage": 5,
    "totalAmount": 7456,
    "finalAmount": 7083.2
  },
  {
    "customerId": "CUST-76897",
    "productId": "PROD-4685",
    "quantity": 5,
    "pricePerUnit": 4020,
    "discountPercentage": 31,
    "totalAmount": 20100,
    "finalAmount": 13869
  },
  {
    "customerId": "CUST-90029",
    "productId": "PROD-1835",
    "quantity": 5,
    "pricePerUnit": 1084,
    "discountPercentage": 30,
    "totalAmount": 5420,
    "finalAmount": 3794
  },
  {
    "customerId": "CUST-17653",
    "productId": "PROD-1833",
    "quantity": 3,
    "pricePerUnit": 4494,
    "discountPercentage": 34,
    "totalAmount": 13482,
    "finalAmount": 8898.12
  },
  {
    "customerId": "CUST-83903",
    "productId": "PROD-2152",
    "quantity": 2,
    "pricePerUnit": 1404,
    "discountPercentage": 16,
    "totalAmount": 2808,
    "finalAmount": 2358.72
  },
  {
    "customerId": "CUST-63288",
    "productId": "PROD-1430",
    "quantity": 1,
    "pricePerUnit": 3027,
    "discountPercentage": 8,
    "totalAmount": 3027,
    "finalAmount": 2784.84
  },
  {
    "customerId": "CUST-84484",
    "productId": "PROD-1893",
    "quantity": 5,
    "pricePerUnit": 304,
    "discountPercentage": 42,
    "totalAmount": 1520,
    "finalAmount": 881.6
  },
  {
    "customerId": "CUST-43550",
    "productId": "PROD-9568",
    "quantity": 1,
    "pricePerUnit": 1653,
    "discountPercentage": 4,
    "totalAmount": 1653,
    "finalAmount": 1586.88
  },
  {
    "customerId": "CUST-60364",
    "productId": "PROD-7007",
    "quantity": 2,
    "pricePerUnit": 1975,
    "discountPercentage": 24,
    "totalAmount": 3950,
    "finalAmount": 3002
  },
  {
    "customerId": "CUST-97397",
    "productId": "PROD-3245",
    "quantity": 3,
    "pricePerUnit": 2856,
    "discountPercentage": 39,
    "totalAmount": 8568,
    "finalAmount": 5226.48
  },
  {
    "customerId": "CUST-16689",
    "productId": "PROD-9651",
    "quantity": 2,
    "pricePerUnit": 3594,
    "discountPercentage": 19,
    "totalAmount": 7188,
    "finalAmount": 5822.28
  },
  {
    "customerId": "CUST-20612",
    "productId": "PROD-5045",
    "quantity": 2,
    "pricePerUnit": 574,
    "discountPercentage": 17,
    "totalAmount": 1148,
    "finalAmount": 952.84
  },
  {
    "customerId": "CUST-42316",
    "productId": "PROD-2547",
    "quantity": 5,
    "pricePerUnit": 3777,
    "discountPercentage": 15,
    "totalAmount": 18885,
    "finalAmount": 16052.25
  },
  {
    "customerId": "CUST-52633",
    "productId": "PROD-8242",
    "quantity": 1,
    "pricePerUnit": 2620,
    "discountPercentage": 33,
    "totalAmount": 2620,
    "finalAmount": 1755.4
  },
  {
    "customerId": "CUST-68063",
    "productId": "PROD-5643",
    "quantity": 4,
    "pricePerUnit": 1758,
    "discountPercentage": 45,
    "totalAmount": 7032,
    "finalAmount": 3867.6
  },
  {
    "customerId": "CUST-41642",
    "productId": "PROD-5918",
    "quantity": 4,
    "pricePerUnit": 3250,
    "discountPercentage": 48,
    "totalAmount": 13000,
    "finalAmount": 6760
  },
  {
    "customerId": "CUST-20612",
    "productId": "PROD-6664",
    "quantity": 2,
    "pricePerUnit": 4927,
    "discountPercentage": 16,
    "totalAmount": 9854,
    "finalAmount": 8277.36
  },
  {
    "customerId": "CUST-44542",
    "productId": "PROD-9843",
    "quantity": 1,
    "pricePerUnit": 3783,
    "discountPercentage": 1,
    "totalAmount": 3783,
    "finalAmount": 3745.17
  },
  {
    "customerId": "CUST-54212",
    "productId": "PROD-9120",
    "quantity": 2,
    "pricePerUnit": 1462,
    "discountPercentage": 26,
    "totalAmount": 2924,
    "finalAmount": 2163.76
  },
  {
    "customerId": "CUST-66475",
    "productId": "PROD-7994",
    "quantity": 4,
    "pricePerUnit": 1404,
    "discountPercentage": 31,
    "totalAmount": 5616,
    "finalAmount": 3875.04
  },
  {
    "customerId": "CUST-80946",
    "productId": "PROD-7657",
    "quantity": 4,
    "pricePerUnit": 4217,
    "discountPercentage": 5,
    "totalAmount": 16868,
    "finalAmount": 16024.6
  },
  {
    "customerId": "CUST-19938",
    "productId": "PROD-3386",
    "quantity": 3,
    "pricePerUnit": 4240,
    "discountPercentage": 41,
    "totalAmount": 12720,
    "finalAmount": 7504.8
  },
  {
    "customerId": "CUST-56970",
    "productId": "PROD-4674",
    "quantity": 5,
    "pricePerUnit": 4414,
    "discountPercentage": 12,
    "totalAmount": 22070,
    "finalAmount": 19421.6
  },
  {
    "customerId": "CUST-15519",
    "productId": "PROD-7741",
    "quantity": 2,
    "pricePerUnit": 581,
    "discountPercentage": 41,
    "totalAmount": 1162,
    "finalAmount": 685.58
  },
  {
    "customerId": "CUST-85830",
    "productId": "PROD-9621",
    "quantity": 5,
    "pricePerUnit": 1336,
    "discountPercentage": 43,
    "totalAmount": 6680,
    "finalAmount": 3807.6
  },
  {
    "customerId": "CUST-16752",
    "productId": "PROD-4665",
    "quantity": 5,
    "pricePerUnit": 3359,
    "discountPercentage": 24,
    "totalAmount": 16795,
    "finalAmount": 12764.2
  },
  {
    "customerId": "CUST-87209",
    "productId": "PROD-9373",
    "quantity": 4,
    "pricePerUnit": 938,
    "discountPercentage": 41,
    "totalAmount": 3752,
    "finalAmount": 2213.68
  },
  {
    "customerId": "CUST-17120",
    "productId": "PROD-8705",
    "quantity": 1,
    "pricePerUnit": 3461,
    "discountPercentage": 40,
    "totalAmount": 3461,
    "finalAmount": 2076.6
  },
  {
    "customerId": "CUST-83277",
    "productId": "PROD-3757",
    "quantity": 4,
    "pricePerUnit": 3557,
    "discountPercentage": 3,
    "totalAmount": 14228,
    "finalAmount": 13801.16
  },
  {
    "customerId": "CUST-56058",
    "productId": "PROD-6130",
    "quantity": 4,
    "pricePerUnit": 4906,
    "discountPercentage": 28,
    "totalAmount": 19624,
    "finalAmount": 14129.28
  },
  {
    "customerId": "CUST-72469",
    "productId": "PROD-3692",
    "quantity": 3,
    "pricePerUnit": 4572,
    "discountPercentage": 0,
    "totalAmount": 13716,
    "finalAmount": 13716
  },
  {
    "customerId": "CUST-68150",
    "productId": "PROD-3921",
    "quantity": 3,
    "pricePerUnit": 3212,
    "discountPercentage": 4,
    "totalAmount": 9636,
    "finalAmount": 9250.56
  },
  {
    "customerId": "CUST-86366",
    "productId": "PROD-3504",
    "quantity": 4,
    "pricePerUnit": 1824,
    "discountPercentage": 48,
    "totalAmount": 7296,
    "finalAmount": 3793.92
  },
  {
    "customerId": "CUST-87499",
    "productId": "PROD-2095",
    "quantity": 1,
    "pricePerUnit": 3188,
    "discountPercentage": 32,
    "totalAmount": 3188,
    "finalAmount": 2167.84
  },
  {
    "customerId": "CUST-30636",
    "productId": "PROD-4263",
    "quantity": 4,
    "pricePerUnit": 594,
    "discountPercentage": 6,
    "totalAmount": 2376,
    "finalAmount": 2233.44
  },
  {
    "customerId": "CUST-27883",
    "productId": "PROD-9837",
    "quantity": 2,
    "pricePerUnit": 1206,
    "discountPercentage": 45,
    "totalAmount": 2412,
    "finalAmount": 1326.6
  },
  {
    "customerId": "CUST-28282",
    "productId": "PROD-1623",
    "quantity": 3,
    "pricePerUnit": 4352,
    "discountPercentage": 16,
    "totalAmount": 13056,
    "finalAmount": 10967.04
  },
  {
    "customerId": "CUST-37366",
    "productId": "PROD-2254",
    "quantity": 3,
    "pricePerUnit": 4901,
    "discountPercentage": 41,
    "totalAmount": 14703,
    "finalAmount": 8674.77
  },
  {
    "customerId": "CUST-19357",
    "productId": "PROD-6443",
    "quantity": 2,
    "pricePerUnit": 1237,
    "discountPercentage": 15,
    "totalAmount": 2474,
    "finalAmount": 2102.9
  },
  {
    "customerId": "CUST-65886",
    "productId": "PROD-3626",
    "quantity": 3,
    "pricePerUnit": 3477,
    "discountPercentage": 36,
    "totalAmount": 10431,
    "finalAmount": 6675.84
  },
  {
    "customerId": "CUST-43859",
    "productId": "PROD-5831",
    "quantity": 4,
    "pricePerUnit": 677,
    "discountPercentage": 2,
    "totalAmount": 2708,
    "finalAmount": 2653.84
  },
  {
    "customerId": "CUST-99114",
    "productId": "PROD-5832",
    "quantity": 2,
    "pricePerUnit": 1284,
    "discountPercentage": 31,
    "totalAmount": 2568,
    "finalAmount": 1771.92
  },
  {
    "customerId": "CUST-87843",
    "productId": "PROD-1041",
    "quantity": 2,
    "pricePerUnit": 2287,
    "discountPercentage": 43,
    "totalAmount": 4574,
    "finalAmount": 2607.18
  },
  {
    "customerId": "CUST-71393",
    "productId": "PROD-4505",
    "quantity": 1,
    "pricePerUnit": 3520,
    "discountPercentage": 40,
    "totalAmount": 3520,
    "finalAmount": 2112
  },
  {
    "customerId": "CUST-69761",
    "productId": "PROD-6448",
    "quantity": 1,
    "pricePerUnit": 3292,
    "discountPercentage": 23,
    "totalAmount": 3292,
    "finalAmount": 2534.84
  },
  {
    "customerId": "CUST-35759",
    "productId": "PROD-4758",
    "quantity": 1,
    "pricePerUnit": 3914,
    "discountPercentage": 44,
    "totalAmount": 3914,
    "finalAmount": 2191.84
  },
  {
    "customerId": "CUST-98686",
    "productId": "PROD-9486",
    "quantity": 3,
    "pricePerUnit": 3617,
    "discountPercentage": 48,
    "totalAmount": 10851,
    "finalAmount": 5642.52
  },
  {
    "customerId": "CUST-52005",
    "productId": "PROD-2674",
    "quantity": 5,
    "pricePerUnit": 3163,
    "discountPercentage": 31,
    "totalAmount": 15815,
    "finalAmount": 10912.35
  },
  {
    "customerId": "CUST-52573",
    "productId": "PROD-6660",
    "quantity": 1,
    "pricePerUnit": 158,
    "discountPercentage": 4,
    "totalAmount": 158,
    "finalAmount": 151.68
  },
  {
    "customerId": "CUST-25150",
    "productId": "PROD-7811",
    "quantity": 1,
    "pricePerUnit": 4875,
    "discountPercentage": 31,
    "totalAmount": 4875,
    "finalAmount": 3363.75
  },
  {
    "customerId": "CUST-12521",
    "productId": "PROD-8010",
    "quantity": 1,
    "pricePerUnit": 3168,
    "discountPercentage": 44,
    "totalAmount": 3168,
    "finalAmount": 1774.08
  },
  {
    "customerId": "CUST-59871",
    "productId": "PROD-7692",
    "quantity": 3,
    "pricePerUnit": 4340,
    "discountPercentage": 17,
    "totalAmount": 13020,
    "finalAmount": 10806.6
  },
  {
    "customerId": "CUST-44207",
    "productId": "PROD-8804",
    "quantity": 5,
    "pricePerUnit": 4149,
    "discountPercentage": 35,
    "totalAmount": 20745,
    "finalAmount": 13484.25
  },
  {
    "customerId": "CUST-56350",
    "productId": "PROD-7703",
    "quantity": 4,
    "pricePerUnit": 2409,
    "discountPercentage": 16,
    "totalAmount": 9636,
    "finalAmount": 8094.24
  },
  {
    "customerId": "CUST-73837",
    "productId": "PROD-4435",
    "quantity": 2,
    "pricePerUnit": 4009,
    "discountPercentage": 38,
    "totalAmount": 8018,
    "finalAmount": 4971.16
  },
  {
    "customerId": "CUST-69656",
    "productId": "PROD-2709",
    "quantity": 4,
    "pricePerUnit": 2083,
    "discountPercentage": 12,
    "totalAmount": 8332,
    "finalAmount": 7332.16
  },
  {
    "customerId": "CUST-62805",
    "productId": "PROD-9274",
    "quantity": 2,
    "pricePerUnit": 3783,
    "discountPercentage": 39,
    "totalAmount": 7566,
    "finalAmount": 4615.26
  },
  {
    "customerId": "CUST-54314",
    "productId": "PROD-6762",
    "quantity": 1,
    "pricePerUnit": 4888,
    "discountPercentage": 38,
    "totalAmount": 4888,
    "finalAmount": 3030.56
  },
  {
    "customerId": "CUST-71307",
    "productId": "PROD-8650",
    "quantity": 1,
    "pricePerUnit": 4842,
    "discountPercentage": 46,
    "totalAmount": 4842,
    "finalAmount": 2614.68
  },
  {
    "customerId": "CUST-83706",
    "productId": "PROD-6082",
    "quantity": 3,
    "pricePerUnit": 388,
    "discountPercentage": 2,
    "totalAmount": 1164,
    "finalAmount": 1140.72
  },
  {
    "customerId": "CUST-37570",
    "productId": "PROD-6670",
    "quantity": 1,
    "pricePerUnit": 4258,
    "discountPercentage": 0,
    "totalAmount": 4258,
    "finalAmount": 4258
  },
  {
    "customerId": "CUST-12647",
    "productId": "PROD-3956",
    "quantity": 2,
    "pricePerUnit": 337,
    "discountPercentage": 15,
    "totalAmount": 674,
    "finalAmount": 572.9
  },
  {
    "customerId": "CUST-32559",
    "productId": "PROD-5239",
    "quantity": 4,
    "pricePerUnit": 2393,
    "discountPercentage": 33,
    "totalAmount": 9572,
    "finalAmount": 6413.24
  },
  {
    "customerId": "CUST-42423",
    "productId": "PROD-5728",
    "quantity": 5,
    "pricePerUnit": 4994,
    "discountPercentage": 2,
    "totalAmount": 24970,
    "finalAmount": 24470.6
  },
  {
    "customerId": "CUST-40954",
    "productId": "PROD-8838",
    "quantity": 2,
    "pricePerUnit": 3700,
    "discountPercentage": 50,
    "totalAmount": 7400,
    "finalAmount": 3700
  },
  {
    "customerId": "CUST-10345",
    "productId": "PROD-2978",
    "quantity": 2,
    "pricePerUnit": 1097,
    "discountPercentage": 4,
    "totalAmount": 2194,
    "finalAmount": 2106.24
  },
  {
    "customerId": "CUST-15044",
    "productId": "PROD-9741",
    "quantity": 5,
    "pricePerUnit": 3788,
    "discountPercentage": 15,
    "totalAmount": 18940,
    "finalAmount": 16099
  },
  {
    "customerId": "CUST-72866",
    "productId": "PROD-5094",
    "quantity": 2,
    "pricePerUnit": 1281,
    "discountPercentage": 27,
    "totalAmount": 2562,
    "finalAmount": 1870.26
  },
  {
    "customerId": "CUST-88020",
    "productId": "PROD-9190",
    "quantity": 2,
    "pricePerUnit": 4938,
    "discountPercentage": 13,
    "totalAmount": 9876,
    "finalAmount": 8592.12
  },
  {
    "customerId": "CUST-46242",
    "productId": "PROD-7389",
    "quantity": 1,
    "pricePerUnit": 4434,
    "discountPercentage": 34,
    "totalAmount": 4434,
    "finalAmount": 2926.44
  },
  {
    "customerId": "CUST-50215",
    "productId": "PROD-9272",
    "quantity": 3,
    "pricePerUnit": 4902,
    "discountPercentage": 6,
    "totalAmount": 14706,
    "finalAmount": 13823.64
  },
  {
    "customerId": "CUST-30013",
    "productId": "PROD-1973",
    "quantity": 2,
    "pricePerUnit": 512,
    "discountPercentage": 48,
    "totalAmount": 1024,
    "finalAmount": 532.48
  },
  {
    "customerId": "CUST-53570",
    "productId": "PROD-6285",
    "quantity": 2,
    "pricePerUnit": 3251,
    "discountPercentage": 1,
    "totalAmount": 6502,
    "finalAmount": 6436.98
  },
  {
    "customerId": "CUST-46269",
    "productId": "PROD-4623",
    "quantity": 2,
    "pricePerUnit": 3981,
    "discountPercentage": 16,
    "totalAmount": 7962,
    "finalAmount": 6688.08
  },
  {
    "customerId": "CUST-38839",
    "productId": "PROD-7254",
    "quantity": 5,
    "pricePerUnit": 4793,
    "discountPercentage": 20,
    "totalAmount": 23965,
    "finalAmount": 19172
  },
  {
    "customerId": "CUST-82686",
    "productId": "PROD-4847",
    "quantity": 4,
    "pricePerUnit": 4874,
    "discountPercentage": 29,
    "totalAmount": 19496,
    "finalAmount": 13842.16
  },
  {
    "customerId": "CUST-58396",
    "productId": "PROD-9259",
    "quantity": 5,
    "pricePerUnit": 2064,
    "discountPercentage": 5,
    "totalAmount": 10320,
    "finalAmount": 9804
  },
  {
    "customerId": "CUST-28201",
    "productId": "PROD-3486",
    "quantity": 4,
    "pricePerUnit": 3512,
    "discountPercentage": 24,
    "totalAmount": 14048,
    "finalAmount": 10676.48
  },
  {
    "customerId": "CUST-70765",
    "productId": "PROD-2358",
    "quantity": 1,
    "pricePerUnit": 976,
    "discountPercentage": 26,
    "totalAmount": 976,
    "finalAmount": 722.24
  },
  {
    "customerId": "CUST-59266",
    "productId": "PROD-6323",
    "quantity": 2,
    "pricePerUnit": 4869,
    "discountPercentage": 42,
    "totalAmount": 9738,
    "finalAmount": 5648.04
  },
  {
    "customerId": "CUST-28982",
    "productId": "PROD-1433",
    "quantity": 2,
    "pricePerUnit": 3250,
    "discountPercentage": 8,
    "totalAmount": 6500,
    "finalAmount": 5980
  },
  {
    "customerId": "CUST-80576",
    "productId": "PROD-7024",
    "quantity": 4,
    "pricePerUnit": 2588,
    "discountPercentage": 5,
    "totalAmount": 10352,
    "finalAmount": 9834.4
  },
  {
    "customerId": "CUST-16519",
    "productId": "PROD-5407",
    "quantity": 5,
    "pricePerUnit": 3284,
    "discountPercentage": 22,
    "totalAmount": 16420,
    "finalAmount": 12807.6
  },
  {
    "customerId": "CUST-52653",
    "productId": "PROD-7376",
    "quantity": 4,
    "pricePerUnit": 3886,
    "discountPercentage": 30,
    "totalAmount": 15544,
    "finalAmount": 10880.8
  },
  {
    "customerId": "CUST-45881",
    "productId": "PROD-5806",
    "quantity": 1,
    "pricePerUnit": 1038,
    "discountPercentage": 39,
    "totalAmount": 1038,
    "finalAmount": 633.18
  },
  {
    "customerId": "CUST-58981",
    "productId": "PROD-9747",
    "quantity": 1,
    "pricePerUnit": 808,
    "discountPercentage": 15,
    "totalAmount": 808,
    "finalAmount": 686.8
  },
  {
    "customerId": "CUST-97387",
    "productId": "PROD-9701",
    "quantity": 1,
    "pricePerUnit": 2310,
    "discountPercentage": 43,
    "totalAmount": 2310,
    "finalAmount": 1316.7
  },
  {
    "customerId": "CUST-17859",
    "productId": "PROD-4415",
    "quantity": 5,
    "pricePerUnit": 583,
    "discountPercentage": 10,
    "totalAmount": 2915,
    "finalAmount": 2623.5
  },
  {
    "customerId": "CUST-23112",
    "productId": "PROD-8363",
    "quantity": 4,
    "pricePerUnit": 2051,
    "discountPercentage": 30,
    "totalAmount": 8204,
    "finalAmount": 5742.8
  },
  {
    "customerId": "CUST-18043",
    "productId": "PROD-9330",
    "quantity": 4,
    "pricePerUnit": 2215,
    "discountPercentage": 20,
    "totalAmount": 8860,
    "finalAmount": 7088
  },
  {
    "customerId": "CUST-55973",
    "productId": "PROD-7790",
    "quantity": 1,
    "pricePerUnit": 2465,
    "discountPercentage": 38,
    "totalAmount": 2465,
    "finalAmount": 1528.3
  },
  {
    "customerId": "CUST-93229",
    "productId": "PROD-5444",
    "quantity": 1,
    "pricePerUnit": 291,
    "discountPercentage": 16,
    "totalAmount": 291,
    "finalAmount": 244.44
  },
  {
    "customerId": "CUST-69510",
    "productId": "PROD-9956",
    "quantity": 4,
    "pricePerUnit": 2718,
    "discountPercentage": 31,
    "totalAmount": 10872,
    "finalAmount": 7501.68
  },
  {
    "customerId": "CUST-56749",
    "productId": "PROD-9770",
    "quantity": 4,
    "pricePerUnit": 3001,
    "discountPercentage": 39,
    "totalAmount": 12004,
    "finalAmount": 7322.44
  },
  {
    "customerId": "CUST-60729",
    "productId": "PROD-8191",
    "quantity": 5,
    "pricePerUnit": 3535,
    "discountPercentage": 43,
    "totalAmount": 17675,
    "finalAmount": 10074.75
  },
  {
    "customerId": "CUST-99213",
    "productId": "PROD-3726",
    "quantity": 1,
    "pricePerUnit": 1677,
    "discountPercentage": 25,
    "totalAmount": 1677,
    "finalAmount": 1257.75
  },
  {
    "customerId": "CUST-24816",
    "productId": "PROD-1109",
    "quantity": 1,
    "pricePerUnit": 1984,
    "discountPercentage": 44,
    "totalAmount": 1984,
    "finalAmount": 1111.04
  },
  {
    "customerId": "CUST-57954",
    "productId": "PROD-4984",
    "quantity": 3,
    "pricePerUnit": 3592,
    "discountPercentage": 3,
    "totalAmount": 10776,
    "finalAmount": 10452.72
  },
  {
    "customerId": "CUST-69968",
    "productId": "PROD-7138",
    "quantity": 3,
    "pricePerUnit": 1381,
    "discountPercentage": 29,
    "totalAmount": 4143,
    "finalAmount": 2941.53
  },
  {
    "customerId": "CUST-62968",
    "productId": "PROD-2801",
    "quantity": 2,
    "pricePerUnit": 271,
    "discountPercentage": 3,
    "totalAmount": 542,
    "finalAmount": 525.74
  },
  {
    "customerId": "CUST-64778",
    "productId": "PROD-5673",
    "quantity": 5,
    "pricePerUnit": 3278,
    "discountPercentage": 39,
    "totalAmount": 16390,
    "finalAmount": 9997.9
  },
  {
    "customerId": "CUST-78426",
    "productId": "PROD-8686",
    "quantity": 5,
    "pricePerUnit": 4138,
    "discountPercentage": 10,
    "totalAmount": 20690,
    "finalAmount": 18621
  },
  {
    "customerId": "CUST-68260",
    "productId": "PROD-9656",
    "quantity": 2,
    "pricePerUnit": 1318,
    "discountPercentage": 35,
    "totalAmount": 2636,
    "finalAmount": 1713.4
  },
  {
    "customerId": "CUST-63989",
    "productId": "PROD-6842",
    "quantity": 5,
    "pricePerUnit": 3789,
    "discountPercentage": 42,
    "totalAmount": 18945,
    "finalAmount": 10988.1
  },
  {
    "customerId": "CUST-30475",
    "productId": "PROD-6716",
    "quantity": 4,
    "pricePerUnit": 2880,
    "discountPercentage": 28,
    "totalAmount": 11520,
    "finalAmount": 8294.4
  },
  {
    "customerId": "CUST-85579",
    "productId": "PROD-4883",
    "quantity": 3,
    "pricePerUnit": 4453,
    "discountPercentage": 21,
    "totalAmount": 13359,
    "finalAmount": 10553.61
  },
  {
    "customerId": "CUST-41978",
    "productId": "PROD-8439",
    "quantity": 3,
    "pricePerUnit": 1175,
    "discountPercentage": 4,
    "totalAmount": 3525,
    "finalAmount": 3384
  },
  {
    "customerId": "CUST-98036",
    "productId": "PROD-7299",
    "quantity": 3,
    "pricePerUnit": 3940,
    "discountPercentage": 27,
    "totalAmount": 11820,
    "finalAmount": 8628.6
  },
  {
    "customerId": "CUST-34677",
    "productId": "PROD-6989",
    "quantity": 1,
    "pricePerUnit": 1823,
    "discountPercentage": 30,
    "totalAmount": 1823,
    "finalAmount": 1276.1
  },
  {
    "customerId": "CUST-71434",
    "productId": "PROD-7343",
    "quantity": 5,
    "pricePerUnit": 1619,
    "discountPercentage": 25,
    "totalAmount": 8095,
    "finalAmount": 6071.25
  },
  {
    "customerId": "CUST-57030",
    "productId": "PROD-5513",
    "quantity": 1,
    "pricePerUnit": 2821,
    "discountPercentage": 40,
    "totalAmount": 2821,
    "finalAmount": 1692.6
  },
  {
    "customerId": "CUST-73109",
    "productId": "PROD-3010",
    "quantity": 4,
    "pricePerUnit": 3460,
    "discountPercentage": 6,
    "totalAmount": 13840,
    "finalAmount": 13009.6
  },
  {
    "customerId": "CUST-75705",
    "productId": "PROD-9664",
    "quantity": 3,
    "pricePerUnit": 1907,
    "discountPercentage": 1,
    "totalAmount": 5721,
    "finalAmount": 5663.79
  },
  {
    "customerId": "CUST-38694",
    "productId": "PROD-4100",
    "quantity": 2,
    "pricePerUnit": 2705,
    "discountPercentage": 15,
    "totalAmount": 5410,
    "finalAmount": 4598.5
  },
  {
    "customerId": "CUST-20022",
    "productId": "PROD-6903",
    "quantity": 4,
    "pricePerUnit": 4561,
    "discountPercentage": 20,
    "totalAmount": 18244,
    "finalAmount": 14595.2
  },
  {
    "customerId": "CUST-99763",
    "productId": "PROD-9527",
    "quantity": 2,
    "pricePerUnit": 617,
    "discountPercentage": 10,
    "totalAmount": 1234,
    "finalAmount": 1110.6
  },
  {
    "customerId": "CUST-16705",
    "productId": "PROD-4628",
    "quantity": 4,
    "pricePerUnit": 3160,
    "discountPercentage": 6,
    "totalAmount": 12640,
    "finalAmount": 11881.6
  },
  {
    "customerId": "CUST-70471",
    "productId": "PROD-6823",
    "quantity": 2,
    "pricePerUnit": 4149,
    "discountPercentage": 36,
    "totalAmount": 8298,
    "finalAmount": 5310.72
  },
  {
    "customerId": "CUST-44804",
    "productId": "PROD-9852",
    "quantity": 3,
    "pricePerUnit": 2332,
    "discountPercentage": 29,
    "totalAmount": 6996,
    "finalAmount": 4967.16
  },
  {
    "customerId": "CUST-47822",
    "productId": "PROD-6028",
    "quantity": 1,
    "pricePerUnit": 2174,
    "discountPercentage": 38,
    "totalAmount": 2174,
    "finalAmount": 1347.88
  },
  {
    "customerId": "CUST-45249",
    "productId": "PROD-3248",
    "quantity": 1,
    "pricePerUnit": 2013,
    "discountPercentage": 27,
    "totalAmount": 2013,
    "finalAmount": 1469.49
  },
  {
    "customerId": "CUST-16265",
    "productId": "PROD-4754",
    "quantity": 4,
    "pricePerUnit": 4054,
    "discountPercentage": 22,
    "totalAmount": 16216,
    "finalAmount": 12648.48
  },
  {
    "customerId": "CUST-16089",
    "productId": "PROD-3285",
    "quantity": 3,
    "pricePerUnit": 3305,
    "discountPercentage": 30,
    "totalAmount": 9915,
    "finalAmount": 6940.5
  },
  {
    "customerId": "CUST-62485",
    "productId": "PROD-9174",
    "quantity": 4,
    "pricePerUnit": 4468,
    "discountPercentage": 15,
    "totalAmount": 17872,
    "finalAmount": 15191.2
  },
  {
    "customerId": "CUST-65118",
    "productId": "PROD-7340",
    "quantity": 4,
    "pricePerUnit": 4563,
    "discountPercentage": 1,
    "totalAmount": 18252,
    "finalAmount": 18069.48
  },
  {
    "customerId": "CUST-88700",
    "productId": "PROD-1835",
    "quantity": 4,
    "pricePerUnit": 4618,
    "discountPercentage": 38,
    "totalAmount": 18472,
    "finalAmount": 11452.64
  },
  {
    "customerId": "CUST-85331",
    "productId": "PROD-7707",
    "quantity": 4,
    "pricePerUnit": 3574,
    "discountPercentage": 24,
    "totalAmount": 14296,
    "finalAmount": 10864.96
  },
  {
    "customerId": "CUST-40465",
    "productId": "PROD-3492",
    "quantity": 1,
    "pricePerUnit": 2639,
    "discountPercentage": 34,
    "totalAmount": 2639,
    "finalAmount": 1741.74
  },
  {
    "customerId": "CUST-40139",
    "productId": "PROD-4422",
    "quantity": 4,
    "pricePerUnit": 2798,
    "discountPercentage": 42,
    "totalAmount": 11192,
    "finalAmount": 6491.36
  },
  {
    "customerId": "CUST-33517",
    "productId": "PROD-2284",
    "quantity": 3,
    "pricePerUnit": 1626,
    "discountPercentage": 16,
    "totalAmount": 4878,
    "finalAmount": 4097.52
  },
  {
    "customerId": "CUST-93326",
    "productId": "PROD-8970",
    "quantity": 1,
    "pricePerUnit": 4826,
    "discountPercentage": 37,
    "totalAmount": 4826,
    "finalAmount": 3040.38
  },
  {
    "customerId": "CUST-40560",
    "productId": "PROD-8412",
    "quantity": 1,
    "pricePerUnit": 3021,
    "discountPercentage": 37,
    "totalAmount": 3021,
    "finalAmount": 1903.23
  },
  {
    "customerId": "CUST-25475",
    "productId": "PROD-3799",
    "quantity": 1,
    "pricePerUnit": 4868,
    "discountPercentage": 7,
    "totalAmount": 4868,
    "finalAmount": 4527.24
  },
  {
    "customerId": "CUST-84169",
    "productId": "PROD-3120",
    "quantity": 1,
    "pricePerUnit": 2740,
    "discountPercentage": 4,
    "totalAmount": 2740,
    "finalAmount": 2630.4
  },
  {
    "customerId": "CUST-93137",
    "productId": "PROD-2426",
    "quantity": 3,
    "pricePerUnit": 836,
    "discountPercentage": 4,
    "totalAmount": 2508,
    "finalAmount": 2407.68
  },
  {
    "customerId": "CUST-20543",
    "productId": "PROD-1526",
    "quantity": 1,
    "pricePerUnit": 405,
    "discountPercentage": 7,
    "totalAmount": 405,
    "finalAmount": 376.65
  },
  {
    "customerId": "CUST-32553",
    "productId": "PROD-2064",
    "quantity": 5,
    "pricePerUnit": 4948,
    "discountPercentage": 39,
    "totalAmount": 24740,
    "finalAmount": 15091.4
  },
  {
    "customerId": "CUST-79992",
    "productId": "PROD-3536",
    "quantity": 3,
    "pricePerUnit": 2334,
    "discountPercentage": 26,
    "totalAmount": 7002,
    "finalAmount": 5181.48
  },
  {
    "customerId": "CUST-16994",
    "productId": "PROD-9671",
    "quantity": 4,
    "pricePerUnit": 3617,
    "discountPercentage": 0,
    "totalAmount": 14468,
    "finalAmount": 14468
  },
  {
    "customerId": "CUST-58673",
    "productId": "PROD-2197",
    "quantity": 4,
    "pricePerUnit": 3519,
    "discountPercentage": 32,
    "totalAmount": 14076,
    "finalAmount": 9571.68
  },
  {
    "customerId": "CUST-53413",
    "productId": "PROD-7794",
    "quantity": 3,
    "pricePerUnit": 2998,
    "discountPercentage": 13,
    "totalAmount": 8994,
    "finalAmount": 7824.78
  },
  {
    "customerId": "CUST-24629",
    "productId": "PROD-7473",
    "quantity": 4,
    "pricePerUnit": 4793,
    "discountPercentage": 48,
    "totalAmount": 19172,
    "finalAmount": 9969.44
  },
  {
    "customerId": "CUST-38118",
    "productId": "PROD-8070",
    "quantity": 2,
    "pricePerUnit": 2325,
    "discountPercentage": 9,
    "totalAmount": 4650,
    "finalAmount": 4231.5
  },
  {
    "customerId": "CUST-35311",
    "productId": "PROD-7046",
    "quantity": 2,
    "pricePerUnit": 1075,
    "discountPercentage": 36,
    "totalAmount": 2150,
    "finalAmount": 1376
  },
  {
    "customerId": "CUST-67924",
    "productId": "PROD-5096",
    "quantity": 3,
    "pricePerUnit": 2505,
    "discountPercentage": 43,
    "totalAmount": 7515,
    "finalAmount": 4283.55
  },
  {
    "customerId": "CUST-66366",
    "productId": "PROD-7399",
    "quantity": 1,
    "pricePerUnit": 971,
    "discountPercentage": 23,
    "totalAmount": 971,
    "finalAmount": 747.67
  },
  {
    "customerId": "CUST-18680",
    "productId": "PROD-2295",
    "quantity": 3,
    "pricePerUnit": 4073,
    "discountPercentage": 39,
    "totalAmount": 12219,
    "finalAmount": 7453.59
  },
  {
    "customerId": "CUST-12005",
    "productId": "PROD-2890",
    "quantity": 2,
    "pricePerUnit": 234,
    "discountPercentage": 27,
    "totalAmount": 468,
    "finalAmount": 341.64
  },
  {
    "customerId": "CUST-28956",
    "productId": "PROD-8410",
    "quantity": 2,
    "pricePerUnit": 966,
    "discountPercentage": 16,
    "totalAmount": 1932,
    "finalAmount": 1622.88
  },
  {
    "customerId": "CUST-98941",
    "productId": "PROD-9724",
    "quantity": 2,
    "pricePerUnit": 3011,
    "discountPercentage": 42,
    "totalAmount": 6022,
    "finalAmount": 3492.76
  },
  {
    "customerId": "CUST-42792",
    "productId": "PROD-2671",
    "quantity": 4,
    "pricePerUnit": 3453,
    "discountPercentage": 30,
    "totalAmount": 13812,
    "finalAmount": 9668.4
  },
  {
    "customerId": "CUST-51741",
    "productId": "PROD-4455",
    "quantity": 5,
    "pricePerUnit": 260,
    "discountPercentage": 13,
    "totalAmount": 1300,
    "finalAmount": 1131
  },
  {
    "customerId": "CUST-37747",
    "productId": "PROD-8773",
    "quantity": 2,
    "pricePerUnit": 4527,
    "discountPercentage": 25,
    "totalAmount": 9054,
    "finalAmount": 6790.5
  },
  {
    "customerId": "CUST-36934",
    "productId": "PROD-6114",
    "quantity": 2,
    "pricePerUnit": 1066,
    "discountPercentage": 1,
    "totalAmount": 2132,
    "finalAmount": 2110.68
  },
  {
    "customerId": "CUST-67727",
    "productId": "PROD-6040",
    "quantity": 1,
    "pricePerUnit": 3401,
    "discountPercentage": 43,
    "totalAmount": 3401,
    "finalAmount": 1938.57
  },
  {
    "customerId": "CUST-99664",
    "productId": "PROD-4246",
    "quantity": 2,
    "pricePerUnit": 4487,
    "discountPercentage": 29,
    "totalAmount": 8974,
    "finalAmount": 6371.54
  },
  {
    "customerId": "CUST-62878",
    "productId": "PROD-9610",
    "quantity": 3,
    "pricePerUnit": 3603,
    "discountPercentage": 16,
    "totalAmount": 10809,
    "finalAmount": 9079.56
  },
  {
    "customerId": "CUST-71052",
    "productId": "PROD-3448",
    "quantity": 3,
    "pricePerUnit": 2923,
    "discountPercentage": 0,
    "totalAmount": 8769,
    "finalAmount": 8769
  },
  {
    "customerId": "CUST-20778",
    "productId": "PROD-6119",
    "quantity": 5,
    "pricePerUnit": 3619,
    "discountPercentage": 6,
    "totalAmount": 18095,
    "finalAmount": 17009.3
  },
  {
    "customerId": "CUST-64563",
    "productId": "PROD-6855",
    "quantity": 4,
    "pricePerUnit": 2265,
    "discountPercentage": 25,
    "totalAmount": 9060,
    "finalAmount": 6795
  },
  {
    "customerId": "CUST-11778",
    "productId": "PROD-9298",
    "quantity": 1,
    "pricePerUnit": 1481,
    "discountPercentage": 3,
    "totalAmount": 1481,
    "finalAmount": 1436.57
  },
  {
    "customerId": "CUST-18327",
    "productId": "PROD-9442",
    "quantity": 3,
    "pricePerUnit": 1180,
    "discountPercentage": 2,
    "totalAmount": 3540,
    "finalAmount": 3469.2
  },
  {
    "customerId": "CUST-37217",
    "productId": "PROD-5803",
    "quantity": 4,
    "pricePerUnit": 2828,
    "discountPercentage": 13,
    "totalAmount": 11312,
    "finalAmount": 9841.44
  },
  {
    "customerId": "CUST-42515",
    "productId": "PROD-8643",
    "quantity": 3,
    "pricePerUnit": 4351,
    "discountPercentage": 20,
    "totalAmount": 13053,
    "finalAmount": 10442.4
  },
  {
    "customerId": "CUST-24374",
    "productId": "PROD-5888",
    "quantity": 2,
    "pricePerUnit": 2203,
    "discountPercentage": 20,
    "totalAmount": 4406,
    "finalAmount": 3524.8
  },
  {
    "customerId": "CUST-97101",
    "productId": "PROD-4425",
    "quantity": 1,
    "pricePerUnit": 1393,
    "discountPercentage": 39,
    "totalAmount": 1393,
    "finalAmount": 849.73
  },
  {
    "customerId": "CUST-22907",
    "productId": "PROD-8837",
    "quantity": 3,
    "pricePerUnit": 628,
    "discountPercentage": 21,
    "totalAmount": 1884,
    "finalAmount": 1488.36
  },
  {
    "customerId": "CUST-13062",
    "productId": "PROD-5657",
    "quantity": 1,
    "pricePerUnit": 608,
    "discountPercentage": 34,
    "totalAmount": 608,
    "finalAmount": 401.28
  },
  {
    "customerId": "CUST-92315",
    "productId": "PROD-7456",
    "quantity": 5,
    "pricePerUnit": 957,
    "discountPercentage": 38,
    "totalAmount": 4785,
    "finalAmount": 2966.7
  },
  {
    "customerId": "CUST-97460",
    "productId": "PROD-1753",
    "quantity": 4,
    "pricePerUnit": 353,
    "discountPercentage": 50,
    "totalAmount": 1412,
    "finalAmount": 706
  },
  {
    "customerId": "CUST-62959",
    "productId": "PROD-5266",
    "quantity": 4,
    "pricePerUnit": 973,
    "discountPercentage": 20,
    "totalAmount": 3892,
    "finalAmount": 3113.6
  },
  {
    "customerId": "CUST-15348",
    "productId": "PROD-6706",
    "quantity": 5,
    "pricePerUnit": 4562,
    "discountPercentage": 22,
    "totalAmount": 22810,
    "finalAmount": 17791.8
  },
  {
    "customerId": "CUST-50629",
    "productId": "PROD-4591",
    "quantity": 4,
    "pricePerUnit": 1585,
    "discountPercentage": 46,
    "totalAmount": 6340,
    "finalAmount": 3423.6
  },
  {
    "customerId": "CUST-58803",
    "productId": "PROD-9400",
    "quantity": 2,
    "pricePerUnit": 4031,
    "discountPercentage": 11,
    "totalAmount": 8062,
    "finalAmount": 7175.18
  },
  {
    "customerId": "CUST-97125",
    "productId": "PROD-4965",
    "quantity": 1,
    "pricePerUnit": 2545,
    "discountPercentage": 14,
    "totalAmount": 2545,
    "finalAmount": 2188.7
  },
  {
    "customerId": "CUST-43163",
    "productId": "PROD-6725",
    "quantity": 1,
    "pricePerUnit": 4957,
    "discountPercentage": 22,
    "totalAmount": 4957,
    "finalAmount": 3866.46
  },
  {
    "customerId": "CUST-99415",
    "productId": "PROD-4888",
    "quantity": 5,
    "pricePerUnit": 3885,
    "discountPercentage": 21,
    "totalAmount": 19425,
    "finalAmount": 15345.75
  },
  {
    "customerId": "CUST-56787",
    "productId": "PROD-3041",
    "quantity": 2,
    "pricePerUnit": 1838,
    "discountPercentage": 50,
    "totalAmount": 3676,
    "finalAmount": 1838
  },
  {
    "customerId": "CUST-16593",
    "productId": "PROD-5790",
    "quantity": 3,
    "pricePerUnit": 131,
    "discountPercentage": 29,
    "totalAmount": 393,
    "finalAmount": 279.03
  },
  {
    "customerId": "CUST-68289",
    "productId": "PROD-3133",
    "quantity": 3,
    "pricePerUnit": 1267,
    "discountPercentage": 4,
    "totalAmount": 3801,
    "finalAmount": 3648.96
  },
  {
    "customerId": "CUST-91816",
    "productId": "PROD-4990",
    "quantity": 4,
    "pricePerUnit": 2736,
    "discountPercentage": 39,
    "totalAmount": 10944,
    "finalAmount": 6675.84
  },
  {
    "customerId": "CUST-34781",
    "productId": "PROD-2371",
    "quantity": 5,
    "pricePerUnit": 278,
    "discountPercentage": 43,
    "totalAmount": 1390,
    "finalAmount": 792.3
  },
  {
    "customerId": "CUST-98630",
    "productId": "PROD-7894",
    "quantity": 1,
    "pricePerUnit": 2769,
    "discountPercentage": 42,
    "totalAmount": 2769,
    "finalAmount": 1606.02
  },
  {
    "customerId": "CUST-82856",
    "productId": "PROD-6082",
    "quantity": 3,
    "pricePerUnit": 4434,
    "discountPercentage": 31,
    "totalAmount": 13302,
    "finalAmount": 9178.38
  },
  {
    "customerId": "CUST-91007",
    "productId": "PROD-1487",
    "quantity": 3,
    "pricePerUnit": 3774,
    "discountPercentage": 8,
    "totalAmount": 11322,
    "finalAmount": 10416.24
  },
  {
    "customerId": "CUST-52973",
    "productId": "PROD-5968",
    "quantity": 4,
    "pricePerUnit": 4474,
    "discountPercentage": 45,
    "totalAmount": 17896,
    "finalAmount": 9842.8
  },
  {
    "customerId": "CUST-15897",
    "productId": "PROD-5839",
    "quantity": 2,
    "pricePerUnit": 2868,
    "discountPercentage": 48,
    "totalAmount": 5736,
    "finalAmount": 2982.72
  },
  {
    "customerId": "CUST-19870",
    "productId": "PROD-1023",
    "quantity": 3,
    "pricePerUnit": 4925,
    "discountPercentage": 5,
    "totalAmount": 14775,
    "finalAmount": 14036.25
  },
  {
    "customerId": "CUST-94714",
    "productId": "PROD-7143",
    "quantity": 4,
    "pricePerUnit": 4854,
    "discountPercentage": 23,
    "totalAmount": 19416,
    "finalAmount": 14950.32
  },
  {
    "customerId": "CUST-77194",
    "productId": "PROD-7391",
    "quantity": 3,
    "pricePerUnit": 2757,
    "discountPercentage": 6,
    "totalAmount": 8271,
    "finalAmount": 7774.74
  },
  {
    "customerId": "CUST-28352",
    "productId": "PROD-4032",
    "quantity": 3,
    "pricePerUnit": 1605,
    "discountPercentage": 0,
    "totalAmount": 4815,
    "finalAmount": 4815
  },
  {
    "customerId": "CUST-69332",
    "productId": "PROD-7692",
    "quantity": 5,
    "pricePerUnit": 4761,
    "discountPercentage": 41,
    "totalAmount": 23805,
    "finalAmount": 14044.95
  },
  {
    "customerId": "CUST-30417",
    "productId": "PROD-2617",
    "quantity": 1,
    "pricePerUnit": 702,
    "discountPercentage": 11,
    "totalAmount": 702,
    "finalAmount": 624.78
  },
  {
    "customerId": "CUST-76145",
    "productId": "PROD-6122",
    "quantity": 2,
    "pricePerUnit": 4312,
    "discountPercentage": 42,
    "totalAmount": 8624,
    "finalAmount": 5001.92
  },
  {
    "customerId": "CUST-98134",
    "productId": "PROD-9147",
    "quantity": 5,
    "pricePerUnit": 3474,
    "discountPercentage": 40,
    "totalAmount": 17370,
    "finalAmount": 10422
  },
  {
    "customerId": "CUST-26415",
    "productId": "PROD-2036",
    "quantity": 1,
    "pricePerUnit": 3793,
    "discountPercentage": 3,
    "totalAmount": 3793,
    "finalAmount": 3679.21
  },
  {
    "customerId": "CUST-51162",
    "productId": "PROD-3553",
    "quantity": 5,
    "pricePerUnit": 50,
    "discountPercentage": 27,
    "totalAmount": 250,
    "finalAmount": 182.5
  },
  {
    "customerId": "CUST-30539",
    "productId": "PROD-5249",
    "quantity": 1,
    "pricePerUnit": 4775,
    "discountPercentage": 33,
    "totalAmount": 4775,
    "finalAmount": 3199.25
  },
  {
    "customerId": "CUST-93524",
    "productId": "PROD-3532",
    "quantity": 5,
    "pricePerUnit": 1006,
    "discountPercentage": 32,
    "totalAmount": 5030,
    "finalAmount": 3420.4
  },
  {
    "customerId": "CUST-34101",
    "productId": "PROD-4805",
    "quantity": 2,
    "pricePerUnit": 643,
    "discountPercentage": 38,
    "totalAmount": 1286,
    "finalAmount": 797.32
  },
  {
    "customerId": "CUST-47445",
    "productId": "PROD-9434",
    "quantity": 2,
    "pricePerUnit": 4802,
    "discountPercentage": 3,
    "totalAmount": 9604,
    "finalAmount": 9315.88
  },
  {
    "customerId": "CUST-59179",
    "productId": "PROD-9790",
    "quantity": 1,
    "pricePerUnit": 940,
    "discountPercentage": 3,
    "totalAmount": 940,
    "finalAmount": 911.8
  },
  {
    "customerId": "CUST-54061",
    "productId": "PROD-9946",
    "quantity": 2,
    "pricePerUnit": 3652,
    "discountPercentage": 36,
    "totalAmount": 7304,
    "finalAmount": 4674.56
  },
  {
    "customerId": "CUST-38379",
    "productId": "PROD-5356",
    "quantity": 2,
    "pricePerUnit": 330,
    "discountPercentage": 27,
    "totalAmount": 660,
    "finalAmount": 481.8
  },
    {
    "customerId": "CUST-73456",
    "productId": "PROD-6102",
    "quantity": 1,
    "pricePerUnit": 818,
    "discountPercentage": 37,
    "totalAmount": 818,
    "finalAmount": 515.34
  },
  {
    "customerId": "CUST-41489",
    "productId": "PROD-8930",
    "quantity": 2,
    "pricePerUnit": 65,
    "discountPercentage": 36,
    "totalAmount": 130,
    "finalAmount": 83.2
  },
  {
    "customerId": "CUST-63160",
    "productId": "PROD-7007",
    "quantity": 1,
    "pricePerUnit": 3911,
    "discountPercentage": 16,
    "totalAmount": 3911,
    "finalAmount": 3285.24
  },
  {
    "customerId": "CUST-32854",
    "productId": "PROD-7486",
    "quantity": 1,
    "pricePerUnit": 340,
    "discountPercentage": 22,
    "totalAmount": 340,
    "finalAmount": 265.2
  },
  {
    "customerId": "CUST-94920",
    "productId": "PROD-9298",
    "quantity": 5,
    "pricePerUnit": 4867,
    "discountPercentage": 24,
    "totalAmount": 24335,
    "finalAmount": 18494.6
  },
  {
    "customerId": "CUST-24474",
    "productId": "PROD-3447",
    "quantity": 2,
    "pricePerUnit": 1357,
    "discountPercentage": 49,
    "totalAmount": 2714,
    "finalAmount": 1384.14
  },
  {
    "customerId": "CUST-39065",
    "productId": "PROD-2389",
    "quantity": 1,
    "pricePerUnit": 2118,
    "discountPercentage": 44,
    "totalAmount": 2118,
    "finalAmount": 1186.08
  },
  {
    "customerId": "CUST-80658",
    "productId": "PROD-8294",
    "quantity": 1,
    "pricePerUnit": 884,
    "discountPercentage": 32,
    "totalAmount": 884,
    "finalAmount": 601.12
  },
  {
    "customerId": "CUST-46494",
    "productId": "PROD-7435",
    "quantity": 3,
    "pricePerUnit": 1437,
    "discountPercentage": 21,
    "totalAmount": 4311,
    "finalAmount": 3405.69
  },
  {
    "customerId": "CUST-86281",
    "productId": "PROD-4833",
    "quantity": 2,
    "pricePerUnit": 1680,
    "discountPercentage": 40,
    "totalAmount": 3360,
    "finalAmount": 2016
  },
  {
    "customerId": "CUST-21779",
    "productId": "PROD-6609",
    "quantity": 3,
    "pricePerUnit": 780,
    "discountPercentage": 0,
    "totalAmount": 2340,
    "finalAmount": 2340
  },
  {
    "customerId": "CUST-61081",
    "productId": "PROD-4788",
    "quantity": 3,
    "pricePerUnit": 892,
    "discountPercentage": 15,
    "totalAmount": 2676,
    "finalAmount": 2274.6
  },
  {
    "customerId": "CUST-97486",
    "productId": "PROD-3827",
    "quantity": 3,
    "pricePerUnit": 373,
    "discountPercentage": 9,
    "totalAmount": 1119,
    "finalAmount": 1018.29
  },
  {
    "customerId": "CUST-24274",
    "productId": "PROD-6730",
    "quantity": 2,
    "pricePerUnit": 2271,
    "discountPercentage": 50,
    "totalAmount": 4542,
    "finalAmount": 2271
  },
  {
    "customerId": "CUST-83120",
    "productId": "PROD-1672",
    "quantity": 2,
    "pricePerUnit": 4908,
    "discountPercentage": 11,
    "totalAmount": 9816,
    "finalAmount": 8736.24
  },
  {
    "customerId": "CUST-85172",
    "productId": "PROD-3121",
    "quantity": 3,
    "pricePerUnit": 1049,
    "discountPercentage": 23,
    "totalAmount": 3147,
    "finalAmount": 2423.19
  },
  {
    "customerId": "CUST-25232",
    "productId": "PROD-2928",
    "quantity": 4,
    "pricePerUnit": 3886,
    "discountPercentage": 7,
    "totalAmount": 15544,
    "finalAmount": 14455.92
  },
  {
    "customerId": "CUST-22069",
    "productId": "PROD-8123",
    "quantity": 4,
    "pricePerUnit": 274,
    "discountPercentage": 10,
    "totalAmount": 1096,
    "finalAmount": 986.4
  },
  {
    "customerId": "CUST-39054",
    "productId": "PROD-1726",
    "quantity": 3,
    "pricePerUnit": 2853,
    "discountPercentage": 13,
    "totalAmount": 8559,
    "finalAmount": 7446.33
  },
  {
    "customerId": "CUST-79435",
    "productId": "PROD-1748",
    "quantity": 3,
    "pricePerUnit": 708,
    "discountPercentage": 24,
    "totalAmount": 2124,
    "finalAmount": 1614.24
  },
  {
    "customerId": "CUST-10923",
    "productId": "PROD-9407",
    "quantity": 2,
    "pricePerUnit": 2524,
    "discountPercentage": 3,
    "totalAmount": 5048,
    "finalAmount": 4896.56
  },
  {
    "customerId": "CUST-26016",
    "productId": "PROD-9400",
    "quantity": 2,
    "pricePerUnit": 978,
    "discountPercentage": 13,
    "totalAmount": 1956,
    "finalAmount": 1701.72
  },
  {
    "customerId": "CUST-61019",
    "productId": "PROD-9779",
    "quantity": 2,
    "pricePerUnit": 1225,
    "discountPercentage": 7,
    "totalAmount": 2450,
    "finalAmount": 2278.5
  },
  {
    "customerId": "CUST-35815",
    "productId": "PROD-7085",
    "quantity": 3,
    "pricePerUnit": 3779,
    "discountPercentage": 24,
    "totalAmount": 11337,
    "finalAmount": 8616.12
  },
  {
    "customerId": "CUST-85543",
    "productId": "PROD-8539",
    "quantity": 4,
    "pricePerUnit": 192,
    "discountPercentage": 38,
    "totalAmount": 768,
    "finalAmount": 476.16
  },
  {
    "customerId": "CUST-99644",
    "productId": "PROD-1132",
    "quantity": 1,
    "pricePerUnit": 669,
    "discountPercentage": 26,
    "totalAmount": 669,
    "finalAmount": 495.06
  },
  {
    "customerId": "CUST-79235",
    "productId": "PROD-4020",
    "quantity": 3,
    "pricePerUnit": 1766,
    "discountPercentage": 31,
    "totalAmount": 5298,
    "finalAmount": 3655.62
  },
  {
    "customerId": "CUST-14137",
    "productId": "PROD-7797",
    "quantity": 1,
    "pricePerUnit": 2467,
    "discountPercentage": 8,
    "totalAmount": 2467,
    "finalAmount": 2269.64
  },
  {
    "customerId": "CUST-97195",
    "productId": "PROD-3978",
    "quantity": 2,
    "pricePerUnit": 1509,
    "discountPercentage": 6,
    "totalAmount": 3018,
    "finalAmount": 2836.92
  },
  {
    "customerId": "CUST-96927",
    "productId": "PROD-6137",
    "quantity": 3,
    "pricePerUnit": 3651,
    "discountPercentage": 3,
    "totalAmount": 10953,
    "finalAmount": 10624.41
  },
  {
    "customerId": "CUST-80679",
    "productId": "PROD-9338",
    "quantity": 5,
    "pricePerUnit": 2269,
    "discountPercentage": 45,
    "totalAmount": 11345,
    "finalAmount": 6239.75
  },
  {
    "customerId": "CUST-97338",
    "productId": "PROD-3401",
    "quantity": 2,
    "pricePerUnit": 376,
    "discountPercentage": 38,
    "totalAmount": 752,
    "finalAmount": 466.24
  },
  {
    "customerId": "CUST-26161",
    "productId": "PROD-3871",
    "quantity": 1,
    "pricePerUnit": 1522,
    "discountPercentage": 50,
    "totalAmount": 1522,
    "finalAmount": 761
  },
  {
    "customerId": "CUST-36842",
    "productId": "PROD-5695",
    "quantity": 4,
    "pricePerUnit": 4360,
    "discountPercentage": 10,
    "totalAmount": 17440,
    "finalAmount": 15696
  },
  {
    "customerId": "CUST-56888",
    "productId": "PROD-1716",
    "quantity": 3,
    "pricePerUnit": 3598,
    "discountPercentage": 36,
    "totalAmount": 10794,
    "finalAmount": 6908.16
  },
  {
    "customerId": "CUST-52569",
    "productId": "PROD-1968",
    "quantity": 3,
    "pricePerUnit": 3900,
    "discountPercentage": 17,
    "totalAmount": 11700,
    "finalAmount": 9711
  },
  {
    "customerId": "CUST-17393",
    "productId": "PROD-7329",
    "quantity": 4,
    "pricePerUnit": 4244,
    "discountPercentage": 29,
    "totalAmount": 16976,
    "finalAmount": 12052.96
  },
  {
    "customerId": "CUST-58211",
    "productId": "PROD-8369",
    "quantity": 4,
    "pricePerUnit": 3348,
    "discountPercentage": 18,
    "totalAmount": 13392,
    "finalAmount": 10981.44
  },
  {
    "customerId": "CUST-48568",
    "productId": "PROD-9184",
    "quantity": 1,
    "pricePerUnit": 3076,
    "discountPercentage": 1,
    "totalAmount": 3076,
    "finalAmount": 3045.24
  },
  {
    "customerId": "CUST-77268",
    "productId": "PROD-7473",
    "quantity": 2,
    "pricePerUnit": 272,
    "discountPercentage": 35,
    "totalAmount": 544,
    "finalAmount": 353.6
  },
  {
    "customerId": "CUST-98429",
    "productId": "PROD-5113",
    "quantity": 3,
    "pricePerUnit": 4126,
    "discountPercentage": 2,
    "totalAmount": 12378,
    "finalAmount": 12130.44
  },
  {
    "customerId": "CUST-24980",
    "productId": "PROD-4294",
    "quantity": 1,
    "pricePerUnit": 4038,
    "discountPercentage": 7,
    "totalAmount": 4038,
    "finalAmount": 3755.34
  },
  {
    "customerId": "CUST-36108",
    "productId": "PROD-4923",
    "quantity": 5,
    "pricePerUnit": 2671,
    "discountPercentage": 24,
    "totalAmount": 13355,
    "finalAmount": 10149.8
  },
  {
    "customerId": "CUST-62197",
    "productId": "PROD-9295",
    "quantity": 5,
    "pricePerUnit": 3223,
    "discountPercentage": 14,
    "totalAmount": 16115,
    "finalAmount": 13858.9
  },
  {
    "customerId": "CUST-21879",
    "productId": "PROD-3349",
    "quantity": 2,
    "pricePerUnit": 568,
    "discountPercentage": 26,
    "totalAmount": 1136,
    "finalAmount": 840.64
  },
  {
    "customerId": "CUST-96202",
    "productId": "PROD-6714",
    "quantity": 2,
    "pricePerUnit": 3815,
    "discountPercentage": 13,
    "totalAmount": 7630,
    "finalAmount": 6638.1
  },
  {
    "customerId": "CUST-54631",
    "productId": "PROD-3972",
    "quantity": 1,
    "pricePerUnit": 3196,
    "discountPercentage": 26,
    "totalAmount": 3196,
    "finalAmount": 2365.04
  },
  {
    "customerId": "CUST-34075",
    "productId": "PROD-6862",
    "quantity": 1,
    "pricePerUnit": 1463,
    "discountPercentage": 48,
    "totalAmount": 1463,
    "finalAmount": 760.76
  },
  {
    "customerId": "CUST-38468",
    "productId": "PROD-4239",
    "quantity": 3,
    "pricePerUnit": 4352,
    "discountPercentage": 34,
    "totalAmount": 13056,
    "finalAmount": 8616.96
  },
  {
    "customerId": "CUST-37977",
    "productId": "PROD-9463",
    "quantity": 5,
    "pricePerUnit": 1377,
    "discountPercentage": 25,
    "totalAmount": 6885,
    "finalAmount": 5163.75
  },
  {
    "customerId": "CUST-23028",
    "productId": "PROD-2371",
    "quantity": 2,
    "pricePerUnit": 2195,
    "discountPercentage": 34,
    "totalAmount": 4390,
    "finalAmount": 2897.4
  },
  {
    "customerId": "CUST-22426",
    "productId": "PROD-3477",
    "quantity": 5,
    "pricePerUnit": 1081,
    "discountPercentage": 5,
    "totalAmount": 5405,
    "finalAmount": 5134.75
  },
  {
    "customerId": "CUST-81293",
    "productId": "PROD-7130",
    "quantity": 3,
    "pricePerUnit": 2712,
    "discountPercentage": 11,
    "totalAmount": 8136,
    "finalAmount": 7241.04
  },
  {
    "customerId": "CUST-75073",
    "productId": "PROD-3818",
    "quantity": 5,
    "pricePerUnit": 4618,
    "discountPercentage": 22,
    "totalAmount": 23090,
    "finalAmount": 18010.2
  },
  {
    "customerId": "CUST-41429",
    "productId": "PROD-5304",
    "quantity": 5,
    "pricePerUnit": 1937,
    "discountPercentage": 8,
    "totalAmount": 9685,
    "finalAmount": 8910.2
  },
  {
    "customerId": "CUST-82772",
    "productId": "PROD-9926",
    "quantity": 3,
    "pricePerUnit": 4535,
    "discountPercentage": 33,
    "totalAmount": 13605,
    "finalAmount": 9115.35
  },
  {
    "customerId": "CUST-64425",
    "productId": "PROD-4260",
    "quantity": 1,
    "pricePerUnit": 2803,
    "discountPercentage": 2,
    "totalAmount": 2803,
    "finalAmount": 2746.94
  },
  {
    "customerId": "CUST-93403",
    "productId": "PROD-5259",
    "quantity": 4,
    "pricePerUnit": 4671,
    "discountPercentage": 31,
    "totalAmount": 18684,
    "finalAmount": 12891.96
  },
  {
    "customerId": "CUST-87280",
    "productId": "PROD-4878",
    "quantity": 5,
    "pricePerUnit": 4358,
    "discountPercentage": 34,
    "totalAmount": 21790,
    "finalAmount": 14381.4
  },
  {
    "customerId": "CUST-56189",
    "productId": "PROD-4393",
    "quantity": 3,
    "pricePerUnit": 1194,
    "discountPercentage": 6,
    "totalAmount": 3582,
    "finalAmount": 3367.08
  },
  {
    "customerId": "CUST-19619",
    "productId": "PROD-2986",
    "quantity": 2,
    "pricePerUnit": 132,
    "discountPercentage": 33,
    "totalAmount": 264,
    "finalAmount": 176.88
  },
  {
    "customerId": "CUST-84060",
    "productId": "PROD-9103",
    "quantity": 1,
    "pricePerUnit": 2850,
    "discountPercentage": 19,
    "totalAmount": 2850,
    "finalAmount": 2308.5
  },
  {
    "customerId": "CUST-62730",
    "productId": "PROD-4748",
    "quantity": 1,
    "pricePerUnit": 3682,
    "discountPercentage": 25,
    "totalAmount": 3682,
    "finalAmount": 2761.5
  },
  {
    "customerId": "CUST-12207",
    "productId": "PROD-9665",
    "quantity": 2,
    "pricePerUnit": 3998,
    "discountPercentage": 47,
    "totalAmount": 7996,
    "finalAmount": 4237.88
  },
  {
    "customerId": "CUST-12439",
    "productId": "PROD-7930",
    "quantity": 5,
    "pricePerUnit": 1887,
    "discountPercentage": 25,
    "totalAmount": 9435,
    "finalAmount": 7076.25
  },
  {
    "customerId": "CUST-39769",
    "productId": "PROD-1764",
    "quantity": 2,
    "pricePerUnit": 4564,
    "discountPercentage": 14,
    "totalAmount": 9128,
    "finalAmount": 7850.08
  },
  {
    "customerId": "CUST-33406",
    "productId": "PROD-5267",
    "quantity": 2,
    "pricePerUnit": 746,
    "discountPercentage": 23,
    "totalAmount": 1492,
    "finalAmount": 1148.84
  },
  {
    "customerId": "CUST-97469",
    "productId": "PROD-3117",
    "quantity": 4,
    "pricePerUnit": 1122,
    "discountPercentage": 43,
    "totalAmount": 4488,
    "finalAmount": 2558.16
  },
  {
    "customerId": "CUST-29876",
    "productId": "PROD-9957",
    "quantity": 3,
    "pricePerUnit": 1466,
    "discountPercentage": 15,
    "totalAmount": 4398,
    "finalAmount": 3738.3
  },
  {
    "customerId": "CUST-16253",
    "productId": "PROD-8825",
    "quantity": 2,
    "pricePerUnit": 4479,
    "discountPercentage": 50,
    "totalAmount": 8958,
    "finalAmount": 4479
  },
  {
    "customerId": "CUST-89846",
    "productId": "PROD-5921",
    "quantity": 5,
    "pricePerUnit": 1423,
    "discountPercentage": 16,
    "totalAmount": 7115,
    "finalAmount": 5976.6
  },
  {
    "customerId": "CUST-82664",
    "productId": "PROD-6804",
    "quantity": 5,
    "pricePerUnit": 2501,
    "discountPercentage": 19,
    "totalAmount": 12505,
    "finalAmount": 10129.05
  },
  {
    "customerId": "CUST-63483",
    "productId": "PROD-4275",
    "quantity": 5,
    "pricePerUnit": 2905,
    "discountPercentage": 5,
    "totalAmount": 14525,
    "finalAmount": 13798.75
  },
  {
    "customerId": "CUST-97994",
    "productId": "PROD-1735",
    "quantity": 5,
    "pricePerUnit": 2093,
    "discountPercentage": 18,
    "totalAmount": 10465,
    "finalAmount": 8581.3
  },
  {
    "customerId": "CUST-36614",
    "productId": "PROD-4323",
    "quantity": 1,
    "pricePerUnit": 1363,
    "discountPercentage": 45,
    "totalAmount": 1363,
    "finalAmount": 749.65
  },
  {
    "customerId": "CUST-58632",
    "productId": "PROD-4577",
    "quantity": 5,
    "pricePerUnit": 894,
    "discountPercentage": 48,
    "totalAmount": 4470,
    "finalAmount": 2324.4
  },
  {
    "customerId": "CUST-52592",
    "productId": "PROD-4276",
    "quantity": 3,
    "pricePerUnit": 1764,
    "discountPercentage": 33,
    "totalAmount": 5292,
    "finalAmount": 3545.64
  },
  {
    "customerId": "CUST-30701",
    "productId": "PROD-7994",
    "quantity": 1,
    "pricePerUnit": 1071,
    "discountPercentage": 9,
    "totalAmount": 1071,
    "finalAmount": 974.61
  },
  {
    "customerId": "CUST-28052",
    "productId": "PROD-8819",
    "quantity": 2,
    "pricePerUnit": 483,
    "discountPercentage": 12,
    "totalAmount": 966,
    "finalAmount": 850.08
  },
  {
    "customerId": "CUST-85738",
    "productId": "PROD-1854",
    "quantity": 2,
    "pricePerUnit": 3534,
    "discountPercentage": 13,
    "totalAmount": 7068,
    "finalAmount": 6149.16
  },
  {
    "customerId": "CUST-37188",
    "productId": "PROD-1996",
    "quantity": 4,
    "pricePerUnit": 628,
    "discountPercentage": 15,
    "totalAmount": 2512,
    "finalAmount": 2135.2
  },
  {
    "customerId": "CUST-97326",
    "productId": "PROD-5713",
    "quantity": 2,
    "pricePerUnit": 2082,
    "discountPercentage": 4,
    "totalAmount": 4164,
    "finalAmount": 3997.44
  },
  {
    "customerId": "CUST-45696",
    "productId": "PROD-1424",
    "quantity": 4,
    "pricePerUnit": 1581,
    "discountPercentage": 4,
    "totalAmount": 6324,
    "finalAmount": 6071.04
  },
  {
    "customerId": "CUST-60978",
    "productId": "PROD-6246",
    "quantity": 1,
    "pricePerUnit": 743,
    "discountPercentage": 40,
    "totalAmount": 743,
    "finalAmount": 445.8
  },
  {
    "customerId": "CUST-48950",
    "productId": "PROD-7195",
    "quantity": 5,
    "pricePerUnit": 4435,
    "discountPercentage": 23,
    "totalAmount": 22175,
    "finalAmount": 17074.75
  },
  {
    "customerId": "CUST-96643",
    "productId": "PROD-2606",
    "quantity": 4,
    "pricePerUnit": 3330,
    "discountPercentage": 40,
    "totalAmount": 13320,
    "finalAmount": 7992
  },
  {
    "customerId": "CUST-34702",
    "productId": "PROD-2901",
    "quantity": 3,
    "pricePerUnit": 4043,
    "discountPercentage": 2,
    "totalAmount": 12129,
    "finalAmount": 11886.42
  },
  {
    "customerId": "CUST-22124",
    "productId": "PROD-3105",
    "quantity": 2,
    "pricePerUnit": 2715,
    "discountPercentage": 26,
    "totalAmount": 5430,
    "finalAmount": 4018.2
  },
  {
    "customerId": "CUST-75119",
    "productId": "PROD-7241",
    "quantity": 2,
    "pricePerUnit": 2218,
    "discountPercentage": 13,
    "totalAmount": 4436,
    "finalAmount": 3859.32
  },
  {
    "customerId": "CUST-43573",
    "productId": "PROD-2660",
    "quantity": 3,
    "pricePerUnit": 2529,
    "discountPercentage": 31,
    "totalAmount": 7587,
    "finalAmount": 5235.03
  },
  {
    "customerId": "CUST-75148",
    "productId": "PROD-8198",
    "quantity": 5,
    "pricePerUnit": 1370,
    "discountPercentage": 37,
    "totalAmount": 6850,
    "finalAmount": 4315.5
  },
  {
    "customerId": "CUST-39846",
    "productId": "PROD-2526",
    "quantity": 2,
    "pricePerUnit": 1333,
    "discountPercentage": 42,
    "totalAmount": 2666,
    "finalAmount": 1546.28
  },
  {
    "customerId": "CUST-76532",
    "productId": "PROD-9261",
    "quantity": 2,
    "pricePerUnit": 2244,
    "discountPercentage": 11,
    "totalAmount": 4488,
    "finalAmount": 3994.32
  },
  {
    "customerId": "CUST-27616",
    "productId": "PROD-8944",
    "quantity": 1,
    "pricePerUnit": 704,
    "discountPercentage": 10,
    "totalAmount": 704,
    "finalAmount": 633.6
  },
  {
    "customerId": "CUST-33662",
    "productId": "PROD-3771",
    "quantity": 2,
    "pricePerUnit": 3342,
    "discountPercentage": 9,
    "totalAmount": 6684,
    "finalAmount": 6082.44
  },
  {
    "customerId": "CUST-88385",
    "productId": "PROD-1619",
    "quantity": 5,
    "pricePerUnit": 4342,
    "discountPercentage": 45,
    "totalAmount": 21710,
    "finalAmount": 11940.5
  },
  {
    "customerId": "CUST-62472",
    "productId": "PROD-9700",
    "quantity": 4,
    "pricePerUnit": 3097,
    "discountPercentage": 20,
    "totalAmount": 12388,
    "finalAmount": 9910.4
  },
  {
    "customerId": "CUST-49711",
    "productId": "PROD-6533",
    "quantity": 2,
    "pricePerUnit": 4040,
    "discountPercentage": 14,
    "totalAmount": 8080,
    "finalAmount": 6948.8
  },
  {
    "customerId": "CUST-58077",
    "productId": "PROD-6798",
    "quantity": 3,
    "pricePerUnit": 1142,
    "discountPercentage": 5,
    "totalAmount": 3426,
    "finalAmount": 3254.7
  },
  {
    "customerId": "CUST-16365",
    "productId": "PROD-5345",
    "quantity": 1,
    "pricePerUnit": 4161,
    "discountPercentage": 28,
    "totalAmount": 4161,
    "finalAmount": 2995.92
  },
  {
    "customerId": "CUST-53267",
    "productId": "PROD-3498",
    "quantity": 3,
    "pricePerUnit": 3043,
    "discountPercentage": 6,
    "totalAmount": 9129,
    "finalAmount": 8581.26
  },
  {
    "customerId": "CUST-83711",
    "productId": "PROD-3940",
    "quantity": 2,
    "pricePerUnit": 1115,
    "discountPercentage": 35,
    "totalAmount": 2230,
    "finalAmount": 1449.5
  },
  {
    "customerId": "CUST-41820",
    "productId": "PROD-4008",
    "quantity": 5,
    "pricePerUnit": 3494,
    "discountPercentage": 49,
    "totalAmount": 17470,
    "finalAmount": 8909.7
  },
  {
    "customerId": "CUST-30684",
    "productId": "PROD-4608",
    "quantity": 2,
    "pricePerUnit": 2602,
    "discountPercentage": 37,
    "totalAmount": 5204,
    "finalAmount": 3278.52
  },
  {
    "customerId": "CUST-93760",
    "productId": "PROD-7731",
    "quantity": 3,
    "pricePerUnit": 2827,
    "discountPercentage": 50,
    "totalAmount": 8481,
    "finalAmount": 4240.5
  },
  {
    "customerId": "CUST-57999",
    "productId": "PROD-3428",
    "quantity": 1,
    "pricePerUnit": 2264,
    "discountPercentage": 32,
    "totalAmount": 2264,
    "finalAmount": 1539.52
  },
  {
    "customerId": "CUST-74154",
    "productId": "PROD-1385",
    "quantity": 3,
    "pricePerUnit": 2612,
    "discountPercentage": 40,
    "totalAmount": 7836,
    "finalAmount": 4701.6
  },
  {
    "customerId": "CUST-27589",
    "productId": "PROD-5228",
    "quantity": 5,
    "pricePerUnit": 2997,
    "discountPercentage": 43,
    "totalAmount": 14985,
    "finalAmount": 8541.45
  },
  {
    "customerId": "CUST-97042",
    "productId": "PROD-7329",
    "quantity": 1,
    "pricePerUnit": 4914,
    "discountPercentage": 7,
    "totalAmount": 4914,
    "finalAmount": 4570.02
  },
  {
    "customerId": "CUST-22361",
    "productId": "PROD-7100",
    "quantity": 2,
    "pricePerUnit": 2966,
    "discountPercentage": 31,
    "totalAmount": 5932,
    "finalAmount": 4093.08
  },
  {
    "customerId": "CUST-89655",
    "productId": "PROD-6703",
    "quantity": 1,
    "pricePerUnit": 1113,
    "discountPercentage": 0,
    "totalAmount": 1113,
    "finalAmount": 1113
  },
  {
    "customerId": "CUST-29837",
    "productId": "PROD-7476",
    "quantity": 4,
    "pricePerUnit": 2747,
    "discountPercentage": 6,
    "totalAmount": 10988,
    "finalAmount": 10328.72
  },
  {
    "customerId": "CUST-66044",
    "productId": "PROD-5526",
    "quantity": 5,
    "pricePerUnit": 3113,
    "discountPercentage": 23,
    "totalAmount": 15565,
    "finalAmount": 11985.05
  },
  {
    "customerId": "CUST-63892",
    "productId": "PROD-9501",
    "quantity": 5,
    "pricePerUnit": 1630,
    "discountPercentage": 12,
    "totalAmount": 8150,
    "finalAmount": 7172
  },
  {
    "customerId": "CUST-98403",
    "productId": "PROD-2798",
    "quantity": 2,
    "pricePerUnit": 2388,
    "discountPercentage": 43,
    "totalAmount": 4776,
    "finalAmount": 2722.32
  },
  {
    "customerId": "CUST-89319",
    "productId": "PROD-8460",
    "quantity": 4,
    "pricePerUnit": 1317,
    "discountPercentage": 39,
    "totalAmount": 5268,
    "finalAmount": 3213.48
  },
  {
    "customerId": "CUST-46577",
    "productId": "PROD-5478",
    "quantity": 2,
    "pricePerUnit": 2010,
    "discountPercentage": 23,
    "totalAmount": 4020,
    "finalAmount": 3095.4
  },
  {
    "customerId": "CUST-91644",
    "productId": "PROD-7012",
    "quantity": 2,
    "pricePerUnit": 4683,
    "discountPercentage": 19,
    "totalAmount": 9366,
    "finalAmount": 7586.46
  },
  {
    "customerId": "CUST-95721",
    "productId": "PROD-8937",
    "quantity": 5,
    "pricePerUnit": 2617,
    "discountPercentage": 2,
    "totalAmount": 13085,
    "finalAmount": 12823.3
  },
  {
    "customerId": "CUST-24167",
    "productId": "PROD-5332",
    "quantity": 2,
    "pricePerUnit": 2829,
    "discountPercentage": 44,
    "totalAmount": 5658,
    "finalAmount": 3168.48
  },
  {
    "customerId": "CUST-40952",
    "productId": "PROD-1451",
    "quantity": 1,
    "pricePerUnit": 2634,
    "discountPercentage": 21,
    "totalAmount": 2634,
    "finalAmount": 2080.86
  },
  {
    "customerId": "CUST-64262",
    "productId": "PROD-5410",
    "quantity": 4,
    "pricePerUnit": 1654,
    "discountPercentage": 8,
    "totalAmount": 6616,
    "finalAmount": 6086.72
  },
  {
    "customerId": "CUST-22322",
    "productId": "PROD-4854",
    "quantity": 2,
    "pricePerUnit": 1364,
    "discountPercentage": 1,
    "totalAmount": 2728,
    "finalAmount": 2700.72
  },
  {
    "customerId": "CUST-33500",
    "productId": "PROD-5173",
    "quantity": 5,
    "pricePerUnit": 379,
    "discountPercentage": 32,
    "totalAmount": 1895,
    "finalAmount": 1288.6
  },
  {
    "customerId": "CUST-69876",
    "productId": "PROD-8823",
    "quantity": 1,
    "pricePerUnit": 1845,
    "discountPercentage": 16,
    "totalAmount": 1845,
    "finalAmount": 1549.8
  },
  {
    "customerId": "CUST-77962",
    "productId": "PROD-8586",
    "quantity": 3,
    "pricePerUnit": 154,
    "discountPercentage": 45,
    "totalAmount": 462,
    "finalAmount": 254.1
  },
  {
    "customerId": "CUST-64820",
    "productId": "PROD-5597",
    "quantity": 3,
    "pricePerUnit": 1223,
    "discountPercentage": 33,
    "totalAmount": 3669,
    "finalAmount": 2458.23
  },
  {
    "customerId": "CUST-42985",
    "productId": "PROD-5160",
    "quantity": 1,
    "pricePerUnit": 2735,
    "discountPercentage": 16,
    "totalAmount": 2735,
    "finalAmount": 2297.4
  },
  {
    "customerId": "CUST-84689",
    "productId": "PROD-4856",
    "quantity": 3,
    "pricePerUnit": 3328,
    "discountPercentage": 12,
    "totalAmount": 9984,
    "finalAmount": 8785.92
  },
  {
    "customerId": "CUST-65022",
    "productId": "PROD-1056",
    "quantity": 4,
    "pricePerUnit": 4946,
    "discountPercentage": 14,
    "totalAmount": 19784,
    "finalAmount": 17014.24
  },
  {
    "customerId": "CUST-40788",
    "productId": "PROD-5278",
    "quantity": 5,
    "pricePerUnit": 2306,
    "discountPercentage": 2,
    "totalAmount": 11530,
    "finalAmount": 11299.4
  },
  {
    "customerId": "CUST-76215",
    "productId": "PROD-9023",
    "quantity": 3,
    "pricePerUnit": 1838,
    "discountPercentage": 16,
    "totalAmount": 5514,
    "finalAmount": 4631.76
  },
  {
    "customerId": "CUST-64757",
    "productId": "PROD-9654",
    "quantity": 1,
    "pricePerUnit": 2102,
    "discountPercentage": 15,
    "totalAmount": 2102,
    "finalAmount": 1786.7
  },
  {
    "customerId": "CUST-40284",
    "productId": "PROD-4356",
    "quantity": 3,
    "pricePerUnit": 1300,
    "discountPercentage": 3,
    "totalAmount": 3900,
    "finalAmount": 3783
  },
  {
    "customerId": "CUST-86720",
    "productId": "PROD-1272",
    "quantity": 5,
    "pricePerUnit": 3133,
    "discountPercentage": 24,
    "totalAmount": 15665,
    "finalAmount": 11905.4
  },
  {
    "customerId": "CUST-11924",
    "productId": "PROD-7958",
    "quantity": 5,
    "pricePerUnit": 2401,
    "discountPercentage": 42,
    "totalAmount": 12005,
    "finalAmount": 6962.9
  },
  {
    "customerId": "CUST-57701",
    "productId": "PROD-4114",
    "quantity": 4,
    "pricePerUnit": 117,
    "discountPercentage": 0,
    "totalAmount": 468,
    "finalAmount": 468
  },
  {
    "customerId": "CUST-97246",
    "productId": "PROD-1078",
    "quantity": 4,
    "pricePerUnit": 1304,
    "discountPercentage": 45,
    "totalAmount": 5216,
    "finalAmount": 2868.8
  },
  {
    "customerId": "CUST-93381",
    "productId": "PROD-5760",
    "quantity": 5,
    "pricePerUnit": 1855,
    "discountPercentage": 50,
    "totalAmount": 9275,
    "finalAmount": 4637.5
  },
  {
    "customerId": "CUST-89710",
    "productId": "PROD-2208",
    "quantity": 1,
    "pricePerUnit": 4175,
    "discountPercentage": 33,
    "totalAmount": 4175,
    "finalAmount": 2797.25
  },
  {
    "customerId": "CUST-68051",
    "productId": "PROD-2539",
    "quantity": 1,
    "pricePerUnit": 3706,
    "discountPercentage": 41,
    "totalAmount": 3706,
    "finalAmount": 2186.54
  },
  {
    "customerId": "CUST-35951",
    "productId": "PROD-8249",
    "quantity": 2,
    "pricePerUnit": 483,
    "discountPercentage": 45,
    "totalAmount": 966,
    "finalAmount": 531.3
  },
  {
    "customerId": "CUST-94020",
    "productId": "PROD-1962",
    "quantity": 4,
    "pricePerUnit": 4195,
    "discountPercentage": 39,
    "totalAmount": 16780,
    "finalAmount": 10235.8
  },
  {
    "customerId": "CUST-87697",
    "productId": "PROD-9327",
    "quantity": 5,
    "pricePerUnit": 3599,
    "discountPercentage": 16,
    "totalAmount": 17995,
    "finalAmount": 15115.8
  },
  {
    "customerId": "CUST-79700",
    "productId": "PROD-8959",
    "quantity": 2,
    "pricePerUnit": 2916,
    "discountPercentage": 48,
    "totalAmount": 5832,
    "finalAmount": 3032.64
  },
  {
    "customerId": "CUST-51086",
    "productId": "PROD-7873",
    "quantity": 2,
    "pricePerUnit": 1401,
    "discountPercentage": 39,
    "totalAmount": 2802,
    "finalAmount": 1709.22
  },
  {
    "customerId": "CUST-82922",
    "productId": "PROD-4762",
    "quantity": 3,
    "pricePerUnit": 1725,
    "discountPercentage": 8,
    "totalAmount": 5175,
    "finalAmount": 4761
  },
  {
    "customerId": "CUST-54056",
    "productId": "PROD-8571",
    "quantity": 3,
    "pricePerUnit": 3933,
    "discountPercentage": 23,
    "totalAmount": 11799,
    "finalAmount": 9085.23
  },
  {
    "customerId": "CUST-64943",
    "productId": "PROD-3762",
    "quantity": 3,
    "pricePerUnit": 4766,
    "discountPercentage": 2,
    "totalAmount": 14298,
    "finalAmount": 14012.04
  },
  {
    "customerId": "CUST-74380",
    "productId": "PROD-6254",
    "quantity": 3,
    "pricePerUnit": 2166,
    "discountPercentage": 23,
    "totalAmount": 6498,
    "finalAmount": 5003.46
  },
  {
    "customerId": "CUST-78955",
    "productId": "PROD-4195",
    "quantity": 2,
    "pricePerUnit": 2611,
    "discountPercentage": 26,
    "totalAmount": 5222,
    "finalAmount": 3864.28
  },
  {
    "customerId": "CUST-80114",
    "productId": "PROD-8725",
    "quantity": 5,
    "pricePerUnit": 3002,
    "discountPercentage": 27,
    "totalAmount": 15010,
    "finalAmount": 10957.3
  },
  {
    "customerId": "CUST-66430",
    "productId": "PROD-6860",
    "quantity": 4,
    "pricePerUnit": 267,
    "discountPercentage": 46,
    "totalAmount": 1068,
    "finalAmount": 576.72
  },
  {
    "customerId": "CUST-66879",
    "productId": "PROD-4038",
    "quantity": 5,
    "pricePerUnit": 3522,
    "discountPercentage": 11,
    "totalAmount": 17610,
    "finalAmount": 15672.9
  },
  {
    "customerId": "CUST-22748",
    "productId": "PROD-5306",
    "quantity": 2,
    "pricePerUnit": 3350,
    "discountPercentage": 41,
    "totalAmount": 6700,
    "finalAmount": 3953
  },
  {
    "customerId": "CUST-92347",
    "productId": "PROD-7992",
    "quantity": 2,
    "pricePerUnit": 2397,
    "discountPercentage": 8,
    "totalAmount": 4794,
    "finalAmount": 4410.48
  },
  {
    "customerId": "CUST-80613",
    "productId": "PROD-3707",
    "quantity": 1,
    "pricePerUnit": 3889,
    "discountPercentage": 7,
    "totalAmount": 3889,
    "finalAmount": 3616.77
  },
  {
    "customerId": "CUST-28894",
    "productId": "PROD-2439",
    "quantity": 3,
    "pricePerUnit": 1106,
    "discountPercentage": 37,
    "totalAmount": 3318,
    "finalAmount": 2090.34
  },
  {
    "customerId": "CUST-30589",
    "productId": "PROD-7069",
    "quantity": 2,
    "pricePerUnit": 4845,
    "discountPercentage": 14,
    "totalAmount": 9690,
    "finalAmount": 8333.4
  },
  {
    "customerId": "CUST-22634",
    "productId": "PROD-6050",
    "quantity": 4,
    "pricePerUnit": 4528,
    "discountPercentage": 35,
    "totalAmount": 18112,
    "finalAmount": 11772.8
  },
  {
    "customerId": "CUST-49710",
    "productId": "PROD-1180",
    "quantity": 5,
    "pricePerUnit": 1427,
    "discountPercentage": 11,
    "totalAmount": 7135,
    "finalAmount": 6350.15
  },
  {
    "customerId": "CUST-24410",
    "productId": "PROD-1406",
    "quantity": 5,
    "pricePerUnit": 4270,
    "discountPercentage": 46,
    "totalAmount": 21350,
    "finalAmount": 11529
  },
  {
    "customerId": "CUST-22074",
    "productId": "PROD-7329",
    "quantity": 5,
    "pricePerUnit": 689,
    "discountPercentage": 47,
    "totalAmount": 3445,
    "finalAmount": 1825.85
  },
  {
    "customerId": "CUST-81781",
    "productId": "PROD-9555",
    "quantity": 5,
    "pricePerUnit": 3815,
    "discountPercentage": 3,
    "totalAmount": 19075,
    "finalAmount": 18502.75
  },
  {
    "customerId": "CUST-97812",
    "productId": "PROD-9606",
    "quantity": 1,
    "pricePerUnit": 538,
    "discountPercentage": 7,
    "totalAmount": 538,
    "finalAmount": 500.34
  },
  {
    "customerId": "CUST-21302",
    "productId": "PROD-3548",
    "quantity": 3,
    "pricePerUnit": 804,
    "discountPercentage": 9,
    "totalAmount": 2412,
    "finalAmount": 2194.92
  },
  {
    "customerId": "CUST-21984",
    "productId": "PROD-8191",
    "quantity": 3,
    "pricePerUnit": 4876,
    "discountPercentage": 49,
    "totalAmount": 14628,
    "finalAmount": 7460.28
  },
  {
    "customerId": "CUST-23400",
    "productId": "PROD-7153",
    "quantity": 3,
    "pricePerUnit": 1036,
    "discountPercentage": 34,
    "totalAmount": 3108,
    "finalAmount": 2051.28
  },
  {
    "customerId": "CUST-42863",
    "productId": "PROD-9964",
    "quantity": 2,
    "pricePerUnit": 1190,
    "discountPercentage": 41,
    "totalAmount": 2380,
    "finalAmount": 1404.2
  },
  {
    "customerId": "CUST-44288",
    "productId": "PROD-2225",
    "quantity": 4,
    "pricePerUnit": 4646,
    "discountPercentage": 16,
    "totalAmount": 18584,
    "finalAmount": 15610.56
  },
  {
    "customerId": "CUST-57926",
    "productId": "PROD-2819",
    "quantity": 5,
    "pricePerUnit": 4706,
    "discountPercentage": 23,
    "totalAmount": 23530,
    "finalAmount": 18118.1
  },
  {
    "customerId": "CUST-57512",
    "productId": "PROD-6842",
    "quantity": 4,
    "pricePerUnit": 4800,
    "discountPercentage": 18,
    "totalAmount": 19200,
    "finalAmount": 15744
  },
  {
    "customerId": "CUST-53316",
    "productId": "PROD-9498",
    "quantity": 5,
    "pricePerUnit": 3706,
    "discountPercentage": 20,
    "totalAmount": 18530,
    "finalAmount": 14824
  },
  {
    "customerId": "CUST-44818",
    "productId": "PROD-1511",
    "quantity": 2,
    "pricePerUnit": 2218,
    "discountPercentage": 1,
    "totalAmount": 4436,
    "finalAmount": 4391.64
  },
  {
    "customerId": "CUST-28369",
    "productId": "PROD-3375",
    "quantity": 5,
    "pricePerUnit": 1684,
    "discountPercentage": 36,
    "totalAmount": 8420,
    "finalAmount": 5388.8
  },
  {
    "customerId": "CUST-41769",
    "productId": "PROD-7439",
    "quantity": 1,
    "pricePerUnit": 3809,
    "discountPercentage": 46,
    "totalAmount": 3809,
    "finalAmount": 2056.86
  },
  {
    "customerId": "CUST-19441",
    "productId": "PROD-1703",
    "quantity": 4,
    "pricePerUnit": 2962,
    "discountPercentage": 37,
    "totalAmount": 11848,
    "finalAmount": 7464.24
  },
  {
    "customerId": "CUST-69638",
    "productId": "PROD-8156",
    "quantity": 5,
    "pricePerUnit": 424,
    "discountPercentage": 8,
    "totalAmount": 2120,
    "finalAmount": 1950.4
  },
  {
    "customerId": "CUST-96738",
    "productId": "PROD-7078",
    "quantity": 2,
    "pricePerUnit": 3428,
    "discountPercentage": 40,
    "totalAmount": 6856,
    "finalAmount": 4113.6
  },
  {
    "customerId": "CUST-48477",
    "productId": "PROD-4457",
    "quantity": 2,
    "pricePerUnit": 831,
    "discountPercentage": 50,
    "totalAmount": 1662,
    "finalAmount": 831
  },
  {
    "customerId": "CUST-35914",
    "productId": "PROD-4318",
    "quantity": 2,
    "pricePerUnit": 1605,
    "discountPercentage": 50,
    "totalAmount": 3210,
    "finalAmount": 1605
  },
  {
    "customerId": "CUST-76139",
    "productId": "PROD-5969",
    "quantity": 1,
    "pricePerUnit": 1666,
    "discountPercentage": 2,
    "totalAmount": 1666,
    "finalAmount": 1632.68
  },
  {
    "customerId": "CUST-44172",
    "productId": "PROD-3612",
    "quantity": 4,
    "pricePerUnit": 3995,
    "discountPercentage": 8,
    "totalAmount": 15980,
    "finalAmount": 14701.6
  },
  {
    "customerId": "CUST-80187",
    "productId": "PROD-5397",
    "quantity": 5,
    "pricePerUnit": 3996,
    "discountPercentage": 32,
    "totalAmount": 19980,
    "finalAmount": 13586.4
  },
  {
    "customerId": "CUST-44875",
    "productId": "PROD-4949",
    "quantity": 4,
    "pricePerUnit": 1827,
    "discountPercentage": 23,
    "totalAmount": 7308,
    "finalAmount": 5627.16
  },
  {
    "customerId": "CUST-77588",
    "productId": "PROD-7384",
    "quantity": 4,
    "pricePerUnit": 4000,
    "discountPercentage": 38,
    "totalAmount": 16000,
    "finalAmount": 9920
  },
  {
    "customerId": "CUST-69553",
    "productId": "PROD-8948",
    "quantity": 2,
    "pricePerUnit": 3589,
    "discountPercentage": 49,
    "totalAmount": 7178,
    "finalAmount": 3660.78
  },
  {
    "customerId": "CUST-15169",
    "productId": "PROD-8503",
    "quantity": 4,
    "pricePerUnit": 142,
    "discountPercentage": 30,
    "totalAmount": 568,
    "finalAmount": 397.6
  },
  {
    "customerId": "CUST-12022",
    "productId": "PROD-3820",
    "quantity": 3,
    "pricePerUnit": 2305,
    "discountPercentage": 35,
    "totalAmount": 6915,
    "finalAmount": 4494.75
  },
  {
    "customerId": "CUST-79761",
    "productId": "PROD-5577",
    "quantity": 1,
    "pricePerUnit": 860,
    "discountPercentage": 13,
    "totalAmount": 860,
    "finalAmount": 748.2
  },
  {
    "customerId": "CUST-65223",
    "productId": "PROD-4146",
    "quantity": 5,
    "pricePerUnit": 1801,
    "discountPercentage": 40,
    "totalAmount": 9005,
    "finalAmount": 5403
  },
  {
    "customerId": "CUST-84147",
    "productId": "PROD-2998",
    "quantity": 5,
    "pricePerUnit": 890,
    "discountPercentage": 48,
    "totalAmount": 4450,
    "finalAmount": 2314
  },
  {
    "customerId": "CUST-21373",
    "productId": "PROD-3925",
    "quantity": 2,
    "pricePerUnit": 1825,
    "discountPercentage": 4,
    "totalAmount": 3650,
    "finalAmount": 3504
  },
  {
    "customerId": "CUST-72565",
    "productId": "PROD-1776",
    "quantity": 3,
    "pricePerUnit": 3561,
    "discountPercentage": 25,
    "totalAmount": 10683,
    "finalAmount": 8012.25
  },
  {
    "customerId": "CUST-94894",
    "productId": "PROD-7275",
    "quantity": 3,
    "pricePerUnit": 4915,
    "discountPercentage": 24,
    "totalAmount": 14745,
    "finalAmount": 11206.2
  },
  {
    "customerId": "CUST-40559",
    "productId": "PROD-9257",
    "quantity": 2,
    "pricePerUnit": 4055,
    "discountPercentage": 48,
    "totalAmount": 8110,
    "finalAmount": 4217.2
  },
  {
    "customerId": "CUST-39836",
    "productId": "PROD-4365",
    "quantity": 3,
    "pricePerUnit": 2089,
    "discountPercentage": 29,
    "totalAmount": 6267,
    "finalAmount": 4449.57
  },
  {
    "customerId": "CUST-85222",
    "productId": "PROD-5209",
    "quantity": 4,
    "pricePerUnit": 1517,
    "discountPercentage": 17,
    "totalAmount": 6068,
    "finalAmount": 5036.44
  },
  {
    "customerId": "CUST-18535",
    "productId": "PROD-8338",
    "quantity": 2,
    "pricePerUnit": 1744,
    "discountPercentage": 33,
    "totalAmount": 3488,
    "finalAmount": 2336.96
  },
  {
    "customerId": "CUST-57853",
    "productId": "PROD-8539",
    "quantity": 4,
    "pricePerUnit": 833,
    "discountPercentage": 7,
    "totalAmount": 3332,
    "finalAmount": 3098.76
  },
  {
    "customerId": "CUST-35999",
    "productId": "PROD-4782",
    "quantity": 4,
    "pricePerUnit": 338,
    "discountPercentage": 15,
    "totalAmount": 1352,
    "finalAmount": 1149.2
  },
  {
    "customerId": "CUST-54299",
    "productId": "PROD-7120",
    "quantity": 5,
    "pricePerUnit": 1076,
    "discountPercentage": 48,
    "totalAmount": 5380,
    "finalAmount": 2797.6
  },
  {
    "customerId": "CUST-74665",
    "productId": "PROD-9872",
    "quantity": 2,
    "pricePerUnit": 1204,
    "discountPercentage": 11,
    "totalAmount": 2408,
    "finalAmount": 2143.12
  },
  {
    "customerId": "CUST-32567",
    "productId": "PROD-3152",
    "quantity": 1,
    "pricePerUnit": 1913,
    "discountPercentage": 3,
    "totalAmount": 1913,
    "finalAmount": 1855.61
  },
  {
    "customerId": "CUST-84249",
    "productId": "PROD-3075",
    "quantity": 1,
    "pricePerUnit": 183,
    "discountPercentage": 44,
    "totalAmount": 183,
    "finalAmount": 102.48
  },
  {
    "customerId": "CUST-29018",
    "productId": "PROD-5671",
    "quantity": 5,
    "pricePerUnit": 2694,
    "discountPercentage": 4,
    "totalAmount": 13470,
    "finalAmount": 12931.2
  },
  {
    "customerId": "CUST-13633",
    "productId": "PROD-4542",
    "quantity": 3,
    "pricePerUnit": 749,
    "discountPercentage": 20,
    "totalAmount": 2247,
    "finalAmount": 1797.6
  },
  {
    "customerId": "CUST-72609",
    "productId": "PROD-8231",
    "quantity": 5,
    "pricePerUnit": 2904,
    "discountPercentage": 35,
    "totalAmount": 14520,
    "finalAmount": 9438
  },
  {
    "customerId": "CUST-42360",
    "productId": "PROD-4065",
    "quantity": 1,
    "pricePerUnit": 1834,
    "discountPercentage": 15,
    "totalAmount": 1834,
    "finalAmount": 1558.9
  },
  {
    "customerId": "CUST-95468",
    "productId": "PROD-6922",
    "quantity": 4,
    "pricePerUnit": 2835,
    "discountPercentage": 13,
    "totalAmount": 11340,
    "finalAmount": 9865.8
  },
  {
    "customerId": "CUST-61660",
    "productId": "PROD-5162",
    "quantity": 2,
    "pricePerUnit": 1646,
    "discountPercentage": 39,
    "totalAmount": 3292,
    "finalAmount": 2008.12
  },
  {
    "customerId": "CUST-96489",
    "productId": "PROD-2289",
    "quantity": 5,
    "pricePerUnit": 2230,
    "discountPercentage": 21,
    "totalAmount": 11150,
    "finalAmount": 8808.5
  },
  {
    "customerId": "CUST-46650",
    "productId": "PROD-5531",
    "quantity": 1,
    "pricePerUnit": 688,
    "discountPercentage": 29,
    "totalAmount": 688,
    "finalAmount": 488.48
  },
  {
    "customerId": "CUST-31170",
    "productId": "PROD-3146",
    "quantity": 4,
    "pricePerUnit": 4274,
    "discountPercentage": 0,
    "totalAmount": 17096,
    "finalAmount": 17096
  },
  {
    "customerId": "CUST-82719",
    "productId": "PROD-9848",
    "quantity": 5,
    "pricePerUnit": 859,
    "discountPercentage": 14,
    "totalAmount": 4295,
    "finalAmount": 3693.7
  },
  {
    "customerId": "CUST-84873",
    "productId": "PROD-8542",
    "quantity": 5,
    "pricePerUnit": 256,
    "discountPercentage": 8,
    "totalAmount": 1280,
    "finalAmount": 1177.6
  },
  {
    "customerId": "CUST-96646",
    "productId": "PROD-5328",
    "quantity": 1,
    "pricePerUnit": 609,
    "discountPercentage": 31,
    "totalAmount": 609,
    "finalAmount": 420.21
  },
  {
    "customerId": "CUST-73494",
    "productId": "PROD-3573",
    "quantity": 2,
    "pricePerUnit": 3586,
    "discountPercentage": 9,
    "totalAmount": 7172,
    "finalAmount": 6526.52
  },
  {
    "customerId": "CUST-24638",
    "productId": "PROD-1636",
    "quantity": 3,
    "pricePerUnit": 1886,
    "discountPercentage": 9,
    "totalAmount": 5658,
    "finalAmount": 5148.78
  },
  {
    "customerId": "CUST-31185",
    "productId": "PROD-6334",
    "quantity": 1,
    "pricePerUnit": 3649,
    "discountPercentage": 44,
    "totalAmount": 3649,
    "finalAmount": 2043.44
  },
  {
    "customerId": "CUST-68135",
    "productId": "PROD-2484",
    "quantity": 5,
    "pricePerUnit": 4213,
    "discountPercentage": 24,
    "totalAmount": 21065,
    "finalAmount": 16009.4
  },
  {
    "customerId": "CUST-59288",
    "productId": "PROD-7354",
    "quantity": 1,
    "pricePerUnit": 3341,
    "discountPercentage": 30,
    "totalAmount": 3341,
    "finalAmount": 2338.7
  },
  {
    "customerId": "CUST-77345",
    "productId": "PROD-5452",
    "quantity": 2,
    "pricePerUnit": 3339,
    "discountPercentage": 25,
    "totalAmount": 6678,
    "finalAmount": 5008.5
  },
  {
    "customerId": "CUST-71762",
    "productId": "PROD-9789",
    "quantity": 4,
    "pricePerUnit": 1343,
    "discountPercentage": 22,
    "totalAmount": 5372,
    "finalAmount": 4190.16
  },
  {
    "customerId": "CUST-46595",
    "productId": "PROD-9200",
    "quantity": 3,
    "pricePerUnit": 4867,
    "discountPercentage": 43,
    "totalAmount": 14601,
    "finalAmount": 8322.57
  },
  {
    "customerId": "CUST-45965",
    "productId": "PROD-6372",
    "quantity": 3,
    "pricePerUnit": 1707,
    "discountPercentage": 8,
    "totalAmount": 5121,
    "finalAmount": 4711.32
  },
  {
    "customerId": "CUST-17236",
    "productId": "PROD-6571",
    "quantity": 3,
    "pricePerUnit": 4504,
    "discountPercentage": 27,
    "totalAmount": 13512,
    "finalAmount": 9863.76
  },
  {
    "customerId": "CUST-27474",
    "productId": "PROD-6057",
    "quantity": 2,
    "pricePerUnit": 692,
    "discountPercentage": 12,
    "totalAmount": 1384,
    "finalAmount": 1217.92
  },
  {
    "customerId": "CUST-97659",
    "productId": "PROD-4245",
    "quantity": 1,
    "pricePerUnit": 855,
    "discountPercentage": 8,
    "totalAmount": 855,
    "finalAmount": 786.6
  },
  {
    "customerId": "CUST-99268",
    "productId": "PROD-3050",
    "quantity": 5,
    "pricePerUnit": 4549,
    "discountPercentage": 33,
    "totalAmount": 22745,
    "finalAmount": 15239.15
  },
  {
    "customerId": "CUST-42488",
    "productId": "PROD-6824",
    "quantity": 1,
    "pricePerUnit": 2802,
    "discountPercentage": 28,
    "totalAmount": 2802,
    "finalAmount": 2017.44
  },
  {
    "customerId": "CUST-97633",
    "productId": "PROD-1043",
    "quantity": 4,
    "pricePerUnit": 657,
    "discountPercentage": 39,
    "totalAmount": 2628,
    "finalAmount": 1603.08
  },
  {
    "customerId": "CUST-69978",
    "productId": "PROD-6666",
    "quantity": 2,
    "pricePerUnit": 4629,
    "discountPercentage": 0,
    "totalAmount": 9258,
    "finalAmount": 9258
  },
  {
    "customerId": "CUST-16270",
    "productId": "PROD-9280",
    "quantity": 4,
    "pricePerUnit": 4977,
    "discountPercentage": 12,
    "totalAmount": 19908,
    "finalAmount": 17519.04
  },
  {
    "customerId": "CUST-56284",
    "productId": "PROD-7701",
    "quantity": 5,
    "pricePerUnit": 3007,
    "discountPercentage": 5,
    "totalAmount": 15035,
    "finalAmount": 14283.25
  },
  {
    "customerId": "CUST-77307",
    "productId": "PROD-6486",
    "quantity": 1,
    "pricePerUnit": 389,
    "discountPercentage": 26,
    "totalAmount": 389,
    "finalAmount": 287.86
  },
  {
    "customerId": "CUST-55076",
    "productId": "PROD-6058",
    "quantity": 2,
    "pricePerUnit": 397,
    "discountPercentage": 35,
    "totalAmount": 794,
    "finalAmount": 516.1
  },
  {
    "customerId": "CUST-12546",
    "productId": "PROD-3107",
    "quantity": 2,
    "pricePerUnit": 1299,
    "discountPercentage": 45,
    "totalAmount": 2598,
    "finalAmount": 1428.9
  },
  {
    "customerId": "CUST-93299",
    "productId": "PROD-4044",
    "quantity": 3,
    "pricePerUnit": 4595,
    "discountPercentage": 45,
    "totalAmount": 13785,
    "finalAmount": 7581.75
  },
  {
    "customerId": "CUST-47744",
    "productId": "PROD-4919",
    "quantity": 3,
    "pricePerUnit": 3677,
    "discountPercentage": 20,
    "totalAmount": 11031,
    "finalAmount": 8824.8
  },
  {
    "customerId": "CUST-38744",
    "productId": "PROD-1012",
    "quantity": 1,
    "pricePerUnit": 4284,
    "discountPercentage": 48,
    "totalAmount": 4284,
    "finalAmount": 2227.68
  },
  {
    "customerId": "CUST-84561",
    "productId": "PROD-2858",
    "quantity": 4,
    "pricePerUnit": 2943,
    "discountPercentage": 21,
    "totalAmount": 11772,
    "finalAmount": 9299.88
  },
  {
    "customerId": "CUST-56246",
    "productId": "PROD-5924",
    "quantity": 3,
    "pricePerUnit": 1048,
    "discountPercentage": 14,
    "totalAmount": 3144,
    "finalAmount": 2703.84
  },
  {
    "customerId": "CUST-40741",
    "productId": "PROD-2298",
    "quantity": 3,
    "pricePerUnit": 3962,
    "discountPercentage": 0,
    "totalAmount": 11886,
    "finalAmount": 11886
  },
  {
    "customerId": "CUST-20970",
    "productId": "PROD-6125",
    "quantity": 1,
    "pricePerUnit": 63,
    "discountPercentage": 1,
    "totalAmount": 63,
    "finalAmount": 62.37
  },
  {
    "customerId": "CUST-57238",
    "productId": "PROD-9466",
    "quantity": 1,
    "pricePerUnit": 3650,
    "discountPercentage": 1,
    "totalAmount": 3650,
    "finalAmount": 3613.5
  },
  {
    "customerId": "CUST-33288",
    "productId": "PROD-8683",
    "quantity": 4,
    "pricePerUnit": 1096,
    "discountPercentage": 16,
    "totalAmount": 4384,
    "finalAmount": 3682.56
  },
  {
    "customerId": "CUST-53105",
    "productId": "PROD-3801",
    "quantity": 2,
    "pricePerUnit": 3112,
    "discountPercentage": 48,
    "totalAmount": 6224,
    "finalAmount": 3236.48
  },
  {
    "customerId": "CUST-67015",
    "productId": "PROD-9046",
    "quantity": 3,
    "pricePerUnit": 600,
    "discountPercentage": 34,
    "totalAmount": 1800,
    "finalAmount": 1188
  },
  {
    "customerId": "CUST-75249",
    "productId": "PROD-9245",
    "quantity": 3,
    "pricePerUnit": 4512,
    "discountPercentage": 36,
    "totalAmount": 13536,
    "finalAmount": 8663.04
  },
  {
    "customerId": "CUST-18253",
    "productId": "PROD-8116",
    "quantity": 1,
    "pricePerUnit": 3942,
    "discountPercentage": 46,
    "totalAmount": 3942,
    "finalAmount": 2128.68
  },
  {
    "customerId": "CUST-33212",
    "productId": "PROD-7030",
    "quantity": 4,
    "pricePerUnit": 3347,
    "discountPercentage": 0,
    "totalAmount": 13388,
    "finalAmount": 13388
  },
  {
    "customerId": "CUST-50372",
    "productId": "PROD-6495",
    "quantity": 2,
    "pricePerUnit": 1331,
    "discountPercentage": 44,
    "totalAmount": 2662,
    "finalAmount": 1490.72
  },
  {
    "customerId": "CUST-18038",
    "productId": "PROD-7652",
    "quantity": 3,
    "pricePerUnit": 4359,
    "discountPercentage": 48,
    "totalAmount": 13077,
    "finalAmount": 6800.04
  },
  {
    "customerId": "CUST-52826",
    "productId": "PROD-7014",
    "quantity": 5,
    "pricePerUnit": 3700,
    "discountPercentage": 7,
    "totalAmount": 18500,
    "finalAmount": 17205
  },
  {
    "customerId": "CUST-25402",
    "productId": "PROD-3070",
    "quantity": 1,
    "pricePerUnit": 1897,
    "discountPercentage": 12,
    "totalAmount": 1897,
    "finalAmount": 1669.36
  },
  {
    "customerId": "CUST-66394",
    "productId": "PROD-6552",
    "quantity": 5,
    "pricePerUnit": 2623,
    "discountPercentage": 11,
    "totalAmount": 13115,
    "finalAmount": 11672.35
  },
  {
    "customerId": "CUST-36581",
    "productId": "PROD-3276",
    "quantity": 3,
    "pricePerUnit": 2196,
    "discountPercentage": 1,
    "totalAmount": 6588,
    "finalAmount": 6522.12
  },
  {
    "customerId": "CUST-55360",
    "productId": "PROD-6632",
    "quantity": 1,
    "pricePerUnit": 4464,
    "discountPercentage": 45,
    "totalAmount": 4464,
    "finalAmount": 2455.2
  },
  {
    "customerId": "CUST-48810",
    "productId": "PROD-1726",
    "quantity": 4,
    "pricePerUnit": 4767,
    "discountPercentage": 29,
    "totalAmount": 19068,
    "finalAmount": 13538.28
  },
  {
    "customerId": "CUST-18029",
    "productId": "PROD-5816",
    "quantity": 5,
    "pricePerUnit": 1494,
    "discountPercentage": 25,
    "totalAmount": 7470,
    "finalAmount": 5602.5
  },
  {
    "customerId": "CUST-58923",
    "productId": "PROD-5299",
    "quantity": 1,
    "pricePerUnit": 418,
    "discountPercentage": 29,
    "totalAmount": 418,
    "finalAmount": 296.78
  },
  {
    "customerId": "CUST-92997",
    "productId": "PROD-7058",
    "quantity": 4,
    "pricePerUnit": 1104,
    "discountPercentage": 11,
    "totalAmount": 4416,
    "finalAmount": 3930.24
  },
  {
    "customerId": "CUST-20539",
    "productId": "PROD-2632",
    "quantity": 5,
    "pricePerUnit": 2059,
    "discountPercentage": 33,
    "totalAmount": 10295,
    "finalAmount": 6897.65
  },
  {
    "customerId": "CUST-17558",
    "productId": "PROD-4126",
    "quantity": 5,
    "pricePerUnit": 2935,
    "discountPercentage": 44,
    "totalAmount": 14675,
    "finalAmount": 8218
  },
  {
    "customerId": "CUST-53093",
    "productId": "PROD-4618",
    "quantity": 5,
    "pricePerUnit": 3598,
    "discountPercentage": 12,
    "totalAmount": 17990,
    "finalAmount": 15831.2
  },
  {
    "customerId": "CUST-50262",
    "productId": "PROD-4773",
    "quantity": 1,
    "pricePerUnit": 475,
    "discountPercentage": 50,
    "totalAmount": 475,
    "finalAmount": 237.5
  },
  {
    "customerId": "CUST-58150",
    "productId": "PROD-1427",
    "quantity": 3,
    "pricePerUnit": 3196,
    "discountPercentage": 21,
    "totalAmount": 9588,
    "finalAmount": 7574.52
  },
  {
    "customerId": "CUST-73599",
    "productId": "PROD-7255",
    "quantity": 5,
    "pricePerUnit": 2429,
    "discountPercentage": 22,
    "totalAmount": 12145,
    "finalAmount": 9473.1
  },
  {
    "customerId": "CUST-24393",
    "productId": "PROD-2566",
    "quantity": 4,
    "pricePerUnit": 1795,
    "discountPercentage": 33,
    "totalAmount": 7180,
    "finalAmount": 4810.6
  },
  {
    "customerId": "CUST-34287",
    "productId": "PROD-9121",
    "quantity": 1,
    "pricePerUnit": 4180,
    "discountPercentage": 11,
    "totalAmount": 4180,
    "finalAmount": 3720.2
  },
  {
    "customerId": "CUST-72495",
    "productId": "PROD-6710",
    "quantity": 4,
    "pricePerUnit": 1285,
    "discountPercentage": 9,
    "totalAmount": 5140,
    "finalAmount": 4677.4
  },
  {
    "customerId": "CUST-32940",
    "productId": "PROD-1702",
    "quantity": 2,
    "pricePerUnit": 1311,
    "discountPercentage": 20,
    "totalAmount": 2622,
    "finalAmount": 2097.6
  },
  {
    "customerId": "CUST-44564",
    "productId": "PROD-5744",
    "quantity": 4,
    "pricePerUnit": 3288,
    "discountPercentage": 23,
    "totalAmount": 13152,
    "finalAmount": 10127.04
  },
  {
    "customerId": "CUST-27878",
    "productId": "PROD-7746",
    "quantity": 4,
    "pricePerUnit": 3334,
    "discountPercentage": 39,
    "totalAmount": 13336,
    "finalAmount": 8134.96
  },
  {
    "customerId": "CUST-70462",
    "productId": "PROD-4008",
    "quantity": 2,
    "pricePerUnit": 1826,
    "discountPercentage": 17,
    "totalAmount": 3652,
    "finalAmount": 3031.16
  },
  {
    "customerId": "CUST-46248",
    "productId": "PROD-5322",
    "quantity": 4,
    "pricePerUnit": 4145,
    "discountPercentage": 45,
    "totalAmount": 16580,
    "finalAmount": 9119
  },
  {
    "customerId": "CUST-31064",
    "productId": "PROD-6142",
    "quantity": 2,
    "pricePerUnit": 532,
    "discountPercentage": 1,
    "totalAmount": 1064,
    "finalAmount": 1053.36
  },
  {
    "customerId": "CUST-64815",
    "productId": "PROD-5401",
    "quantity": 3,
    "pricePerUnit": 4184,
    "discountPercentage": 18,
    "totalAmount": 12552,
    "finalAmount": 10292.64
  },
  {
    "customerId": "CUST-58649",
    "productId": "PROD-2972",
    "quantity": 3,
    "pricePerUnit": 2391,
    "discountPercentage": 12,
    "totalAmount": 7173,
    "finalAmount": 6312.24
  },
  {
    "customerId": "CUST-44047",
    "productId": "PROD-3125",
    "quantity": 4,
    "pricePerUnit": 1469,
    "discountPercentage": 34,
    "totalAmount": 5876,
    "finalAmount": 3878.16
  },
  {
    "customerId": "CUST-17954",
    "productId": "PROD-2386",
    "quantity": 4,
    "pricePerUnit": 4041,
    "discountPercentage": 27,
    "totalAmount": 16164,
    "finalAmount": 11799.72
  },
  {
    "customerId": "CUST-80066",
    "productId": "PROD-1789",
    "quantity": 5,
    "pricePerUnit": 465,
    "discountPercentage": 4,
    "totalAmount": 2325,
    "finalAmount": 2232
  },
  {
    "customerId": "CUST-15111",
    "productId": "PROD-5334",
    "quantity": 2,
    "pricePerUnit": 718,
    "discountPercentage": 33,
    "totalAmount": 1436,
    "finalAmount": 962.12
  },
  {
    "customerId": "CUST-68568",
    "productId": "PROD-3208",
    "quantity": 2,
    "pricePerUnit": 4888,
    "discountPercentage": 40,
    "totalAmount": 9776,
    "finalAmount": 5865.6
  },
  {
    "customerId": "CUST-88169",
    "productId": "PROD-5240",
    "quantity": 5,
    "pricePerUnit": 4978,
    "discountPercentage": 10,
    "totalAmount": 24890,
    "finalAmount": 22401
  },
  {
    "customerId": "CUST-82661",
    "productId": "PROD-2342",
    "quantity": 5,
    "pricePerUnit": 201,
    "discountPercentage": 49,
    "totalAmount": 1005,
    "finalAmount": 512.55
  },
  {
    "customerId": "CUST-73252",
    "productId": "PROD-7965",
    "quantity": 5,
    "pricePerUnit": 4178,
    "discountPercentage": 46,
    "totalAmount": 20890,
    "finalAmount": 11280.6
  },
  {
    "customerId": "CUST-90962",
    "productId": "PROD-4481",
    "quantity": 1,
    "pricePerUnit": 1075,
    "discountPercentage": 41,
    "totalAmount": 1075,
    "finalAmount": 634.25
  },
  {
    "customerId": "CUST-79586",
    "productId": "PROD-2778",
    "quantity": 5,
    "pricePerUnit": 3862,
    "discountPercentage": 20,
    "totalAmount": 19310,
    "finalAmount": 15448
  },
  {
    "customerId": "CUST-13120",
    "productId": "PROD-9381",
    "quantity": 4,
    "pricePerUnit": 2101,
    "discountPercentage": 18,
    "totalAmount": 8404,
    "finalAmount": 6891.28
  },
  {
    "customerId": "CUST-17070",
    "productId": "PROD-7923",
    "quantity": 5,
    "pricePerUnit": 1584,
    "discountPercentage": 49,
    "totalAmount": 7920,
    "finalAmount": 4039.2
  },
  {
    "customerId": "CUST-36370",
    "productId": "PROD-4059",
    "quantity": 3,
    "pricePerUnit": 3958,
    "discountPercentage": 7,
    "totalAmount": 11874,
    "finalAmount": 11042.82
  },
  {
    "customerId": "CUST-56045",
    "productId": "PROD-5762",
    "quantity": 4,
    "pricePerUnit": 3475,
    "discountPercentage": 35,
    "totalAmount": 13900,
    "finalAmount": 9035
  },
  {
    "customerId": "CUST-82524",
    "productId": "PROD-3284",
    "quantity": 3,
    "pricePerUnit": 4629,
    "discountPercentage": 42,
    "totalAmount": 13887,
    "finalAmount": 8054.46
  },
  {
    "customerId": "CUST-16955",
    "productId": "PROD-1683",
    "quantity": 3,
    "pricePerUnit": 585,
    "discountPercentage": 37,
    "totalAmount": 1755,
    "finalAmount": 1105.65
  },
  {
    "customerId": "CUST-63987",
    "productId": "PROD-4583",
    "quantity": 1,
    "pricePerUnit": 1551,
    "discountPercentage": 10,
    "totalAmount": 1551,
    "finalAmount": 1395.9
  },

  {
    "customerId": "CUST-17544",
    "productId": "PROD-5636",
    "quantity": 3,
    "pricePerUnit": 1654,
    "discountPercentage": 40.0,
    "totalAmount": 4962,
    "finalAmount": 2977.2
  },
  {
    "customerId": "CUST-50216",
    "productId": "PROD-8951",
    "quantity": 5,
    "pricePerUnit": 2639,
    "discountPercentage": 30.0,
    "totalAmount": 13195,
    "finalAmount": 9236.5
  },
  {
    "customerId": "CUST-36464",
    "productId": "PROD-2889",
    "quantity": 4,
    "pricePerUnit": 3883,
    "discountPercentage": 30.0,
    "totalAmount": 15532,
    "finalAmount": 10872.4
  },
  {
    "customerId": "CUST-83727",
    "productId": "PROD-6749",
    "quantity": 2,
    "pricePerUnit": 997,
    "discountPercentage": 17.0,
    "totalAmount": 1994,
    "finalAmount": 1655.02
  },
  {
    "customerId": "CUST-20073",
    "productId": "PROD-8873",
    "quantity": 4,
    "pricePerUnit": 4192,
    "discountPercentage": 45.0,
    "totalAmount": 16768,
    "finalAmount": 9222.4
  },
  {
    "customerId": "CUST-96992",
    "productId": "PROD-5900",
    "quantity": 4,
    "pricePerUnit": 1471,
    "discountPercentage": 17,
    "totalAmount": 5884,
    "finalAmount": 4883.72
  },
  {
    "customerId": "CUST-63393",
    "productId": "PROD-7522",
    "quantity": 4,
    "pricePerUnit": 1456,
    "discountPercentage": 39,
    "totalAmount": 5824,
    "finalAmount": 3552.64
  },
  {
    "customerId": "CUST-83457",
    "productId": "PROD-6363",
    "quantity": 5,
    "pricePerUnit": 2883,
    "discountPercentage": 20,
    "totalAmount": 14415,
    "finalAmount": 11532
  },
  {
    "customerId": "CUST-44253",
    "productId": "PROD-9778",
    "quantity": 5,
    "pricePerUnit": 572,
    "discountPercentage": 43,
    "totalAmount": 2860,
    "finalAmount": 1630.2
  },
  {
    "customerId": "CUST-14874",
    "productId": "PROD-1486",
    "quantity": 5,
    "pricePerUnit": 1499,
    "discountPercentage": 28,
    "totalAmount": 7495,
    "finalAmount": 5396.4
  },
  {
    "customerId": "CUST-78588",
    "productId": "PROD-5539",
    "quantity": 2,
    "pricePerUnit": 469,
    "discountPercentage": 20,
    "totalAmount": 938,
    "finalAmount": 750.4
  },
  {
    "customerId": "CUST-24394",
    "productId": "PROD-5032",
    "quantity": 5,
    "pricePerUnit": 2923,
    "discountPercentage": 32,
    "totalAmount": 14615,
    "finalAmount": 9938.2
  },
  {
    "customerId": "CUST-53605",
    "productId": "PROD-5892",
    "quantity": 5,
    "pricePerUnit": 212,
    "discountPercentage": 0,
    "totalAmount": 1060,
    "finalAmount": 1060
  },
  {
    "customerId": "CUST-71357",
    "productId": "PROD-6123",
    "quantity": 5,
    "pricePerUnit": 1383,
    "discountPercentage": 29,
    "totalAmount": 6915,
    "finalAmount": 4909.65
  },
  {
    "customerId": "CUST-40127",
    "productId": "PROD-9094",
    "quantity": 1,
    "pricePerUnit": 963,
    "discountPercentage": 29,
    "totalAmount": 963,
    "finalAmount": 683.73
  },
  {
    "customerId": "CUST-80252",
    "productId": "PROD-2217",
    "quantity": 3,
    "pricePerUnit": 4271,
    "discountPercentage": 35,
    "totalAmount": 12813,
    "finalAmount": 8328.45
  },
  {
    "customerId": "CUST-17502",
    "productId": "PROD-5450",
    "quantity": 4,
    "pricePerUnit": 3159,
    "discountPercentage": 12,
    "totalAmount": 12636,
    "finalAmount": 11119.68
  },
  {
    "customerId": "CUST-10946",
    "productId": "PROD-2442",
    "quantity": 1,
    "pricePerUnit": 3403,
    "discountPercentage": 16,
    "totalAmount": 3403,
    "finalAmount": 2858.52
  },
  {
    "customerId": "CUST-22305",
    "productId": "PROD-6676",
    "quantity": 5,
    "pricePerUnit": 868,
    "discountPercentage": 44,
    "totalAmount": 4340,
    "finalAmount": 2430.4
  },
  {
    "customerId": "CUST-91695",
    "productId": "PROD-7627",
    "quantity": 4,
    "pricePerUnit": 2757,
    "discountPercentage": 29,
    "totalAmount": 11028,
    "finalAmount": 7829.88
  },
  {
    "customerId": "CUST-37197",
    "productId": "PROD-5905",
    "quantity": 4,
    "pricePerUnit": 2008,
    "discountPercentage": 45,
    "totalAmount": 8032,
    "finalAmount": 4417.6
  },
  {
    "customerId": "CUST-74924",
    "productId": "PROD-1395",
    "quantity": 3,
    "pricePerUnit": 3004,
    "discountPercentage": 37,
    "totalAmount": 9012,
    "finalAmount": 5677.56
  },
  {
    "customerId": "CUST-19225",
    "productId": "PROD-1382",
    "quantity": 2,
    "pricePerUnit": 379,
    "discountPercentage": 25,
    "totalAmount": 758,
    "finalAmount": 568.5
  },
  {
    "customerId": "CUST-99631",
    "productId": "PROD-8042",
    "quantity": 2,
    "pricePerUnit": 2878,
    "discountPercentage": 33,
    "totalAmount": 5756,
    "finalAmount": 3856.52
  },
  {
    "customerId": "CUST-24367",
    "productId": "PROD-3212",
    "quantity": 5,
    "pricePerUnit": 1294,
    "discountPercentage": 16,
    "totalAmount": 6470,
    "finalAmount": 5434.8
  },
  {
    "customerId": "CUST-19939",
    "productId": "PROD-7187",
    "quantity": 1,
    "pricePerUnit": 1277,
    "discountPercentage": 31,
    "totalAmount": 1277,
    "finalAmount": 881.13
  },
  {
    "customerId": "CUST-19712",
    "productId": "PROD-1161",
    "quantity": 1,
    "pricePerUnit": 4955,
    "discountPercentage": 22,
    "totalAmount": 4955,
    "finalAmount": 3864.9
  },
  {
    "customerId": "CUST-68814",
    "productId": "PROD-7874",
    "quantity": 4,
    "pricePerUnit": 4495,
    "discountPercentage": 30,
    "totalAmount": 17980,
    "finalAmount": 12586
  },
  {
    "customerId": "CUST-11244",
    "productId": "PROD-2534",
    "quantity": 5,
    "pricePerUnit": 857,
    "discountPercentage": 13,
    "totalAmount": 4285,
    "finalAmount": 3727.95
  },
  {
    "customerId": "CUST-55149",
    "productId": "PROD-2466",
    "quantity": 2,
    "pricePerUnit": 4980,
    "discountPercentage": 1,
    "totalAmount": 9960,
    "finalAmount": 9860.4
  },
  {
    "customerId": "CUST-21692",
    "productId": "PROD-4986",
    "quantity": 1,
    "pricePerUnit": 4220,
    "discountPercentage": 32,
    "totalAmount": 4220,
    "finalAmount": 2869.6
  },
  {
    "customerId": "CUST-25413",
    "productId": "PROD-5750",
    "quantity": 5,
    "pricePerUnit": 4962,
    "discountPercentage": 20,
    "totalAmount": 24810,
    "finalAmount": 19848
  },
  {
    "customerId": "CUST-94943",
    "productId": "PROD-4752",
    "quantity": 4,
    "pricePerUnit": 4099,
    "discountPercentage": 45,
    "totalAmount": 16396,
    "finalAmount": 9017.8
  },
  {
    "customerId": "CUST-61631",
    "productId": "PROD-3305",
    "quantity": 3,
    "pricePerUnit": 3730,
    "discountPercentage": 23,
    "totalAmount": 11190,
    "finalAmount": 8616.3
  },
  {
    "customerId": "CUST-42384",
    "productId": "PROD-5635",
    "quantity": 3,
    "pricePerUnit": 2188,
    "discountPercentage": 32,
    "totalAmount": 6564,
    "finalAmount": 4463.52
  },
  {
    "customerId": "CUST-65639",
    "productId": "PROD-2785",
    "quantity": 1,
    "pricePerUnit": 3079,
    "discountPercentage": 50,
    "totalAmount": 3079,
    "finalAmount": 1539.5
  },
  {
    "customerId": "CUST-33728",
    "productId": "PROD-9211",
    "quantity": 3,
    "pricePerUnit": 1719,
    "discountPercentage": 8,
    "totalAmount": 5157,
    "finalAmount": 4744.44
  },
  {
    "customerId": "CUST-39987",
    "productId": "PROD-6843",
    "quantity": 3,
    "pricePerUnit": 4256,
    "discountPercentage": 5,
    "totalAmount": 12768,
    "finalAmount": 12129.6
  },
  {
    "customerId": "CUST-17446",
    "productId": "PROD-6061",
    "quantity": 4,
    "pricePerUnit": 1196,
    "discountPercentage": 16,
    "totalAmount": 4784,
    "finalAmount": 4018.56
  },
  {
    "customerId": "CUST-16428",
    "productId": "PROD-7879",
    "quantity": 1,
    "pricePerUnit": 3434,
    "discountPercentage": 27,
    "totalAmount": 3434,
    "finalAmount": 2506.82
  },
  {
    "customerId": "CUST-77553",
    "productId": "PROD-3467",
    "quantity": 3,
    "pricePerUnit": 1664,
    "discountPercentage": 41,
    "totalAmount": 4992,
    "finalAmount": 2945.28
  },
  {
    "customerId": "CUST-86947",
    "productId": "PROD-3912",
    "quantity": 3,
    "pricePerUnit": 418,
    "discountPercentage": 38,
    "totalAmount": 1254,
    "finalAmount": 777.48
  },
  {
    "customerId": "CUST-15066",
    "productId": "PROD-7265",
    "quantity": 2,
    "pricePerUnit": 3424,
    "discountPercentage": 1,
    "totalAmount": 6848,
    "finalAmount": 6779.52
  },
  {
    "customerId": "CUST-68594",
    "productId": "PROD-4596",
    "quantity": 5,
    "pricePerUnit": 500,
    "discountPercentage": 48,
    "totalAmount": 2500,
    "finalAmount": 1300
  },
  {
    "customerId": "CUST-87127",
    "productId": "PROD-1674",
    "quantity": 2,
    "pricePerUnit": 4426,
    "discountPercentage": 23,
    "totalAmount": 8852,
    "finalAmount": 6816.04
  },
  {
    "customerId": "CUST-88451",
    "productId": "PROD-8318",
    "quantity": 5,
    "pricePerUnit": 1792,
    "discountPercentage": 35,
    "totalAmount": 8960,
    "finalAmount": 5824
  },
  {
    "customerId": "CUST-10743",
    "productId": "PROD-2122",
    "quantity": 2,
    "pricePerUnit": 2036,
    "discountPercentage": 42,
    "totalAmount": 4072,
    "finalAmount": 2361.76
  },
  {
    "customerId": "CUST-96529",
    "productId": "PROD-2992",
    "quantity": 1,
    "pricePerUnit": 1380,
    "discountPercentage": 32,
    "totalAmount": 1380,
    "finalAmount": 938.4
  },
  {
    "customerId": "CUST-48775",
    "productId": "PROD-4761",
    "quantity": 5,
    "pricePerUnit": 491,
    "discountPercentage": 46,
    "totalAmount": 2455,
    "finalAmount": 1325.7
  },
  {
    "customerId": "CUST-97188",
    "productId": "PROD-3924",
    "quantity": 1,
    "pricePerUnit": 3058,
    "discountPercentage": 9,
    "totalAmount": 3058,
    "finalAmount": 2782.78
  },
  {
    "customerId": "CUST-13670",
    "productId": "PROD-8759",
    "quantity": 5,
    "pricePerUnit": 80,
    "discountPercentage": 24,
    "totalAmount": 400,
    "finalAmount": 304
  },
  {
    "customerId": "CUST-19512",
    "productId": "PROD-6312",
    "quantity": 4,
    "pricePerUnit": 4097,
    "discountPercentage": 21,
    "totalAmount": 16388,
    "finalAmount": 12946.52
  },
  {
    "customerId": "CUST-54602",
    "productId": "PROD-2265",
    "quantity": 1,
    "pricePerUnit": 878,
    "discountPercentage": 37,
    "totalAmount": 878,
    "finalAmount": 553.14
  },
  {
    "customerId": "CUST-38188",
    "productId": "PROD-7353",
    "quantity": 1,
    "pricePerUnit": 4906,
    "discountPercentage": 35,
    "totalAmount": 4906,
    "finalAmount": 3188.9
  },
  {
    "customerId": "CUST-87986",
    "productId": "PROD-6650",
    "quantity": 1,
    "pricePerUnit": 76,
    "discountPercentage": 34,
    "totalAmount": 76,
    "finalAmount": 50.16
  },

]


module.exports = salesData;