const productData = [
  {
    "product_id": "PROD-8721",
    "name": "Herbal Face Wash",
    "brand": "SlikSkin",
    "category": "Beauty",
    "tags": ["organic", "skincare"]
  },
  {
    "product_id": "PROD-5451",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-8448",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-5915",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-5961",
    "name": "Herbal Face Wash",
    "brand": "SlikSkin",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "organic"]
  },
  {
    "product_id": "PROD-9434",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-2486",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "portable", "wireless"]
  },
  {
    "product_id": "PROD-9154",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "casual", "unisex"]
  },
  {
    "product_id": "PROD-7475",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "portable", "wireless"]
  },
  {
    "product_id": "PROD-2390",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "fashion"]
  },
  {
    "product_id": "PROD-7692",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "skincare"]
  },
  {
    "product_id": "PROD-3174",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "portable", "accessories"]
  },
  {
    "product_id": "PROD-8823",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "accessories"]
  },
  {
    "product_id": "PROD-6571",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["accessories", "wireless"]
  },
  {
    "product_id": "PROD-7533",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["gadgets", "accessories"]
  },
  {
    "product_id": "PROD-3386",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["gadgets", "wireless", "smart"]
  },
  {
    "product_id": "PROD-4773",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-7079",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-5761",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-9556",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "casual", "cotton"]
  },
  {
    "product_id": "PROD-7348",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-4354",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "casual"]
  },
  {
    "product_id": "PROD-3744",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "makeup"]
  },
  {
    "product_id": "PROD-6544",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-5173",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "formal"]
  },
  {
    "product_id": "PROD-4535",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "portable", "smart"]
  },
  {
    "product_id": "PROD-2257",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual", "cotton"]
  },
  {
    "product_id": "PROD-7683",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-5032",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "cotton", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-8510",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-7925",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "makeup", "organic"]
  },
  {
    "product_id": "PROD-6272",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "accessories"]
  },
  {
    "product_id": "PROD-8669",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "beauty"]
  },
  {
    "product_id": "PROD-5466",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-9137",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-5418",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-5816",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "wireless", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-3210",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "casual", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-1745",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "formal"]
  },
  {
    "product_id": "PROD-7140",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "formal"]
  },
  {
    "product_id": "PROD-7359",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton"]
  },
  {
    "product_id": "PROD-4571",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "smart"]
  },
  {
    "product_id": "PROD-7406",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "accessories", "portable"]
  },
  {
    "product_id": "PROD-2255",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-2579",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-1775",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "accessories", "smart", "wireless"]
  },
  {
    "product_id": "PROD-7195",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "smart", "wireless"]
  },
  {
    "product_id": "PROD-7136",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "makeup"]
  },
  {
    "product_id": "PROD-9309",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "casual", "unisex"]
  },
  {
    "product_id": "PROD-6315",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-8043",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "smart", "accessories"]
  },
  {
    "product_id": "PROD-1745",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "organic"]
  },
  {
    "product_id": "PROD-5547",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "smart", "accessories", "portable"]
  },
  {
    "product_id": "PROD-5772",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "accessories", "wireless", "smart"]
  },
  {
    "product_id": "PROD-8625",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "unisex", "cotton", "formal"]
  },
  {
    "product_id": "PROD-4665",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "smart"]
  },
  {
    "product_id": "PROD-1329",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-7598",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "accessories", "portable"]
  },
  {
    "product_id": "PROD-6368",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free", "beauty", "organic"]
  },
  {
    "product_id": "PROD-2810",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "casual", "cotton", "formal"]
  },
  {
    "product_id": "PROD-1058",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal"]
  },
  {
    "product_id": "PROD-3673",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-3658",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "organic"]
  },
  {
    "product_id": "PROD-1216",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "skincare"]
  },
  {
    "product_id": "PROD-8341",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-2414",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "accessories", "portable"]
  },
  {
    "product_id": "PROD-8937",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal"]
  },
  {
    "product_id": "PROD-1168",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-7493",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "cotton", "casual", "fashion"]
  },
  {
    "product_id": "PROD-8965",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic"]
  },
  {
    "product_id": "PROD-3685",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-6278",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "wireless", "gadgets", "smart"]
  },
  {
    "product_id": "PROD-5090",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-9043",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-3853",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-1463",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-8126",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-9758",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "portable", "gadgets"]
  },
  {
    "product_id": "PROD-7948",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "cotton", "unisex", "casual"]
  },
  {
    "product_id": "PROD-8364",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "organic", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-1877",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "portable", "smart", "accessories"]
  },
  {
    "product_id": "PROD-1867",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "skincare", "beauty"]
  },
  {
    "product_id": "PROD-7973",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-8307",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-6517",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "unisex", "formal"]
  },
  {
    "product_id": "PROD-7518",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "smart", "portable"]
  },
  {
    "product_id": "PROD-4196",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-7937",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "formal"]
  },
  {
    "product_id": "PROD-2468",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "skincare", "organic"]
  },
  {
    "product_id": "PROD-9186",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-4552",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "casual"]
  },
  {
    "product_id": "PROD-1202",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "skincare", "makeup"]
  },
  {
    "product_id": "PROD-8401",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "fashion"]
  },
  {
    "product_id": "PROD-2465",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "organic", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-8513",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal", "fashion", "casual"]
  },
  {
    "product_id": "PROD-3791",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["gadgets", "smart"]
  },
  {
    "product_id": "PROD-5570",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "formal", "casual"]
  },
  {
    "product_id": "PROD-4086",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "gadgets"]
  },
  {
    "product_id": "PROD-9679",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "organic", "skincare"]
  },
  {
    "product_id": "PROD-9888",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "beauty", "organic"]
  },
  {
    "product_id": "PROD-1449",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "formal"]
  },
  {
    "product_id": "PROD-7455",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "unisex"]
  },
  {
    "product_id": "PROD-9248",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "portable", "gadgets"]
  },
  {
    "product_id": "PROD-3799",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "casual", "unisex", "formal"]
  },
  {
    "product_id": "PROD-7935",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-2420",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-9888",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-2353",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton", "formal", "unisex"]
  },
  {
    "product_id": "PROD-5272",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-6952",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "portable", "accessories"]
  },
  {
    "product_id": "PROD-9427",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-6037",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "organic", "beauty", "skincare"]
  },
  {
    "product_id": "PROD-4269",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-9265",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-9397",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "formal"]
  },
  {
    "product_id": "PROD-5531",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "organic", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-2738",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "accessories", "portable"]
  },
  {
    "product_id": "PROD-2415",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "accessories"]
  },
  {
    "product_id": "PROD-4871",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-4961",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-9187",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal"]
  },
  {
    "product_id": "PROD-3685",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "formal"]
  },
  {
    "product_id": "PROD-4719",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-3676",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "wireless"]
  },
  {
    "product_id": "PROD-2039",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "smart", "accessories"]
  },
  {
    "product_id": "PROD-4197",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "casual", "formal"]
  },
  {
    "product_id": "PROD-3616",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "beauty"]
  },
  {
    "product_id": "PROD-4685",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "accessories"]
  },
  {
    "product_id": "PROD-1835",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal", "cotton"]
  },
  {
    "product_id": "PROD-1833",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-2152",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "casual"]
  },
  {
    "product_id": "PROD-1430",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "smart", "accessories"]
  },
  {
    "product_id": "PROD-1893",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "smart", "wireless"]
  },
  {
    "product_id": "PROD-9568",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "organic"]
  },
  {
    "product_id": "PROD-7007",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "fashion"]
  },
  {
    "product_id": "PROD-3245",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal", "casual"]
  },
  {
    "product_id": "PROD-9651",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-5045",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "formal", "casual", "cotton"]
  },
  {
    "product_id": "PROD-2547",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "formal", "cotton"]
  },
  {
    "product_id": "PROD-8242",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-5643",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-5918",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-6664",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-9843",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "organic", "makeup"]
  },
  {
    "product_id": "PROD-9120",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "skincare", "organic"]
  },
  {
    "product_id": "PROD-7994",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "portable", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-7657",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "portable", "smart"]
  },
  {
    "product_id": "PROD-3386",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "cotton", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-4674",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "organic"]
  },
  {
    "product_id": "PROD-7741",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-9621",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "accessories", "wireless"]
  },
  {
    "product_id": "PROD-4665",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "wireless"]
  },
  {
    "product_id": "PROD-9373",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "casual", "formal"]
  },
  {
    "product_id": "PROD-8705",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "casual", "cotton"]
  },
  {
    "product_id": "PROD-3757",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "skincare", "organic"]
  },
  {
    "product_id": "PROD-6130",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-3692",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual", "cotton"]
  },
  {
    "product_id": "PROD-3921",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-3504",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "beauty", "skincare"]
  },
  {
    "product_id": "PROD-2095",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "smart"]
  },
  {
    "product_id": "PROD-4263",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "smart"]
  },
  {
    "product_id": "PROD-9837",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-1623",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "smart", "accessories"]
  },
  {
    "product_id": "PROD-2254",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "casual", "formal"]
  },
  {
    "product_id": "PROD-6443",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "skincare"]
  },
  {
    "product_id": "PROD-3626",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-5831",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "accessories"]
  },
  {
    "product_id": "PROD-5832",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "smart", "gadgets"]
  },
  {
    "product_id": "PROD-1041",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "smart", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-4505",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-6448",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "wireless", "portable"]
  },
  {
    "product_id": "PROD-4758",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "wireless", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-9486",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-2674",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "smart", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-6660",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "formal"]
  },
  {
    "product_id": "PROD-7811",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "unisex"]
  },
  {
    "product_id": "PROD-8010",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "casual", "fashion", "formal"]
  },
  {
    "product_id": "PROD-7692",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-8804",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "formal", "unisex"]
  },
  {
    "product_id": "PROD-7703",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "wireless", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-4435",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-2709",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "skincare", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-9274",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-6762",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-8650",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "accessories"]
  },
  {
    "product_id": "PROD-6082",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-6670",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "unisex", "formal"]
  },
  {
    "product_id": "PROD-3956",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "smart", "gadgets"]
  },
  {
    "product_id": "PROD-5239",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-5728",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable"]
  },
  {
    "product_id": "PROD-8838",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual"]
  },
  {
    "product_id": "PROD-2978",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "organic"]
  },
  {
    "product_id": "PROD-9741",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-5094",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "casual", "unisex"]
  },
  {
    "product_id": "PROD-9190",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-7389",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable", "smart"]
  },
  {
    "product_id": "PROD-9272",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-1973",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "fashion"]
  },
  {
    "product_id": "PROD-6285",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "fashion", "unisex", "casual"]
  },
  {
    "product_id": "PROD-4623",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "fashion"]
  },
  {
    "product_id": "PROD-7254",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-4847",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-9259",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "smart", "accessories"]
  },
  {
    "product_id": "PROD-3486",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "casual", "fashion"]
  },
  {
    "product_id": "PROD-2358",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "portable", "accessories"]
  },
  {
    "product_id": "PROD-6323",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "unisex"]
  },
  {
    "product_id": "PROD-1433",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "organic", "makeup"]
  },
  {
    "product_id": "PROD-7024",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "wireless", "portable"]
  },
  {
    "product_id": "PROD-5407",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "accessories"]
  },
  {
    "product_id": "PROD-7376",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-5806",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "unisex", "fashion", "casual"]
  },
  {
    "product_id": "PROD-9747",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "makeup"]
  },
  {
    "product_id": "PROD-9701",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "formal", "unisex", "casual"]
  },
  {
    "product_id": "PROD-4415",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-8363",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "fashion"]
  },
  {
    "product_id": "PROD-9330",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "accessories", "smart"]
  },
  {
    "product_id": "PROD-7790",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual", "formal"]
  },
  {
    "product_id": "PROD-5444",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-9956",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual"]
  },
  {
    "product_id": "PROD-9770",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-8191",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "wireless", "accessories"]
  },
  {
    "product_id": "PROD-3726",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "smart"]
  },
  {
    "product_id": "PROD-1109",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "formal", "unisex", "casual"]
  },
  {
    "product_id": "PROD-4984",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-7138",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "smart"]
  },
  {
    "product_id": "PROD-2801",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-5673",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-8686",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "casual"]
  },
  {
    "product_id": "PROD-9656",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-6842",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "formal", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-6716",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "organic"]
  },
  {
    "product_id": "PROD-4883",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "formal"]
  },
  {
    "product_id": "PROD-8439",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "smart", "portable"]
  },
  {
    "product_id": "PROD-7299",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "skincare", "makeup"]
  },
  {
    "product_id": "PROD-6989",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex"]
  },
  {
    "product_id": "PROD-7343",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "casual", "cotton"]
  },
  {
    "product_id": "PROD-5513",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "fashion"]
  },
  {
    "product_id": "PROD-3010",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "smart", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-9664",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-4100",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable"]
  },
  {
    "product_id": "PROD-6903",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "beauty", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-9527",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-4628",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-6823",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-9852",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "formal", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-6028",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-3248",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-4754",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "unisex", "fashion", "casual"]
  },
  {
    "product_id": "PROD-3285",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "organic", "beauty"]
  },
  {
    "product_id": "PROD-9174",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "fashion", "unisex", "formal"]
  },
  {
    "product_id": "PROD-7340",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "fashion", "casual"]
  },
  {
    "product_id": "PROD-1835",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "organic"]
  },
  {
    "product_id": "PROD-7707",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-3492",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-4422",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "organic"]
  },
   {
    "product_id": "PROD-2284",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "organic", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-8970",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-8412",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "casual", "fashion"]
  },
  {
    "product_id": "PROD-3799",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-3120",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-2426",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "organic"]
  },
  {
    "product_id": "PROD-1526",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-2064",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-3536",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-9671",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "accessories", "wireless"]
  },
  {
    "product_id": "PROD-2197",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "casual", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-7794",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-7473",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "makeup"]
  },
  {
    "product_id": "PROD-8070",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-7046",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "smart"]
  },
  {
    "product_id": "PROD-5096",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-7399",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-2295",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-2890",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "accessories"]
  },
  {
    "product_id": "PROD-8410",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-9724",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-2671",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "casual", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-4455",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "formal"]
  },
  {
    "product_id": "PROD-8773",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual", "formal"]
  },
  {
    "product_id": "PROD-6114",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "accessories", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-6040",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-4246",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "organic"]
  },
  {
    "product_id": "PROD-9610",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-3448",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "accessories", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-6119",
    "name": "Wireless Headphones",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-6855",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "skincare"]
  },
  {
    "product_id": "PROD-9298",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-9442",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "cotton"]
  },
  {
    "product_id": "PROD-5803",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-8643",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "organic"]
  },
  {
    "product_id": "PROD-5888",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-4425",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "fashion", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-8837",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-5657",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-7456",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-1753",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-5266",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "beauty", "skincare"]
  },
  {
    "product_id": "PROD-6706",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-4591",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "skincare", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-9400",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "formal", "casual"]
  },
  {
    "product_id": "PROD-4965",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-6725",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-4888",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-3041",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "cotton"]
  },
  {
    "product_id": "PROD-5790",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "organic", "skincare"]
  },
  {
    "product_id": "PROD-3133",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup"]
  },
  {
    "product_id": "PROD-4990",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "formal", "casual"]
  },
  {
    "product_id": "PROD-2371",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "formal", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-7894",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "smart", "portable"]
  },
  {
    "product_id": "PROD-6082",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "portable"]
  },
  {
    "product_id": "PROD-1487",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-5968",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-5839",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-1023",
    "name": "Wireless Headphones",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "portable", "wireless"]
  },
  {
    "product_id": "PROD-7143",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "accessories"]
  },
  {
    "product_id": "PROD-7391",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "cotton"]
  },
  {
    "product_id": "PROD-4032",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "formal", "cotton"]
  },
  {
    "product_id": "PROD-7692",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-2617",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "wireless", "smart"]
  },
  {
    "product_id": "PROD-6122",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "wireless", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-9147",
    "name": "USB-C Charger",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-2036",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "accessories", "smart"]
  },
  {
    "product_id": "PROD-3553",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-5249",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton"]
  },
  {
    "product_id": "PROD-3532",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "accessories"]
  },
  {
    "product_id": "PROD-4805",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "organic", "skincare"]
  },
  {
    "product_id": "PROD-9434",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "wireless", "portable"]
  },
  {
    "product_id": "PROD-9790",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "cotton", "casual", "fashion"]
  },
  {
    "product_id": "PROD-9946",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "wireless", "smart"]
  },
  {
    "product_id": "PROD-5356",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["gadgets", "portable", "wireless"]
  },
  {
  "product_id": "PROD-6102",
  "name": "Wireless Headphones",
  "brand": "NovaGear",
  "category": "Electronics",
  "tags": ["portable", "smart", "gadgets", "accessories"]
},
{
  "product_id": "PROD-8930",
  "name": "Hydrating Face Cream",
  "brand": "PureBloom",
  "category": "Beauty",
  "tags": ["beauty", "organic", "makeup"]
},
{
  "product_id": "PROD-7007",
  "name": "Cotton T-Shirt",
  "brand": "EliteWear",
  "category": "Clothing",
  "tags": ["fashion", "cotton", "casual", "unisex"]
},
{
  "product_id": "PROD-7486",
  "name": "Gaming Mouse",
  "brand": "NovaGear",
  "category": "Electronics",
  "tags": ["accessories", "wireless"]
},
{
  "product_id": "PROD-9298",
  "name": "Hydrating Face Cream",
  "brand": "VelvetTouch",
  "category": "Beauty",
  "tags": ["skincare", "fragrance-free", "beauty", "makeup"]
},
{
  "product_id": "PROD-3447",
  "name": "Aloe Vera Gel",
  "brand": "PureBloom",
  "category": "Beauty",
  "tags": ["beauty", "makeup", "skincare"]
},
{
  "product_id": "PROD-2389",
  "name": "Matte Lipstick",
  "brand": "PureBloom",
  "category": "Beauty",
  "tags": ["makeup", "skincare"]
},
{
  "product_id": "PROD-8294",
  "name": "Herbal Face Wash",
  "brand": "VelvetTouch",
  "category": "Beauty",
  "tags": ["makeup", "organic", "beauty"]
},
{
  "product_id": "PROD-7435",
  "name": "Wireless Headphones",
  "brand": "VoltEdge",
  "category": "Electronics",
  "tags": ["smart", "gadgets"]
},
{
  "product_id": "PROD-4833",
  "name": "USB-C Charger",
  "brand": "NovaGear",
  "category": "Electronics",
  "tags": ["gadgets", "smart"]
},
{
  "product_id": "PROD-6609",
  "name": "Gaming Mouse",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["gadgets", "wireless", "smart"]
},
{
  "product_id": "PROD-4788",
  "name": "Bluetooth Speaker",
  "brand": "TechPulse",
  "category": "Electronics",
  "tags": ["wireless", "gadgets", "accessories"]
},
{
  "product_id": "PROD-3827",
  "name": "Casual Kurta",
  "brand": "StreetLayer",
  "category": "Clothing",
  "tags": ["casual", "unisex", "formal"]
},
{
  "product_id": "PROD-6730",
  "name": "Hooded Sweatshirt",
  "brand": "UrbanWeave",
  "category": "Clothing",
  "tags": ["unisex", "casual", "fashion"]
},
{
  "product_id": "PROD-1672",
  "name": "Matte Lipstick",
  "brand": "SilkSkin",
  "category": "Beauty",
  "tags": ["organic", "beauty"]
},
{
  "product_id": "PROD-3121",
  "name": "Casual Kurta",
  "brand": "StreetLayer",
  "category": "Clothing",
  "tags": ["unisex", "formal", "cotton"]
},
{
  "product_id": "PROD-2928",
  "name": "Formal Shirt",
  "brand": "UrbanWeave",
  "category": "Clothing",
  "tags": ["cotton", "casual", "unisex"]
},
{
  "product_id": "PROD-8123",
  "name": "Slim Fit Jeans",
  "brand": "UrbanWeave",
  "category": "Clothing",
  "tags": ["unisex", "formal", "fashion", "cotton"]
},
{
  "product_id": "PROD-1726",
  "name": "Bluetooth Speaker",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["portable", "accessories", "wireless", "smart"]
},
{
  "product_id": "PROD-1748",
  "name": "Aloe Vera Gel",
  "brand": "GlowEssence",
  "category": "Beauty",
  "tags": ["beauty", "fragrance-free", "organic"]
},
{
  "product_id": "PROD-9407",
  "name": "Wireless Headphones",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["gadgets", "wireless", "portable", "accessories"]
},
{
  "product_id": "PROD-9400",
  "name": "Wireless Headphones",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["smart", "gadgets", "accessories"]
},
{
  "product_id": "PROD-9779",
  "name": "Slim Fit Jeans",
  "brand": "ComfortLine",
  "category": "Clothing",
  "tags": ["unisex", "fashion", "formal"]
},
{
  "product_id": "PROD-7085",
  "name": "USB-C Charger",
  "brand": "NovaGear",
  "category": "Electronics",
  "tags": ["portable", "accessories"]
},
{
  "product_id": "PROD-8539",
  "name": "Hooded Sweatshirt",
  "brand": "UrbanWeave",
  "category": "Clothing",
  "tags": ["casual", "formal", "cotton", "fashion"]
},
{
  "product_id": "PROD-1132",
  "name": "Skin Repair Serum",
  "brand": "VelvetTouch",
  "category": "Beauty",
  "tags": ["fragrance-free", "organic", "makeup", "skincare"]
},
{
  "product_id": "PROD-4020",
  "name": "Formal Shirt",
  "brand": "ComfortLine",
  "category": "Clothing",
  "tags": ["unisex", "cotton"]
},
{
  "product_id": "PROD-7797",
  "name": "Hooded Sweatshirt",
  "brand": "EliteWear",
  "category": "Clothing",
  "tags": ["cotton", "casual", "unisex", "fashion"]
},
{
  "product_id": "PROD-3978",
  "name": "Wireless Headphones",
  "brand": "NovaGear",
  "category": "Electronics",
  "tags": ["gadgets", "portable", "accessories", "wireless"]
},
{
  "product_id": "PROD-6137",
  "name": "Bluetooth Speaker",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["gadgets", "wireless", "smart"]
},
{
  "product_id": "PROD-9338",
  "name": "Slim Fit Jeans",
  "brand": "ComfortLine",
  "category": "Clothing",
  "tags": ["unisex", "fashion"]
},
{
  "product_id": "PROD-3401",
  "name": "Cotton T-Shirt",
  "brand": "ComfortLine",
  "category": "Clothing",
  "tags": ["formal", "casual", "unisex", "fashion"]
},
{
  "product_id": "PROD-3871",
  "name": "Cotton T-Shirt",
  "brand": "StreetLayer",
  "category": "Clothing",
  "tags": ["unisex", "fashion", "casual", "cotton"]
},
{
  "product_id": "PROD-5695",
  "name": "Casual Kurta",
  "brand": "StreetLayer",
  "category": "Clothing",
  "tags": ["unisex", "formal"]
},
{
  "product_id": "PROD-1716",
  "name": "Gaming Mouse",
  "brand": "TechPulse",
  "category": "Electronics",
  "tags": ["accessories", "smart", "wireless", "gadgets"]
},
{
  "product_id": "PROD-1968",
  "name": "Hydrating Face Cream",
  "brand": "GlowEssence",
  "category": "Beauty",
  "tags": ["beauty", "organic", "fragrance-free", "skincare"]
},
{
  "product_id": "PROD-7329",
  "name": "Matte Lipstick",
  "brand": "GlowEssence",
  "category": "Beauty",
  "tags": ["organic", "makeup", "fragrance-free", "beauty"]
},
{
  "product_id": "PROD-8369",
  "name": "Formal Shirt",
  "brand": "EliteWear",
  "category": "Clothing",
  "tags": ["cotton", "unisex", "fashion", "formal"]
},
{
  "product_id": "PROD-9184",
  "name": "Formal Shirt",
  "brand": "EliteWear",
  "category": "Clothing",
  "tags": ["formal", "casual", "cotton", "unisex"]
},
{
  "product_id": "PROD-7473",
  "name": "Gaming Mouse",
  "brand": "CyberCore",
  "category": "Electronics",
  "tags": ["wireless", "gadgets", "portable", "smart"]
},
  {
    "product_id": "PROD-5113",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton", "fashion", "formal"]
  },
  {
    "product_id": "PROD-4294",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-4923",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "wireless"]
  },
  {
    "product_id": "PROD-9295",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-3349",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "casual", "unisex"]
  },
  {
    "product_id": "PROD-6714",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "cotton"]
  },
  {
    "product_id": "PROD-3972",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-6862",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "portable", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-4239",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "makeup"]
  },
  {
    "product_id": "PROD-9463",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-2371",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "organic"]
  },
  {
    "product_id": "PROD-3477",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "portable"]
  },
  {
    "product_id": "PROD-7130",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-3818",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "accessories", "portable"]
  },
  {
    "product_id": "PROD-5304",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "organic", "skincare", "makeup"]
  },
  {
    "product_id": "PROD-9926",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "unisex", "casual"]
  },
  {
    "product_id": "PROD-4260",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-5259",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-4878",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-4393",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-2986",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "beauty", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-9103",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "gadgets"]
  },
  {
    "product_id": "PROD-4748",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "portable", "smart"]
  },
  {
    "product_id": "PROD-9665",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-7930",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-1764",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "skincare", "organic"]
  },
  {
    "product_id": "PROD-5267",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "makeup", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-3117",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "portable"]
  },
  {
    "product_id": "PROD-9957",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic", "beauty"]
  },
  {
    "product_id": "PROD-8825",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "casual", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-5921",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "makeup", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-6804",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-4275",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-1735",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "casual", "fashion"]
  },
  {
    "product_id": "PROD-4323",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-4577",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "portable", "wireless", "accessories"]
  },
  {
    "product_id": "PROD-4276",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-9563",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "makeup"]
  },
  {
    "product_id": "PROD-6232",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-6282",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "organic"]
  },
  {
    "product_id": "PROD-7994",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-8819",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "organic", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-1854",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-1996",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-5713",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "accessories", "wireless"]
  },
  {
    "product_id": "PROD-1424",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "formal", "casual", "cotton"]
  },
  {
    "product_id": "PROD-6246",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-7195",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual", "fashion"]
  },
  {
    "product_id": "PROD-2606",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-2901",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-3105",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "formal"]
  },
  {
    "product_id": "PROD-7241",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic", "beauty"]
  },
  {
    "product_id": "PROD-2660",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "cotton", "formal"]
  },
  {
    "product_id": "PROD-8198",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "portable", "wireless"]
  },
  {
    "product_id": "PROD-2526",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-9261",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "organic", "skincare"]
  },
  {
    "product_id": "PROD-8944",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable"]
  },
  {
    "product_id": "PROD-3771",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "unisex", "formal", "cotton"]
  },
  {
    "product_id": "PROD-1619",
    "name": "Wireless Headphones",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-9700",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "portable", "wireless"]
  },
  {
    "product_id": "PROD-6533",
    "name": "Wireless Headphones",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "portable", "gadgets"]
  },
  {
    "product_id": "PROD-6798",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-5345",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "fashion", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-3498",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "casual", "fashion"]
  },
  {
    "product_id": "PROD-3940",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "beauty", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-4008",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "formal", "cotton"]
  },
  {
    "product_id": "PROD-4608",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "accessories"]
  },
  {
    "product_id": "PROD-7731",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "makeup"]
  },
  {
    "product_id": "PROD-3428",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-1385",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "beauty"]
  },
  {
    "product_id": "PROD-5228",
    "name": "Wireless Headphones",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "accessories", "gadgets"]
  },
  {
    "product_id": "PROD-7329",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "unisex"]
  },
  {
    "product_id": "PROD-7100",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "formal", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-6703",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-7476",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "accessories", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-5526",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "accessories", "portable"]
  },
  {
    "product_id": "PROD-9501",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "casual", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-2798",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "smart", "gadgets"]
  },
  {
    "product_id": "PROD-8460",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-5478",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "formal", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-7012",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["portable", "wireless"]
  },
  {
    "product_id": "PROD-8937",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "skincare"]
  },
  {
    "product_id": "PROD-5332",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic"]
  },
  {
    "product_id": "PROD-1451",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-5410",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "formal"]
  },
  {
    "product_id": "PROD-4854",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-5173",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual", "fashion"]
  },
  {
    "product_id": "PROD-8823",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-8586",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal", "casual"]
  },
  {
    "product_id": "PROD-5597",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "gadgets"]
  },
  {
    "product_id": "PROD-5160",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "cotton"]
  },
  {
    "product_id": "PROD-4856",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "portable", "smart"]
  },
  {
    "product_id": "PROD-1056",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "organic"]
  },
  {
    "product_id": "PROD-5278",
    "name": "Casual Kurta",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "formal"]
  },
  {
    "product_id": "PROD-9023",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "portable", "smart"]
  },
  {
    "product_id": "PROD-9654",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual", "formal"]
  },
  {
    "product_id": "PROD-4356",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "skincare"]
  },
  {
    "product_id": "PROD-1272",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "gadgets"]
  },
  {
    "product_id": "PROD-7958",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "makeup"]
  },
  {
    "product_id": "PROD-4114",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "casual"]
  },
  {
    "product_id": "PROD-1078",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal", "casual", "fashion"]
  },
  {
    "product_id": "PROD-5760",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-2208",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-2539",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "cotton"]
  },
  {
    "product_id": "PROD-8249",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "formal", "casual"]
  },
  {
    "product_id": "PROD-1962",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "cotton", "casual"]
  },
  {
    "product_id": "PROD-9327",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "casual", "formal"]
  },
  {
    "product_id": "PROD-8959",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "unisex", "formal"]
  },
  {
    "product_id": "PROD-7873",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["gadgets", "wireless"]
  },
  {
    "product_id": "PROD-4762",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-8571",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "skincare"]
  },
  {
    "product_id": "PROD-3762",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "accessories"]
  },
  {
    "product_id": "PROD-6254",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "skincare", "beauty"]
  },
  {
    "product_id": "PROD-4195",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-8725",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "organic", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-6860",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "casual", "fashion"]
  },
  {
    "product_id": "PROD-4038",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "organic", "skincare"]
  },
  {
    "product_id": "PROD-5306",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "casual", "formal"]
  },
  {
    "product_id": "PROD-7992",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-3707",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-2439",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "formal"]
  },
  {
    "product_id": "PROD-7069",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-6050",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "beauty", "fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-1180",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-1406",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-7329",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-9555",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton"]
  },
  {
    "product_id": "PROD-9606",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-3548",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "organic", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-8191",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "formal"]
  },
  {
    "product_id": "PROD-7153",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "organic"]
  },
  {
    "product_id": "PROD-9964",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion"]
  },
  {
    "product_id": "PROD-2225",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "smart", "portable"]
  },
  {
    "product_id": "PROD-2819",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-6842",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "formal", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-9498",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-1511",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "formal", "cotton", "casual"]
  },
  {
    "product_id": "PROD-3375",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-7439",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-1703",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-8156",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "formal", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-7078",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["cotton", "formal", "unisex", "casual"]
  },
  {
    "product_id": "PROD-4457",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "portable", "smart"]
  },
  {
    "product_id": "PROD-4318",
    "name": "Herbal Face Wash",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-5969",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "formal", "fashion"]
  },
  {
    "product_id": "PROD-3612",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual"]
  },
  {
    "product_id": "PROD-5397",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton"]
  },
  {
    "product_id": "PROD-4949",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "beauty", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-7384",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "cotton", "casual", "unisex"]
  },
  {
    "product_id": "PROD-8948",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-8503",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "wireless", "portable", "accessories"]
  },
  {
    "product_id": "PROD-3820",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "makeup", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-5577",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-4146",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "fashion"]
  },
  {
    "product_id": "PROD-2998",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "casual", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-3925",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-1776",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "casual", "cotton", "formal"]
  },
  {
    "product_id": "PROD-7275",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-9257",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-4365",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-5209",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["organic", "makeup", "beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-8338",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "smart"]
  },
  {
    "product_id": "PROD-8539",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion"]
  },
  {
    "product_id": "PROD-4782",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "formal", "casual"]
  },
  {
    "product_id": "PROD-7120",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "accessories", "wireless", "smart"]
  },
  {
    "product_id": "PROD-9872",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["gadgets", "wireless"]
  },
  {
    "product_id": "PROD-3152",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal", "unisex", "fashion"]
  },
  {
    "product_id": "PROD-3075",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-5671",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "beauty"]
  },
  {
    "product_id": "PROD-4542",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-8231",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-4065",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal", "casual", "fashion"]
  },
  {
    "product_id": "PROD-6922",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["formal", "cotton", "casual"]
  },
  {
    "product_id": "PROD-5162",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-2289",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "makeup"]
  },
  {
    "product_id": "PROD-5531",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-3146",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-9848",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "wireless", "accessories", "smart"]
  },
  {
    "product_id": "PROD-8542",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-5328",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "skincare"]
  },
  {
    "product_id": "PROD-3573",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-1636",
    "name": "Wireless Headphones",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-6334",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "casual", "formal"]
  },
  {
    "product_id": "PROD-2484",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "formal", "casual"]
  },
  {
    "product_id": "PROD-7354",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "skincare", "organic"]
  },
  {
    "product_id": "PROD-5452",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic", "makeup"]
  },
  {
    "product_id": "PROD-9789",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "casual"]
  },
  {
    "product_id": "PROD-9200",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "organic", "fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-6372",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "unisex", "formal"]
  },
  {
    "product_id": "PROD-6571",
    "name": "Smartwatch",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "smart", "portable"]
  },
  {
    "product_id": "PROD-6057",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["wireless", "accessories"]
  },
  {
    "product_id": "PROD-4245",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "smart", "portable"]
  },
  {
    "product_id": "PROD-3050",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "accessories", "smart"]
  },
  {
    "product_id": "PROD-6824",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "smart"]
  },
  {
    "product_id": "PROD-1043",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup", "beauty", "organic"]
  },
  {
    "product_id": "PROD-6666",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-9280",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-7701",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-6486",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "smart", "portable"]
  },
  {
    "product_id": "PROD-6058",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-3107",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-4044",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-4919",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["portable", "gadgets", "accessories", "wireless"]
  },
  {
    "product_id": "PROD-1012",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "wireless", "accessories"]
  },
  {
    "product_id": "PROD-2858",
    "name": "USB-C Charger",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "gadgets", "wireless"]
  },
  {
    "product_id": "PROD-5924",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "portable", "accessories"]
  },
  {
    "product_id": "PROD-3801",
    "name": "Smartwatch",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["gadgets", "portable", "accessories", "wireless"]
  },
  {
    "product_id": "PROD-9046",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "cotton", "fashion"]
  },
  {
    "product_id": "PROD-9245",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "casual", "cotton"]
  },
  {
    "product_id": "PROD-8116",
    "name": "Bluetooth Speaker",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "accessories"]
  },
  {
    "product_id": "PROD-7030",
    "name": "Gaming Mouse",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["accessories", "smart", "gadgets"]
  },
  {
    "product_id": "PROD-6495",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-7652",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "casual", "fashion"]
  },
  {
    "product_id": "PROD-7014",
    "name": "Matte Lipstick",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "beauty"]
  },
  {
    "product_id": "PROD-3070",
    "name": "Slim Fit Jeans",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["fashion", "formal", "casual", "unisex"]
  },
  {
    "product_id": "PROD-6552",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "skincare", "makeup", "organic"]
  },
  {
    "product_id": "PROD-3276",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "wireless", "accessories"]
  },
  {
    "product_id": "PROD-6632",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free", "organic", "beauty"]
  },
  {
    "product_id": "PROD-1726",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-5816",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "casual", "formal"]
  },
  {
    "product_id": "PROD-5299",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "fashion", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-7058",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "unisex"]
  },
  {
    "product_id": "PROD-2632",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["gadgets", "smart"]
  },
  {
    "product_id": "PROD-4126",
    "name": "USB-C Charger",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-4618",
    "name": "Herbal Face Wash",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "beauty", "skincare", "fragrance-free"]
  },
  {
    "product_id": "PROD-4773",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare"]
  },
  {
    "product_id": "PROD-1427",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "gadgets", "portable"]
  },
  {
    "product_id": "PROD-7255",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["wireless", "portable", "accessories"]
  },
  {
    "product_id": "PROD-2566",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "unisex"]
  },
  {
    "product_id": "PROD-9121",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "organic", "makeup"]
  },
  {
    "product_id": "PROD-6710",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "organic", "makeup", "beauty"]
  },
  {
    "product_id": "PROD-1702",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton", "formal"]
  },
  {
    "product_id": "PROD-5744",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-7746",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-4008",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic", "makeup", "skincare"]
  },
  {
    "product_id": "PROD-5322",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "formal", "unisex", "casual"]
  },
  {
    "product_id": "PROD-6142",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-5401",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "cotton", "fashion", "formal"]
  },
  {
    "product_id": "PROD-2972",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "smart"]
  },
  {
    "product_id": "PROD-3125",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["beauty", "organic", "makeup"]
  },
  {
    "product_id": "PROD-2386",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton", "casual"]
  },
  {
    "product_id": "PROD-1789",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "gadgets"]
  },
  {
    "product_id": "PROD-5334",
    "name": "Wireless Headphones",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "smart"]
  },
  {
    "product_id": "PROD-3208",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["makeup", "organic", "beauty"]
  },
  {
    "product_id": "PROD-5240",
    "name": "Formal Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "casual"]
  },
  {
    "product_id": "PROD-2342",
    "name": "Casual Kurta",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "fashion"]
  },
  {
    "product_id": "PROD-7965",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "formal", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-4481",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "unisex", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-2778",
    "name": "Hooded Sweatshirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "formal"]
  },
  {
    "product_id": "PROD-9381",
    "name": "Hydrating Face Cream",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-7923",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex"]
  },
  {
    "product_id": "PROD-4059",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-5762",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["portable", "accessories", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-3284",
    "name": "Slim Fit Jeans",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-1683",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-4583",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free"]
  },
  {
    "product_id": "PROD-5636",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "casual"]
  },
  {
    "product_id": "PROD-8951",
    "name": "Skin Repair Serum",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "skincare"]
  },
  {
    "product_id": "PROD-2889",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["organic", "skincare", "makeup"]
  },
  {
    "product_id": "PROD-6749",
    "name": "Formal Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "formal"]
  },
  {
    "product_id": "PROD-8873",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "portable", "wireless", "accessories"]
  },
  {
    "product_id": "PROD-9704",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-8760",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "portable", "smart"]
  },
  {
    "product_id": "PROD-2741",
    "name": "Smartwatch",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "smart", "portable", "wireless"]
  },
  {
    "product_id": "PROD-1695",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["gadgets", "portable", "smart"]
  },
  {
    "product_id": "PROD-7068",
    "name": "Bluetooth Speaker",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["accessories", "gadgets"]
  },
  {
    "product_id": "PROD-4908",
    "name": "Aloe Vera Gel",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "makeup"]
  },
  {
    "product_id": "PROD-4004",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-4888",
    "name": "Hydrating Face Cream",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-6779",
    "name": "Matte Lipstick",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["beauty", "skincare"]
  },
  {
    "product_id": "PROD-5014",
    "name": "Matte Lipstick",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["beauty", "organic", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-9532",
    "name": "Hooded Sweatshirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "casual", "fashion", "formal"]
  },
  {
    "product_id": "PROD-3391",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "organic"]
  },
  {
    "product_id": "PROD-5072",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-6167",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["cotton", "formal"]
  },
  {
    "product_id": "PROD-3474",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "fashion"]
  },
  {
    "product_id": "PROD-5900",
    "name": "Wireless Headphones",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "portable", "gadgets"]
  },
  {
    "product_id": "PROD-7522",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "makeup", "organic"]
  },
  {
    "product_id": "PROD-6363",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal", "unisex"]
  },
  {
    "product_id": "PROD-9778",
    "name": "Skin Repair Serum",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["fragrance-free", "beauty", "organic"]
  },
  {
    "product_id": "PROD-1486",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "cotton", "formal", "fashion"]
  },
  {
    "product_id": "PROD-5539",
    "name": "Gaming Mouse",
    "brand": "CyberCore",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "smart"]
  },
  {
    "product_id": "PROD-5032",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "fashion", "cotton", "unisex"]
  },
  {
    "product_id": "PROD-5892",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "skincare"]
  },
  {
    "product_id": "PROD-6123",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "fragrance-free"]
  },
  {
    "product_id": "PROD-9094",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "cotton", "formal", "unisex"]
  },
  {
    "product_id": "PROD-2217",
    "name": "Slim Fit Jeans",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["formal", "fashion", "cotton"]
  },
  {
    "product_id": "PROD-5450",
    "name": "Skin Repair Serum",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["makeup", "skincare"]
  },
  {
    "product_id": "PROD-2442",
    "name": "Formal Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["casual", "unisex"]
  },
  {
    "product_id": "PROD-6676",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "beauty"]
  },
  {
    "product_id": "PROD-7627",
    "name": "Hooded Sweatshirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "formal", "casual", "unisex"]
  },
  {
    "product_id": "PROD-5905",
    "name": "Skin Repair Serum",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["skincare", "beauty"]
  },
  {
    "product_id": "PROD-1395",
    "name": "Aloe Vera Gel",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["fragrance-free", "makeup"]
  },
  {
    "product_id": "PROD-1382",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton"]
  },
  {
    "product_id": "PROD-8042",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["casual", "formal", "fashion"]
  },
  {
    "product_id": "PROD-3212",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["beauty", "organic", "skincare"]
  },
  {
    "product_id": "PROD-7187",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "formal"]
  },
  {
    "product_id": "PROD-1161",
    "name": "Herbal Face Wash",
    "brand": "SilkSkin",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "organic"]
  },
  {
    "product_id": "PROD-7874",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["portable", "gadgets"]
  },
  {
    "product_id": "PROD-2534",
    "name": "Gaming Mouse",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["wireless", "portable"]
  },
  {
    "product_id": "PROD-2466",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "fashion", "formal", "cotton"]
  },
  {
    "product_id": "PROD-4986",
    "name": "USB-C Charger",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "portable", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-5750",
    "name": "Aloe Vera Gel",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["skincare", "beauty", "makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-4752",
    "name": "Formal Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["fashion", "cotton"]
  },
  {
    "product_id": "PROD-3305",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["cotton", "fashion", "unisex"]
  },
  {
    "product_id": "PROD-5635",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["wireless", "smart"]
  },
  {
    "product_id": "PROD-2785",
    "name": "Cotton T-Shirt",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["formal", "casual", "unisex"]
  },
  {
    "product_id": "PROD-9211",
    "name": "Hydrating Face Cream",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "skincare", "organic", "beauty"]
  },
  {
    "product_id": "PROD-6843",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["skincare", "fragrance-free", "organic"]
  },
  {
    "product_id": "PROD-6061",
    "name": "Hydrating Face Cream",
    "brand": "GlowEssence",
    "category": "Beauty",
    "tags": ["makeup", "fragrance-free"]
  },
  {
    "product_id": "PROD-7879",
    "name": "Slim Fit Jeans",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "cotton"]
  },
  {
    "product_id": "PROD-3467",
    "name": "Bluetooth Speaker",
    "brand": "TechPulse",
    "category": "Electronics",
    "tags": ["smart", "gadgets"]
  },
  {
    "product_id": "PROD-3912",
    "name": "Gaming Mouse",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["smart", "portable", "wireless"]
  },
  {
    "product_id": "PROD-7265",
    "name": "Casual Kurta",
    "brand": "EliteWear",
    "category": "Clothing",
    "tags": ["unisex", "formal", "cotton", "casual"]
  },
  {
    "product_id": "PROD-4596",
    "name": "Casual Kurta",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["casual", "unisex", "fashion", "formal"]
  },
  {
    "product_id": "PROD-1674",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "accessories"]
  },
  {
    "product_id": "PROD-8318",
    "name": "Bluetooth Speaker",
    "brand": "NovaGear",
    "category": "Electronics",
    "tags": ["accessories", "wireless", "gadgets"]
  },
  {
    "product_id": "PROD-2122",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["fashion", "unisex", "formal", "cotton"]
  },
  {
    "product_id": "PROD-2992",
    "name": "Cotton T-Shirt",
    "brand": "ComfortLine",
    "category": "Clothing",
    "tags": ["unisex", "fashion", "cotton", "casual"]
  },
  {
    "product_id": "PROD-4761",
    "name": "Smartwatch",
    "brand": "VoltEdge",
    "category": "Electronics",
    "tags": ["smart", "gadgets", "wireless", "portable"]
  },
  {
    "product_id": "PROD-3924",
    "name": "Aloe Vera Gel",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["fragrance-free", "organic", "beauty"]
  },
  {
    "product_id": "PROD-8759",
    "name": "Hooded Sweatshirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["casual", "unisex"]
  },
  {
    "product_id": "PROD-6312",
    "name": "Matte Lipstick",
    "brand": "PureBloom",
    "category": "Beauty",
    "tags": ["organic", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-2265",
    "name": "Cotton T-Shirt",
    "brand": "StreetLayer",
    "category": "Clothing",
    "tags": ["formal", "unisex", "cotton"]
  },
  {
    "product_id": "PROD-7353",
    "name": "Herbal Face Wash",
    "brand": "VelvetTouch",
    "category": "Beauty",
    "tags": ["organic", "makeup", "fragrance-free", "beauty"]
  },
  {
    "product_id": "PROD-6650",
    "name": "Cotton T-Shirt",
    "brand": "UrbanWeave",
    "category": "Clothing",
    "tags": ["unisex", "cotton", "fashion", "formal"]
  },

]


module.exports = productData;
