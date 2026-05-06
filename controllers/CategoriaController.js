import Categoria from "../models/Categoria.js";

async function listar(req, res) {
    const dados = await Categoria.findAll();
    return res.json(dados);
}

async function selecionar(req, res) {
    const idcategoria = req.params.idcategoria;
    const dados = await Categoria.findByPk(idcategoria);
    return res.json(dados);
}

async function inserir(req, res) {
    const nome = req.body.nome;
    const valor_medio = req.body.valor_medio;
    const tempo_preparo = req.body.tempo_preparo;
    const dados = await Categoria.create({ nome, valor_medio, tempo_preparo });
    return res.json(dados);
}

async function alterar(req, res) {
    const idcategoria = req.params.idcategoria;
    const nome = req.body.nome;
    const valor_medio = req.body.valor_medio;
    const tempo_preparo = req.body.tempo_preparo;
    const dados = await Categoria.update(
        { nome, valor_medio, tempo_preparo },
        { where: { idcategoria } }
    );
    return res.json(dados);
}

async function excluir(req, res) {
    const idcategoria = req.params.idcategoria;
    const dados = await Categoria.destroy({ where: { idcategoria } });
    return res.json(dados);
}

export default { listar, selecionar, inserir, alterar, excluir };
