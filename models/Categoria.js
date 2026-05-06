import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Categoria = banco.define(
    'categoria',
    {
        idcategoria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        valor_medio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        tempo_preparo: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

export default Categoria;
