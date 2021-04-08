const Database = require('./config');

const initDB = {
    async init() {

        const db = await Database();
        
        await db.exec(`CREATE TABLE IF NOT EXISTS profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT, 
            avatar TEXT, 
            monthly_budget INT,
            days_per_week INT, 
            hours_per_day INT, 
            vacation_per_year INT, 
            value_hour INT
            );`
        );
        
        await db.exec(`CREATE TABLE IF NOT EXISTS jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATETIME
        );`);
        
        await db.run(`INSERT INTO profile (
            name, 
            avatar, 
            monthly_budget, 
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
            ) VALUES (            
            "Gleydson",
            "https://avatars.githubusercontent.com/u/69468992?v=4",
            3000,
            6,
            6,
            4,
            75
        );`);
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            1617846902817
        );`)
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "OneTwo Project",
            3,
            47,
            1617846902817
        );`)

        // await db.exec(`DROP TABLE profile;`)
        // await db.exec(`DROP TABLE jobs;`)
        
        await db.close();
    }
}

initDB.init();