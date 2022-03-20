module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: {type: DataTypes.STRING, field: 'fullName' },
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan,
      {foreignKey: 'planId', as: 'plan' });
  };

  return Patient;
};