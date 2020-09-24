/* User.js esta em maiusculo por se tratar de uma classe */
const{ Model, DataTypes } = require('sequelize');/* importando o model */

class User extends Model{
    /* padrão do seuqelize para poder conectar com o banco */
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

}


module.exports = User;/* exportando a classe user */