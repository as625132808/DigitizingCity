/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bpmn_hi_comment', {
		id: {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		user_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		task_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		proc_inst_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		message: {
			type: DataTypes.STRING(4000),
			allowNull: true
		}
	}, {
		tableName: 'bpmn_hi_comment',
		timestamps: false,
		freezeTableName: true
	});
};
