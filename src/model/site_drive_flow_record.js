/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('site_drive_flow_record', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'site_drive_flow_record',
		timestamps: false,
		freezeTableName: true
	});
};
