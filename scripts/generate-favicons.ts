
import favicons from "favicons";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "../docs/public/logo.svg");
const outputDir = path.join(__dirname, "../docs/public");

const configuration = {
  path: "/",
  appName: "SukiSU-Ultra Docs",
  appShortName: "SukiSU-Ultra",
  appDescription: "Next-Generation Android Root Solution Documentation",
  developerName: "SukiSU-Ultra",
  developerURL: "https://sukisu.org",
  background: "#ffffff",
  theme_color: "#ffffff",
  display: "standalone",
  orientation: "portrait",
  start_url: "/",
  version: "1.0",
  logging: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false
  }
};

favicons(source, configuration)
  .then(response => {
    response.images.forEach(image => {
      fs.writeFileSync(path.join(outputDir, image.name), image.contents);
    });
    response.files.forEach(file => {
      fs.writeFileSync(path.join(outputDir, file.name), file.contents);
    });
    fs.writeFileSync(path.join(outputDir, "favicons.html"), response.html.join("\n"));
    console.log("✅ Favicons generated successfully!");
  })
  .catch(error => {
    console.error("❌ Error generating favicons:", error);
    process.exit(1);
  });
