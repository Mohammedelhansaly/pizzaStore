// all images imported from images directory
import product_01_image_01 from "../images/pizza1.png";
import product_01_image_02 from "../images/product_1.jpg";
import product_01_image_03 from "../images/product_2.jpg";

import product_02_image_01 from "../images/pizza2.png";
import product_02_image_02 from "../images/product_3.jpg";
import product_02_image_03 from "../images/product_4.jpg";

import product_03_image_01 from "../images/pizza3.png";
import product_03_image_02 from "../images/product_5.jpg";
import product_03_image_03 from "../images/product_6.jpg";

import product_04_image_01 from "../images/pizza4.png";
import product_04_image_02 from "../images/product_7.jpg";
import product_04_image_03 from "../images/product_8.jpg";

import product_05_image_01 from "../images/pizza5.png";
import product_05_image_02 from "../images/product_9.png";
import product_05_image_03 from "../images/product_1.jpg";

import product_06_image_01 from "../images/pizza6.png";
import product_06_image_02 from "../images/product_2.jpg";
import product_06_image_03 from "../images/product_3.jpg";

import product_07_image_01 from "../images/pizza7.png";
import product_07_image_02 from "../images/product_4.jpg";
import product_07_image_03 from "../images/product_5.jpg";

import product_08_image_01 from "../images/pizza8.png";
import product_08_image_02 from "../images/product_6.jpg";
import product_08_image_03 from "../images/product_7.jpg";

import product_09_image_01 from "../images/pizza9.png";
import product_09_image_02 from "../images/product_8.jpg";
import product_09_image_03 from "../images/product_9.png";

import product_10_image_01 from "../images/pizza10.png";
import product_10_image_02 from "../images/product_1.jpg";
import product_10_image_03 from "../images/product_2.jpg";

import product_11_image_01 from "../images/pizza11.png";
import product_11_image_02 from "../images/product_3.jpg";
import product_11_image_03 from "../images/product_5.jpg";

import product_12_image_01 from "../images/pizza12.png";
import product_12_image_02 from "../images/product_2.jpg";
import product_12_image_03 from "../images/product_3.jpg";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "PIZZA",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_08_image_01,
    image02: product_08_image_02,
    image03: product_08_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_09_image_01,
    image02: product_09_image_02,
    image03: product_09_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_10_image_01,
    image02: product_10_image_02,
    image03: product_10_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_11_image_01,
    image02: product_11_image_02,
    image03: product_11_image_03,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_12_image_01,
    image02: product_12_image_02,
    image03: product_12_image_03,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
