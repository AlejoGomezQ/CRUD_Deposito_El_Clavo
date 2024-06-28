import { Sequelize } from "sequelize";

const sequelize = new Sequelize('deposito_el_clavo', 'root', 'Ag2023q!', {
    host: 'localhost',
    dialect: 'mysql',
})

export default sequelize;