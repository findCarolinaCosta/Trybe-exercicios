import { Request, Response } from "express";
import { Controller, RequestWithBody, ResponseError } from ".";
import { FrameService } from "../services/Frame";
import IFrame from "../interfaces/IFrame";

export class FrameController extends Controller<IFrame> {
  private _route: string;

  constructor(service = new FrameService(), route = "/frames") {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: RequestWithBody<IFrame>,
    res: Response<IFrame | ResponseError>
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const frame = await this.service.create(body);
      if (!frame) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ("error" in frame) {
        return res.status(400).json(frame);
      }
      return res.status(201).json(frame);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<IFrame | ResponseError>
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const frame = await this.service.readOne(id);
      return frame
        ? res.json(frame)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
