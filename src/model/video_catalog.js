/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('video_catalog', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		parent_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		parent_ids: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		catalog_type: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		camera_type: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1'
		},
		rtsp: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'video_catalog',
		timestamps: false,
		freezeTableName: true
	});
};
