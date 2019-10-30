import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            age: Yup.number()
                .integer()
                .positive()
                .required(),
            weight: Yup.number()
                .required()
                .positive(),
            height: Yup.number()
                .required()
                .positive(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de Validação' });
        }
        const { id, name, email, age, weight, height } = await Student.create(
            req.body
        );

        return res.json({
            id,
            name,
            email,
            age,
            weight,
            height,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            age: Yup.number()
                .integer()
                .positive()
                .required(),
            weight: Yup.number()
                .required()
                .positive(),
            height: Yup.number()
                .required()
                .positive(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Erro de Validação' });
        }
        const { id } = req.params;
        const student = await Student.findByPk(id);

        const { name, email, age, weight, height } = await student.update(
            req.body
        );

        return res.json({
            name,
            email,
            age,
            weight,
            height,
        });
    }
}
export default new StudentController();
