import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs";




    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


    // Upload an image
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(
      localFilePath,
      {
        // public_id: "shoes",
        resource_type: "auto",
      }
    );

    console.log("File is uploaded on Cloudinary:", response.url);
    return response;

  } catch (error) {
    if (localFilePath) {
        fs.unlinkSync(localFilePath)  //   // remove local save temp file as the uplord opertionfailed
    }
    console.log("Upload Error:", error.message)
    return null;
}

};

export {uploadOnCloudinary}