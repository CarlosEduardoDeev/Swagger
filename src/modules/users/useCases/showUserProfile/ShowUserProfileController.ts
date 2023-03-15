import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.body;
      const userFound = this.showUserProfileUseCase.execute({
        user_id: String(request.params.user_id),
      });
      return response.status(201).send(userFound);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
