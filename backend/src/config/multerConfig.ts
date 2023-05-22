import crypto from "crypto"
import multer from "multer"

import { resolve } from "path"

export const multerConfig = (folder: string) => ({
	storage: multer.diskStorage({
		destination: resolve(__dirname, "..", "..", folder),
		filename: (request, file, callback) => {
			const fileHash = crypto.randomBytes(16).toString("hex")
			const fileName = `${fileHash}-${file.originalname}`

			return callback(null, fileName)
		}
	})
})