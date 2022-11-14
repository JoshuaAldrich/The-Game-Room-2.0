const userSeeds = require('./userSeeds.json');

const db = require('../config/connection');
const User = require('../models/User');

db.once('open', async()=>{
    try{
        await User.deleteMany({})

        await User.create(userSeeds);
    }catch(err){
        console.error(err);
        process.exit(0);
    }

    console.log("db seeded!");
    process.exit(0);
});

