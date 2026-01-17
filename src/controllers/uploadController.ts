import { Request, Response } from "express";
import { addUploadedFile, getUploadedFiles } from "../store";
import { UploadedFile } from "../types";

export const uploadFile = (req: Request & { file?: Express.Multer.File }, res: Response) => {
    if (!req.file) {
        res.status(400).json({
            success: false,
            error: {
                message: "No file uploaded",
            },
        });
        return;
    }

    const uploadedFile: UploadedFile = {
        id: Date.now().toString(),
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        uploadedAt: new Date().toISOString(),
    };

    addUploadedFile(uploadedFile);

    res.status(201).json({
        success: true,
        data: uploadedFile,
        message: "File uploaded successfully",
    });
};

export const getAllUploadedFiles = (req: Request, res: Response) => {
    const files = getUploadedFiles();

    res.json({
        success: true,
        data: files,
        count: files.length,
    });
};
