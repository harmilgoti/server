import { Request, Response } from "express";
import { getSettings, updateSettings } from "../store";

export const getAllSettings = (req: Request, res: Response) => {
    const settings = getSettings();

    res.json({
        success: true,
        data: settings,
    });
};

export const updateSettingsController = (req: Request, res: Response) => {
    const updates = req.body;
    const updatedSettings = updateSettings(updates);

    res.json({
        success: true,
        data: updatedSettings,
        message: "Settings updated successfully",
    });
};

export const getSettingsBySection = (req: Request, res: Response) => {
    const section = req.params.section as string;
    const settings = getSettings();

    const validSections = ["general", "notifications", "security", "appearance"];

    if (!validSections.includes(section)) {
        res.status(400).json({
            success: false,
            error: {
                message: `Invalid section. Must be one of: ${validSections.join(", ")}`,
            },
        });
        return;
    }

    res.json({
        success: true,
        data: settings[section as keyof typeof settings],
        section,
    });
};
