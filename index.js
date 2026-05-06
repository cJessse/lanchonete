import Express from "express";
import banco from "./Banco.js";
import categoria from "./controllers/CategoriaController.js";
import pedido from "./controllers/PedidoController.js";
import "./models/relacionamentos.js";

try {
    await banco.authenticate();
    console.log('Banco conectado com sucesso.');
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}

const api = Express();
api.use(Express.json());

api.get('/teste', (req, res) => {
    res.send('Api funcionando');
});

api.get('/categoria', categoria.listar);
api.get('/categoria/:idcategoria', categoria.selecionar);
api.post('/categoria', categoria.inserir);
api.put('/categoria/:idcategoria', categoria.alterar);
api.delete('/categoria/:idcategoria', categoria.excluir);

api.get('/pedido', pedido.listar);
api.get('/pedido/:idpedido', pedido.selecionar);
api.post('/pedido', pedido.inserir);
api.put('/pedido/:idpedido', pedido.alterar);
api.delete('/pedido/:idpedido', pedido.excluir);

api.listen(3000, () => { console.log('Api rodando na porta 3000...') });
