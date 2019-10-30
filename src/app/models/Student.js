import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                age: Sequelize.INTEGER,
                weight: Sequelize.DOUBLE,
                height: Sequelize.DOUBLE,
            },
            {
                sequelize,
            }
        );
    }
}
