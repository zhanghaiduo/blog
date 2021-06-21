module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_posts', {
    // ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    post_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_date_gmt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_content: {
      type: DataTypes.TEXT('log'),
      allowNull: false
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ping_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to_ping: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pinged: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_modified: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_modified_gmt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_content_filtered: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_parent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    menu_order: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_mime_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_count: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // timestamp字段，默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名
    freezeTableName: false,
    // timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
    timestamps: false
  })
}
