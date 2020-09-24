/* lida com a as requisições e devolve as respostas */

/* METODO STORY, serve para armazer o "usuario"  */

const User = require('../models/User');/* lidando com o model usuario, importando ele */

/* metodo store lida com o usuario */
module.exports={
    async store(req, res){
        const {name, email} = req.body; /* os campos criados na tabela */
        /*  await porque toda manipulação do banco é assincrona, por isso que tem o async no começo da função, depois de encontrar a classe criada e adicionar o create, passa dentro das chaves os  nomes dos campos da tabela do banco que foram definidos */
        const user = await User.create({name, email});

        return res.json(user);/* retornando em jason todos os dados do usuario que foram cadastrados*/
    }
};