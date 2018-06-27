/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_detail', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		ACT_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		VAR_TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TIME_: {
			type: DataTypes.DATE,
			allowNull: false
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
		}
	}, {
		tableName: 'act_hi_detail',
		timestamps: false,
		freezeTableName: true
	});
};
