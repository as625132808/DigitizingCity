/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('atd_opt_log', {
		id: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		},
		update_by: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		punch_record_id: {
			type: DataTypes.STRING(36),
			allowNull: true
		},
		update_content: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		update_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		del_flag: {
			type: DataTypes.CHAR(1),
			allowNull: true
		}
	}, {
		tableName: 'atd_opt_log',
		timestamps: false,
		freezeTableName: true
	});
};
