const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "src/app/images/blog");
const outputDir = path.join(__dirname, "src/app/images/blog");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Supported image formats
const supportedFormats = [".jpg", ".jpeg", ".png", ".webp", ".tiff", ".gif",".svg"];

// Resize all valid images in the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const inputFilePath = path.join(inputDir, file);

  // Check if it's a file (not a directory) and not the "resized" folder
  if (fs.lstatSync(inputFilePath).isFile() && file !== "resized") {
    const ext = path.extname(file).toLowerCase(); // Get file extension in lowercase

    if (supportedFormats.includes(ext)) {
      const outputFilePath = path.join(outputDir, `${file}`);

      // Resize and compress the image to reduce the file size
      sharp(inputFilePath)
        .toBuffer()
        .then((data) => {
          // Try to reduce file size to ~100 KB
          let quality = 80; // Start with 80% quality
          sharp(data)
            .jpeg({ quality }) // If JPEG, adjust quality
            .webp({ quality }) // If WEBP, adjust quality
            .toFile(outputFilePath)
            .then(() => console.log(`Resized ${file} successfully!`))
            .catch((err) => console.error(`Failed to resize ${file}:`, err));
        })
        .catch((err) => console.error(`Error processing ${file}:`, err));
    } else {
      console.log(`Skipping unsupported file: ${file}`);
    }
  } else {
    console.log(`Skipping directory or "resized" folder: ${file}`);
  }
});
