const mongoConfig = {
    MONGO_HOST: "",
    MONGO_PORT: 27017,
    MONGO_ADMIN_DB: "",
    MONGO_USERNAME: "",
    MONGO_PASSWORD: ""
}


export default {
    MONGO_URI: `mongodb://${mongoConfig.MONGO_USERNAME}:${encodeURIComponent(mongoConfig.MONGO_PASSWORD)}@${mongoConfig.MONGO_HOST}:${mongoConfig.MONGO_PORT}/${mongoConfig.MONGO_ADMIN_DB}`
}