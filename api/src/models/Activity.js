const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    
    id : {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey : true
       },
    
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    dificulty:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    duration:{
        type: DataTypes.STRING,
        allowNull:true
    },
    
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: true
    }
  });
};

