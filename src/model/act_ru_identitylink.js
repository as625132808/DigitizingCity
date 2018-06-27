/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_identitylink', {
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
		GROUP_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		USER_ID_: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_task',
				key: 'ID_'
			}
		},
		PROC_INST_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
				key: 'ID_'
			}
		},
		PROC_DEF_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_re_procdef',
				key: 'ID_'
			}
		}
	}, {
		tableName: 'act_ru_identitylink',
		timestamps: false,
		freezeTableName: true
	});
};
