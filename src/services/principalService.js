import axios from 'axios';

class LinkService {
    link = "https://matriculaserver.herokuapp.com";
    headers = {
        "Content-Type": "application/json; charset=UTF-8"
    }
    LinkService() {}
    async addUser(CAlumno, DNI, Nombre, Apellido, Contrasenia, Correo, Telefono) {
        const data = {
            "CAlumno": CAlumno,
            "DNI": DNI,
            "Nombre": Nombre,
            "Apellido": Apellido,
            "Contrasenia": Contrasenia,
            "Correo": Correo,
            "Telefono": Telefono
        }
        const res = await axios.post(`${this.link}/register-user`, data);
        return res;

    }
    async addAdmin(CAdmin, DNI, Nombre, Apellido, Contrasenia, Correo, Telefono) {
        const data = {
            "CAdmin": CAdmin,
            "DNI": DNI,
            "Nombre": Nombre,
            "Apellido": Apellido,
            "Contrasenia": Contrasenia,
            "Correo": Correo,
            "Telefono": Telefono
        }
        const res = await axios.post(`${this.link}/register-admin`, data);
        return res;
    }
    async login(CUser, NContrasenia) {
            const params = {
                CUser: CUser,
                NContrasenia: NContrasenia
            }

            const response = await axios.post(`${this.link}/login`, params);
            const respuesta = await response.data
            return respuesta
        }
        ////CURSOS
    async addCourse(Nombre) {
        const data = {
            "Nombre": Nombre
        }
        const res = await axios.post(`${this.link}/crear-curso`, data)
        return res;
    }
    async getCourses() {
        const response = await axios.get(`${this.link}/cursos`);
        const res = await response.data
        return res;
    }
    async editCourses(id, nombre) {
        const data = {
            "id": id,
            "nombre": nombre
        }
        const res = await axios.patch(`${this.link}/cursos`, data);
        return res;
    }
    async deleteCourse(id) {
        const data = {
            "id": id
        }
        const datos = await axios.get(`${this.link}/cursos/delete/${id}`)
        console.log(datos)
        const response = await axios.get(`${this.link}/cursos`);
        const res = await response.data
        return res
    }
}

export default new LinkService();