module.exports=(sequelize,DataTypes)=>{
    const Students =sequelize.define("student",{
        Rollnumber:{
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        DOB:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Score:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        timestamps: false,
    })

    return Students
}