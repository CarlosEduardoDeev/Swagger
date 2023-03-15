import { v4 as uuidV4 } from "uuid";
const { v4: uuidv4 } = require("uuid");

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.admin = false;
      this.created_at = new Date();
    }
  }
}
export { User };
