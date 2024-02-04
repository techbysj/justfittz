import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  {
    href: "/mens",
    label: "Mens",
    subcategories: [
      {
        label: "Footwear",
        items: [
          "Sports Footwear",
          "Trainers",
          "Football Boots",
          "Running Shoes",
          "Football Boot Finder",
          "Running Shoe Finder",
          "Fitness Trainers",
          "Tennis Shoes",
          "Basketball Shoes",
          
        ],
      },
      {
        label: "Popular Trainer Brands",
        items: ["Adidas", "Nike", "PUMA"],
      },
      {
        label: "Fashion Footwear",
        items: [
          "Trainers",
          "Canvas Shoes",
          "Hi Tops",
          "Crocs",
          "Boots",
          "Shoes",
          "Safety Boots and Shoes",
          "Wellies",
          "Sandals",
          "Sliders and Flip Flops",
        ],
      },
      {
        label: "Clothing",
        items: [
          "T-Shirts and Shirts",
          "Polo Shirts",
          "Shirts",
          "T-Shirts",
          "Vests",
          "Shorts and Trousers",
          "Cargo Trousers",
          "Jeans",
          "Joggers",
          "Shorts",
          "Swim Shorts",
          "Tracksuits",
          "Tracksuit Bottoms",
          "Trousers",
          "Leggings and Tights",
        ],
      },
      // Add more subcategories as needed
    ],
    popularBrands: ["Nike", "Adidas", "Puma", "Under Armour", "New Balance"],
  },
  {
    href: "/womens",
    label: "Womens",
    subcategories: [
      {
        label: "Footwear",
        items: [
          "Sports Footwear",
          "Trainers",
          "Running Shoes",
          "Fitness Trainers",
          "Tennis Shoes",
          "Basketball Shoes",
          "Fashion Footwear",
          "Trainers",
          "Canvas Shoes",
          "Hi Tops",
          "Boots",
          "Shoes",
          "Sandals",
          "Sliders and Flip Flops",
        ],
      },
      {
        label: "Clothing",
        items: [
          "T-Shirts and Shirts",
          "Tops",
          "Dresses",
          "Shorts and Trousers",
          "Leggings and Tights",
          "Outerwear",
          "Hoodies",
          "Jackets and Coats",
          "Knitwear",
          "Sweatshirts",
        ],
      },
      {
        label: "Accessories",
        items: [
          "Caps and Hats",
          "Womens Watches",
          "Gloves",
          "Insoles, Shoe Care and Laces",
          "Backpacks and Rucksacks",
          "Bum Bags",
          "Handbags",
          "Socks",
          "Belts",
          "Scarves",
        ],
      },
      // Add more subcategories as needed
    ],
    popularBrands: ["Nike", "Adidas", "Puma", "Under Armour", "New Balance"],
  },
  {
    href: "/kids",
    label: "Kids",
    subcategories: [
      {
        label: "Footwear",
        items: [
          "Sports Footwear",
          "Trainers",
          "Running Shoes",
          "Sandals",
          "School Shoes",
          "Wellies",
          "Slippers",
        ],
      },
      {
        label: "Clothing",
        items: [
          "T-Shirts and Shirts",
          "Hoodies",
          "Jackets and Coats",
          "Shorts and Trousers",
          "Tracksuits",
          "Sportswear",
        ],
      },
      {
        label: "Accessories",
        items: [
          "Caps and Hats",
          "Watches",
          "Gloves",
          "Socks",
          "Backpacks",
          "Lunch Bags",
        ],
      },
      // Add more subcategories as needed
    ],
    popularBrands: ["Nike", "Adidas", "Puma", "Under Armour", "New Balance"],
  },
  {
    href: "/accessories",
    label: "Accessories",
    subcategories: [
      {
        label: "Hats and Headwear",
        items: ["Caps and Hats", "Mens Watches", "Gloves"],
      },
      {
        label: "Shoe Accessories",
        items: [
          "Insoles, Shoe Care and Laces",
          "Shoe Accessories",
          "Shoe Insoles",
          "Shoe Care",
          "Shoe Laces",
        ],
      },
      {
        label: "Bags",
        items: [
          "Backpacks and Rucksacks",
          "Bum Bags",
          "Holdall and Duffle Bags",
          "Gym Bags and Sacks",
        ],
      },
      {
        label: "Training and Gym",
        items: [
          "Training and Gym Equipment",
          "Water Bottles and Hydration",
          "Belts",
        ],
      },
      {
        label: "Gifts",
        items: ["Wallets"],
      },
      // Add more subcategories as needed
    ],
    popularBrands: ["Ray-Ban", "Rolex", "Casio", "Oakley", "Fossil"],
  },
  {
    href: "/equipments",
    label: "Equipments",
    subcategories: [
      {
        label: "Fitness Equipment",
        items: ["Home Gym", "Cardio Equipment", "Strength Training"],
      },
      {
        label: "Outdoor Gear",
        items: ["Camping and Hiking", "Cycling", "Fishing"],
      },
      {
        label: "Sports Gear",
        items: ["Football", "Basketball", "Tennis"],
      },
      // Add more subcategories as needed
    ],
    popularBrands: ["Gymshark", "The North Face", "Wilson", "Easton", "Everlast"],
  },
  {
    href: "/brands",
    label: "Brands",
    subcategories: [
      {
        label: "Sports Brands",
        items: ["Nike", "Adidas", "Puma", "Under Armour", "New Balance"],
      },
      {
        label: "Fashion Brands",
        items: ["Gucci", "Prada", "Versace", "Chanel", "Dior"],
      },
      // Add more subcategories as needed
    ],
    popularBrands: [],
  },
];


export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Brands",
    links: [
      { name: "Just Fit", link: "/" },
      { name: "Nike", link: "/" },
      { name: "Under Armour", link: "/" },
      { name: "Adidas", link: "/" },
      { name: "Puma", link: "/" },
    ],
  },
  {
    title: "Sports",
    links: [
      { name: "Football", link: "/" },
      { name: "Basketball", link: "/" },
      { name: "Rugby", link: "/" },
      { name: "Swimming", link: "/" },
      { name: "Wrestling", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "Store Location", link: "/" },
      { name: "FAQS", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@justfittz.com", link: "mailto:customer@justfittz.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
