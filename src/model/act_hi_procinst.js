/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_hi_procinst', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique: true
		},
		BUSINESS_KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		START_TIME_: {
			type: DataTypes.DATE,
			allowNull: false
		},
		END_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DURATION_: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		START_USER_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		START_ACT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		END_ACT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		SUPER_PROCESS_INSTANCE_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		DELETE_REASON_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_hi_procinst',
		timestamps: false,
		freezeTableName: true
	});
};
