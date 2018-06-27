/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('act_ru_variable', {
		ID_: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		REV_: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		TYPE_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		NAME_: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		EXECUTION_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ru_execution',
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
		TASK_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		BYTEARRAY_ID_: {
			type: DataTypes.STRING(64),
			allowNull: true,
			references: {
				model: 'act_ge_bytearray',
				key: 'ID_'
			}
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
		tableName: 'act_ru_variable',
		timestamps: false,
		freezeTableName: true
	});
};
