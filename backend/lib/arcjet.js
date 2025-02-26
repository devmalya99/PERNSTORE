
import arcjet, {shield,detectBot,tokenBucket} from "@arcjet/node"

import "dotenv/config"

export const aj = arcjet({
    
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],//track request by IP
    rules:[
        // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
     
    //create a bot detection rule
    detectBot({
        mode:"LIVE", //Block requests. Use "Dry Run" to log on
        
         // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
      ],
    }),

    // create a token rate limit .
    tokenBucket({
        mode: "LIVE",
        refillRate:5, //refill 5 tokens per interval
        interval: 10, //refill every 10 seconds
        capacity:10, //max 10 tokens
    })

    ]
})