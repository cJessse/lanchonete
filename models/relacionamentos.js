import Categoria from "./Categoria.js";
import Pedido from "./Pedido.js";

// Uma categoria pode ter muitos pedidos vinculados a ela.
Categoria.hasMany(Pedido, { foreignKey: 'idcategoria' });

// Um pedido pertence a uma categoria.
Pedido.belongsTo(Categoria, { as: 'categoria', foreignKey: 'idcategoria' });
