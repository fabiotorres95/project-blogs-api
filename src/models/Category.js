const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false
  });

  return Category;
}

module.exports = CategoryModel;