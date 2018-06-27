/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_varinst', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		VAR_TYPE_: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		BYTEARRAY_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		DOUBLE_: {
			type: "DOUBLE",
			allowNull: true
		},
		LONG_: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TEXT_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		TEXT2_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		CREATE_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LAST_UPDATED_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'act_hi_varinst',
		timestamps: false,
		freezeTableName: true
	});
};
