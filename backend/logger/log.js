
const { format, createLogger, transports } = require('winston');
const winston = require('winston/lib/winston/config');
const { timestamp, combine, printf, errors } = format;
require('winston-mongodb');
 
const logformat=printf(({level,message,timestamp})=>{
    return`${timestamp} ${level}:${message}`;
});


const logger = createLogger({
  level: 'info',
  
  
  transports: [
    new transports.File({
        filename: 'Analytics.log',
        level: 'info',
        format: format.combine(format.timestamp(), format.json())
        
    }),
    new transports.MongoDB({
        level: 'info',
        db: process.env.DATABASE_LOCAL,
        options: {
            useUnifiedTopology: true
        },
        collection: 'Analytics',
        format: format.combine(format.timestamp(), format.json())
    })
]
});
module.exports=logger;
