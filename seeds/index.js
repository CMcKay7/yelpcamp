const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Connected to Database!');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 500; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '6398fa303404210736ee74ac',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos quidem quisquam rem pariatur repellat adipisci velit illum suscipit corporis facilis architecto consectetur quia. Veritatis ex perspiciatis officiis ab quia.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/deknkhlke/image/upload/v1672762633/YelpCamp/vz7a2zs0arrkvtlvbb0n.jpg',
                    filename: 'YelpCamp/vz7a2zs0arrkvtlvbb0n',
                },
                {
                    url: 'https://res.cloudinary.com/deknkhlke/image/upload/v1672762633/YelpCamp/p7ik3w3cegeyyvhgiit4.jpg',
                    filename: 'YelpCamp/p7ik3w3cegeyyvhgiit4',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});