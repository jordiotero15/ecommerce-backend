import fs from "fs";
import crypto from "crypto";

class UsersManager {
  constructor() {
    this.path = "./src/data/files/user.json";
    this.init();
  }

  init() {
    const fileExists = fs.existsSync(this.path);
    if (fileExists) {
      console.log("File already exists");
    } else {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("File Created");
    }
  }

  async readAll(role) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parsedData = JSON.parse(data);
      if (role) {
        const filteredData = parsedData.filter((each) => each.role === role);
        return filteredData;
      }
      return parsedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async readOne(uid) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parsedData = JSON.parse(data);
      const user = parsedData.find((each) => String(each.id) === String(uid));

      if (!user) {
        throw new Error(`User with uid ${uid} not found`);
      }

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(userData) {
    try {
      userData.id = crypto.randomBytes(12).toString("hex");
      const allUsers = await this.readAll();
      allUsers.push(userData);
      const stringData = JSON.stringify(allUsers, null, 2);
      await fs.promises.writeFile(this.path, stringData);
      return userData.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(uid, newData) {
    try {
      // Leer todos los usuarios
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parsedData = JSON.parse(data);

      // Buscar el índice del usuario a actualizar
      const userIndex = parsedData.findIndex((each) => String(each.id) === String(uid));

      if (userIndex === -1) {
        throw new Error(`User with uid ${uid} not found`);
      }

      // Actualizar los campos del usuario, manteniendo los existentes si no se pasan nuevos datos
      const updatedUser = {
        ...parsedData[userIndex],
        ...newData, // Sobrescribe solo los campos que vienen en newData
      };

      // Sobrescribir el usuario en el array con el nuevo usuario actualizado
      parsedData[userIndex] = updatedUser;

      // Guardar los cambios en el archivo
      await fs.promises.writeFile(this.path, JSON.stringify(parsedData, null, 2));

      return updatedUser; // Retornar el usuario actualizado
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

const usersManager = new UsersManager();

export default usersManager;
