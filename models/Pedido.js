import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Pedido = banco.define(
    'pedido',
    {
        idpedido: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cliente: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        idcategoria: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'categoria',
                key: 'idcategoria'
            }
        },
        valor_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        tempo_estimado: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

export default Pedido;
