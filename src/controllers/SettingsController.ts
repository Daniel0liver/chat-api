import { Request, Response } from 'express';
import { SettingsService } from 'services/Settings';

class SettingsController {
  public async create(request: Request, response: Response) {
    try {
      const { chat, username } = request.body;

      const settingsService = new SettingsService();

      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { SettingsController };
