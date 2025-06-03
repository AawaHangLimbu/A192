const customer = [
  {
    customerId: 1,
    name: "Subash Lama",
    bought: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
    ],
  },
  {
    customerId: 2,
    name: "Aarav Shrestha",
    bought: [
      { id: 3, name: "Tablet", price: 300 },
      { id: 4, name: "Keyboard", price: 50 },
    ],
  },
  {
    customerId: 3,
    name: "Sneha Tamang",
    bought: [
      { id: 5, name: "Momo_and_sprite", price: 200 },
      { id: 9, name: "Camera", price: 25 },
    ],
  },
  {
    customerId: 4,
    name: "Kiran Thapa",
    bought: [
      { id: 5, name: "Momo_and_sprite", price: 150 },
      { id: 8, name: "Speaker", price: 80 },
    ],
  },
  {
    customerId: 5,
    name: "Nisha KC",
    bought: [
      { id: 9, name: "Camera", price: 700 },
      { id: 10, name: "Tripod", price: 60 },
    ],
  },
];

const customerAPIresponse = {
  status: 200,
  message: "Customer data fetched successfully",
  data: customer
};

const getProductname = () => {
  if (customerAPIresponse.status === 200) {
    let boughtProducts = [];
    customerAPIresponse.data.forEach((customer) => {
      customer.bought.forEach((item) => {
        boughtProducts.unshift(item.name);
      });
    });
    return boughtProducts;
  } else {
    return [];
  }
};

console.log(getProductname());

const getProductNum = () => {
  if (customerAPIresponse.status === 200) {
    let productCount = {};
    customerAPIresponse.data.forEach((customer) => {
      customer.bought.forEach((item) => {
        const productName = item.name.toLowerCase();
        if (productCount[productName]) {
          productCount[productName] += 1;
        } else {
          productCount[productName] = 1;
        }
      });
    });
    return productCount;
  } else {
    return {};
  }
};

console.log(getProductNum());