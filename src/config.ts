export const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: `${process.env.HOST}\\${process.env.INSTANCE}`,
    database: process.env.DATABASE,
    pool: {
        max: 10,
        min: 4,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
