module.exports = (sequelize, DataTypes) => {
    const Protfolio = sequelize.define("Protfolio", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Protfolio;
  };