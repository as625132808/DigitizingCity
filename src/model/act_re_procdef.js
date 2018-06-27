/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_re_procdef', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		CATEGORY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		KEY_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		VERSION_: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DEPLOYMENT_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		RESOURCE_NAME_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		DGRM_RESOURCE_NAME_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		DESCRIPTION_: {
			type: DataTypes.STRING(4000),
			allowNull: true
		},
		HAS_START_FORM_KEY_: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		SUSPENSION_STATE_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_re_procdef',
		timestamps: false,
		freezeTableName: true
	});
};
