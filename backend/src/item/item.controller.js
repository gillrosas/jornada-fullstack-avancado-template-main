const {isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const itens  = [];
    res.send(itens);
};

const findById = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status(400).send({message : "Id Invalido!"});
    };

    const item = {};
    
    if (!item) {
        return res.status(400).send ({ message : "Item  náo encontrado."});
    };

    res.send(item);
};

const create = (req, res) => {
    const item = req.body;

    if(!item || !item.name || !item.imageUrl || item.category){
        return res.status(400).send({message : "Dados invalidos"});
    };

    const newItem = {};
    res.status(201).send({message : "Dados insridos com sucesso"})

};

const update = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status(400).send({message : "Id Invalido!"});
    };

    const item = req.body;

    if(!item || !item.name || !item.imageUrl || item.category){
        return res.status(400).send({message : "Dados invalidos"});
    };


    const updateItem = {};

    if (!updateItem) {
        return res.status(400).send({message : "Item Náo encontrado"}); 
    };
    res.send ({message : "Item atualizado com sucesso!"})

};

const deleteById = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)) {
        return res.status (400).send({message: "ID invalido"});
    };

    const deleteItem = {};

    if(!deleteItem) {
        return res.status (404).send({message: "Item nao encontrado "});
    }

    res.send ({ message : "Item excluido com sucesso!"});

};


module.exports = {
    findAll, 
    findById,
    create,
    update, 
    deleteById, 
};