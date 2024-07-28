import { UploadClient } from "@uploadcare/upload-client";
import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

export const handleUploadcare = async (file: any) => {
  let result;
  try {
    if (file) {
      const client = new UploadClient({ publicKey: "ededdc7b4b0cd2b2245a" });
      const uploadedFile = await client.uploadFile(file);
    }
    const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      publicKey: "ededdc7b4b0cd2b2245a",
      secretKey: "4e820c3f151aab9028df",
    });
    result = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });
  } catch (error) {
    return {
      error: `Error in fetching user: ${error}`,
    };
  }

  return result;
};
