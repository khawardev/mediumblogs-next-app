import { UploadClient } from "@uploadcare/upload-client";
import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

export const handleUploadcare = async (file: any) => {
  let result;
  try {
    if (file) {
      const client = new UploadClient({
        publicKey: process.env.UPLOADCARE_PUBLICKEY as string,
      });
      const uploadedFile = await client.uploadFile(file);
    }
    const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      publicKey: process.env.UPLOADCARE_PUBLICKEY as string,
      secretKey: process.env.UPLOADCARE_SECRETKEY as string,
    });
    result = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });
  } catch (error) {
    return {
      error: `Error in fetching user: ${error}`,
    };
  }

  return result;
};
