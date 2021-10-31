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
    async addSeccion(nombre, docente, curso, horario) {
        const data = {
            "nombre": nombre,
            "docente": docente,
            "curso": curso,
            "horario": horario
        }
        const res = await axios.post(`${this.link}/seccion`, data);
        return res;
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

    async deleteSeccion(id) {

        const datos = await axios.get(`${this.link}/seccion/delete/${id}`)
        const response = await axios.get(`${this.link}/secciones`);
        const res = await response.data
        return res
    }

    async editSeccion(id, nombre, docente, curso, horario) {
        const data = {
            "id": id,
            "nombre": nombre,
            "docente": docente,
            "curso": curso,
            "horario": horario
        }
        const res = await axios.patch(`${this.link}/seccion`, data);
        return res;
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
        const res = await axios.patch(`${this.link}/docente`, data);
        return res;
    }
    async getDocente() {
        const res = await axios.get(`${this.link}/docente`);
        const response = await res.data
        return response;
    }

    //solicitudes

    async getSolicitudesEspera(id) {
        const res = await axios.get(`${this.link}/solicitud-espera/${id}`);
        const response = await res.data
        return response;
    }
    async getSolicitudesSecciones() {
        const res = await axios.get(`${this.link}/solicitud-seccion-curso`);
        const response = await res.data
        return response;
    }

    async addSolicitud(idAlumno, idSeccion, semestre) {
        const data = {
            "idAlumno": idAlumno,
            "idSeccion": idSeccion,
            "semestre": semestre
        }
        const res = await axios.post(`${this.link}/solicitud`, data);
        return res;
    }
    async getCapacidad(idSeccion) {
        const res = await axios.get(`${this.link}/capacidad/${idSeccion}`);
        const response = await res.data
        return response;
    }
    async getNoRepeat(idAlumno, idSeccion) {
        const res = await axios.get(`${this.link}/norepeat/${idAlumno}/${idSeccion}`);
        const response = await res.data
        return response;
    }

    async getAllMatriculas(idAlumno) {
        const res = await axios.get(`${this.link}/matriculas-espera/${idAlumno}`);
        const response = await res.data
        return response;
    }

    async eliminarMatricula(id) {
        const datares = await axios.delete(`${this.link}/matricula/delete/${id}`)
        const res = await datares.data
        return res
    }

    async getHistorialMatricula(idAlumno) {
        const res = await axios.get(`${this.link}/matriculas-historial/${idAlumno}`);
        const response = await res.data
        return response;
    }

    async getAllMatriculasAprobarRechazar() {
        const res = await axios.get(`${this.link}/aprovar-rechazar`);
        const response = await res.data
        return response;
    }

    async procesarSolicitud(idMatricula, action) {
        const datares = await axios.get(`${this.link}/matricula/procesar/${idMatricula}/${action}`)
        const res = await datares.data
        return res
    }
    async getListarMatriculas() {
        const res = await axios.get(`${this.link}/listar-matriculas-admin`);
        const response = await res.data
        return response;
    }

}

export default new LinkService();