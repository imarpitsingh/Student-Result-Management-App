module.exports=(sequelize,DataTypes)=>{
    const Teachers =sequelize.define("teacher",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
    })
    return Teachers
}