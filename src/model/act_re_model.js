/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_re_model', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
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
		KEY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CATEGORY_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CREATE_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LAST_UPDATE_TIME_: {
			type: DataTypes.DATE,
			allowNull: true
		},
		VERSION_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		META_INFO_: {
			type: DataTypes.STRING(4000),
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
		EDITOR_SOURCE_VALUE_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ge_bytearray',
				key: 'ID_'
			}
		},
		EDITOR_SOURCE_EXTRA_VALUE_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ge_bytearray',
				key: 'ID_'
			}
		},
		TENANT_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'act_re_model',
		timestamps: false,
		freezeTableName: true
	});
};
