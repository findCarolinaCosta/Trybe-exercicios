module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan,
      {foreignKey: 'plan_id', as: 'plans' });
  };

  return Patient;
};