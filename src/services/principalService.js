import axios from 'axios';

class LinkService {
    link = "http://localhost:3050";
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
            const response = await axios.get(`${this.link}/cursos`);
            const res = await response.data
            return res
        }
        //SECCIONES
    async addSeccion() {

    }
    async getSecciones() {
        const res = await axios.get(`${this.link}/secciones`);
        const response = await res.data
        return response;
    }
    async getsecciondocente() {
        const res = await axios.get(`${this.link}/secciones-docentes`);
        const response = await res.data
        return response;
    }
    async getseccioncurso() {
        const res = await axios.get(`${this.link}/secciones-cursos`);
        const response = await res.data
        return response;
    }

    //docente
    async addDocente(nombre, apellido) {
        const data = {
            "nombre": nombre,
            "apellido": apellido
        }
        const res = await axios.post(`${this.link}/crear-docente`, data);
        return res;
    }

    async deleteDocente(id) {
        const data = {
            "id": id
        }
        const datos = await axios.get(`${this.link}/docente/delete/${id}`)
        const response = await axios.get(`${this.link}/docente`);
        const res = await response.data
        return res
    }
    async editDocente(id, nombre, apellido) {
        const data = {
            "id": id,
            "nombre": nombre,
            "apellido": apellido
        }

        console.log(data)

        const res = await axios.patch(`${this.link}/docente`, data);
        return res;
    }
    async getDocente() {
        const res = await axios.get(`${this.link}/docente`);
        const response = await res.data
        return response;
    }



}

export default new LinkService();