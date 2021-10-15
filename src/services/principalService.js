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
        await axios.post(`${this.link}/register-user`, data);

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
        await axios.post(`${this.link}/register-admin`, data);
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
}

export default new LinkService();