export const DB_Config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    options: {
        database: process.env.DB_DATABASE,
        trustServerCertificate: true
    }
};