import Pedido from "../models/Pedido.js";
import Categoria from "../models/Categoria.js";
import moment from "moment";

async function listar(req, res) {
    const dados = await Pedido.findAll({
        include: [{ model: Categoria, as: 'categoria', attributes: ['nome', 'tempo_preparo', 'valor_medio'] }]
    });
    return res.json(dados);
}

async function selecionar(req, res) {
    const idpedido = req.params.idpedido;
    const dados = await Pedido.findByPk(idpedido, {
        include: [{ model: Categoria, as: 'categoria', attributes: ['nome', 'tempo_preparo', 'valor_medio'] }]
    });
    return res.json(dados);
}

async function inserir(req, res) {
    const nome_cliente = req.body.nome_cliente;
    const descricao = req.body.descricao;
    const idcategoria = req.body.idcategoria;

    const categoria = await Categoria.findByPk(idcategoria);
    if (!categoria) {
        return res.status(404).send('Categoria não encontrada.');
    }

    const data_hora = moment().format('YYYY-MM-DD HH:mm:ss');
    const valor_total = categoria.valor_medio;
    const tempo_estimado = categoria.tempo_preparo;

    const dados = await Pedido.create({
        nome_cliente,
        descricao,
        data_hora,
        idcategoria,
        valor_total,
        tempo_estimado
    });
    return res.json(dados);
}

async function alterar(req, res) {
    const idpedido = req.params.idpedido;
    const nome_cliente = req.body.nome_cliente;
    const descricao = req.body.descricao;
    const idcategoria = req.body.idcategoria;

    const categoria = await Categoria.findByPk(idcategoria);
    if (!categoria) {
        return res.status(404).send('Categoria não encontrada.');
    }

    const valor_total = categoria.valor_medio;
    const tempo_estimado = categoria.tempo_preparo;

    const dados = await Pedido.update(
        { nome_cliente, descricao, idcategoria, valor_total, tempo_estimado },
        { where: { idpedido } }
    );
    return res.json(dados);
}

async function excluir(req, res) {
    const idpedido = req.params.idpedido;
    const dados = await Pedido.destroy({ where: { idpedido } });
    return res.json(dados);
}

export default { listar, selecionar, inserir, alterar, excluir };
