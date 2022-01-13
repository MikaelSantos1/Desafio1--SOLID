import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.headers;
            if (!user_id) {
                return response.json({ error: "Id not proveded" }).status(404);
            }
            const id = user_id.toString();
            const all = this.listAllUsersUseCase.execute({ user_id: id });
            return response.json(all);
        } catch (err) {
            return response.json({ error: err.message }).status(404);
        }
    }
}

export { ListAllUsersController };
