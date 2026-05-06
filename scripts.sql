create table categoria (
    idcategoria bigserial not null,
    nome varchar(100) not null,
    valor_medio numeric(10, 2) not null,
    tempo_preparo integer not null,
    constraint pk_categoria primary key (idcategoria)
);

insert into categoria (nome, valor_medio, tempo_preparo) values ('Lanches', 18.50, 15);
insert into categoria (nome, valor_medio, tempo_preparo) values ('Bebidas', 8.00, 5);
insert into categoria (nome, valor_medio, tempo_preparo) values ('Sobremesas', 12.00, 10);

create table pedido (
    idpedido bigserial not null,
    nome_cliente varchar(100) not null,
    descricao text not null,
    data_hora timestamp not null,
    idcategoria bigint not null,
    valor_total numeric(10, 2) not null,
    tempo_estimado integer not null,
    constraint pk_pedido primary key (idpedido),
    constraint fk_pedido_categoria foreign key (idcategoria) references categoria (idcategoria)
);
