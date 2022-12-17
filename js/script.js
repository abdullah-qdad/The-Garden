'use strict';
let flowers = [];

function Flower(name, color, length, width, description ){
this.name = name;
this.color = color;
this.length = length;
this.width = width;
this.description = description;
flowers.push(this);

};

let rose = new Flower("ROSE", "White", 16, 7, "Scientific Name: Rosa. Perhaps the most famous flower on the list, the beautiful rose has attained cultural significance around the world and is often used to symbolise love, affection and beauty. Ranging from blooms as small as a fingernail to the majestic Grandiflora, there are thousands of different cultivations of roses available in rich colours and fragrances. The scientific name comes from the Latin rosa: an easy one to remember!");

let lily = new Flower("LILY", "Red white", 12, 5, "Scientific Name: Lilium. Tall, majestic and strikingly-shaped: lilies are a popular choice for bouquets due to their unusual shape and scent. Like roses, lilies are an important cultural and literary device and are known throughout the temperate Northern Hemisphere for their beauty and resilience.");

let tulip = new Flower("TULIP", "Red", 19, 6, "Scientific Name: Tulipa. Closely related to the lily and with a long history of cultivation at Latitude 40° North - an area spanning Ukraine and Turkey along with the Caspian Sea and even all the way to China - tulips have been seen as a symbol of wealth and abundance through the ages.");


