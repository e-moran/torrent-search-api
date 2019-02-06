import { Request, Response } from "express";
import { SearchReultsController } from "../controllers/searchReultsController";

export class Routes {
    public routes(app): void {
        app.route('/api/search/:term')
            .get((req: Request, res: Response) => {
                let controller: SearchReultsController = new SearchReultsController(req.params.term);
                controller.getResults();
            });
    }
}
