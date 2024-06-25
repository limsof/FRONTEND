import axios, { Axios } from "axios";

const enpoint = "http://localhost:4000/api/v1/roles";

class RolServices{
        getAllRoles()
        {
            return axios.get(enpoint);
        }

        createRoles(Roles)
        {
            console.log(Roles)
            return axios.post(enpoint,Roles);           
        }

          // Método para eliminar un rol por su ID
          updateRoles(id, Roles) {
            return axios.put(`${enpoint}/${id}`, Roles);
          }
        
          deleteRoles(id) {
            return axios.delete(`${enpoint}/${id}`);
          }

}


export default new RolServices();