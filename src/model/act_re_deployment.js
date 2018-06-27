/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_re_deployment', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			defaultValue: '',
			primaryKey: true
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CATEGORY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		DEPLOY_TIME_: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'act_re_deployment',
		timestamps: false,
		freezeTableName: true
	});
};
