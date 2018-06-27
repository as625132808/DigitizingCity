/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_id_info', {
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
		USER_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		VALUE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PASSWORD_: {
			type: "LONGBLOB",
			allowNull: true
		},
		PARENT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'act_id_info',
		timestamps: false,
		freezeTableName: true
	});
};
