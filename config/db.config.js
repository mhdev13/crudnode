module.exports = {
    HOST: '103.129.222.7',
    USER: 'maungaji_admin',
    PASSWROD: 'Ahmad@123456!',
    DB: 'maungaji_cms',
    dialect : 'mysql',
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000,
    },
}