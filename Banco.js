import { Sequelize } from "sequelize";

const banco = new Sequelize('lanchonete', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default banco;
