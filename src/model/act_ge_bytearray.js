/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ge_bytearray', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		DEPLOYMENT_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_re_deployment',
				key: 'ID_'
			}
		},
		BYTES_: {
			type: "LONGBLOB",
			allowNull: true
		},
		GENERATED_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		}
	}, {
		tableName: 'act_ge_bytearray',
		timestamps: false,
		freezeTableName: true
	});
};
