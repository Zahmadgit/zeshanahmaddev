import { useState } from "react";

import styles from "./ExploreZeshanDev.module.css";
import DropDownContent from "./DropDownContent";

import resumePDFPath from "../../assets/resume/MyResumeZeshanAhmad.pdf";

import type { FolderItem } from "./DropDownContent";
import chevrondownPath from "../../assets/icons/chevrondown.svg";
import chevronrightPath from "../../assets/icons/chevronright.svg";
import ellipsisPath from "../../assets/terminal/ellipsis.svg";
import javascriptPath from "../../assets/icons/javascript.svg";
import typescriptPath from "../../assets/icons/typescript.svg";
import javaPath from "../../assets/icons/java.svg";
import kotlinPath from "../../assets/icons/kotlin.svg";
import swiftPath from "../../assets/icons/swift.svg";
import reactPath from "../../assets/icons/react.svg";
import nodejsPath from "../../assets/icons/nodejs.svg";
import nextjsPath from "../../assets/icons/nextjs.svg";
import expoPath from "../../assets/icons/expo.svg";
import cssPath from "../../assets/icons/css.svg";
import htmlPath from "../../assets/icons/html.svg";
import materialuiPath from "../../assets/icons/materialui.svg";
import tailwindPath from "../../assets/icons/tailwind.svg";
import azuredevopsPath from "../../assets/icons/azure.svg";
import awsPath from "../../assets/icons/aws.svg";
import gitPath from "../../assets/icons/git.svg";
import dockerPath from "../../assets/icons/docker.svg";
import jestPath from "../../assets/icons/jest.svg";
import vitestPath from "../../assets/icons/vitest.svg";
import rtlPath from "../../assets/icons/reacttestinglibrary.png";
import storybookPath from "../../assets/icons/storybook.svg";
import lighthousePath from "../../assets/icons/lighthouse.svg";
import xcodePath from "../../assets/icons/xcode.png";
import androidstudioPath from "../../assets/icons/androidstudio.png";
import postgresqlPath from "../../assets/icons/postgres.svg";
import mysqlPath from "../../assets/icons/mysql.png";
import mongodbPath from "../../assets/icons/mongo.png";
import firestorePath from "../../assets/icons/firestore.svg";

const languages: FolderItem[] = [
  {
    text: "Javascript",
    logo: javascriptPath,
  },
  {
    text: "Typescript",
    logo: typescriptPath,
  },
  {
    text: "Java",
    logo: javaPath,
  },
  {
    text: "Kotlin",
    logo: kotlinPath,
  },
  {
    text: "Swift",
    logo: swiftPath,
  },
];

const frameworks: FolderItem[] = [
  {
    text: "React",
    logo: reactPath,
  },
  {
    text: "ReactNative",
    logo: reactPath,
  },
  {
    text: "NodeJS",
    logo: nodejsPath,
  },
  {
    text: "NextJS",
    logo: nextjsPath,
  },
  {
    text: "Expo",
    logo: expoPath,
  },
];

const styling: FolderItem[] = [
  {
    text: "CSS3",
    logo: cssPath,
  },
  {
    text: "HTML5",
    logo: htmlPath,
  },
  {
    text: "MaterialUI",
    logo: materialuiPath,
  },
  {
    text: "Tailwind",
    logo: tailwindPath,
  },
];
const versioningCloud: FolderItem[] = [
  {
    text: "AzureDevOps",
    logo: azuredevopsPath,
  },
  {
    text: "AWS",
    logo: awsPath,
  },

  {
    text: "Git",
    logo: gitPath,
  },

  {
    text: "Docker",
    logo: dockerPath,
  },
];

const testingPerformance: FolderItem[] = [
  {
    text: "Jest",
    logo: jestPath,
  },
  {
    text: "Vitest",
    logo: vitestPath,
  },
  {
    text: "RTL",
    logo: rtlPath,
  },
  {
    text: "Storybook",
    logo: storybookPath,
  },
  {
    text: "Lighthouse",
    logo: lighthousePath,
  },
  {
    text: "Xcode",
    logo: xcodePath,
  },
  {
    text: "AndroidStudio",
    logo: androidstudioPath,
  },
];

const databases: FolderItem[] = [
  {
    text: "PostgreSQL",
    logo: postgresqlPath,
  },
  {
    text: "MySQL",
    logo: mysqlPath,
  },

  {
    text: "MongoDB",
    logo: mongodbPath,
  },
  {
    text: "Firestore",
    logo: firestorePath,
  },
];
const ExplorerZeshanDev = () => {
  const [folderOpenBool, setFolderOpenBool] = useState(false);

  return (
    <div>
      <div className={styles.explorerContainer}>
        <p className={styles.explorer}>EXPLORER</p>
        <img className={styles.ellipsis} src={ellipsisPath} />
      </div>
      {folderOpenBool ? (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevrondownPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>

          <DropDownContent folderName={"languages"} folderContent={languages} />
          <DropDownContent
            folderName={"frameworks+react"}
            folderContent={frameworks}
          />
          <DropDownContent folderName={"styling"} folderContent={styling} />
          <DropDownContent
            folderName={"versioning/cloud"}
            folderContent={versioningCloud}
          />
          <DropDownContent
            folderName={"testing/performance"}
            folderContent={testingPerformance}
          />

          <DropDownContent folderName={"databases"} folderContent={databases} />
          {/* <a href={resumePDFPath}>
            <p className={styles.linkColor}>resume.pdf</p>
          </a> */}
        </div>
      ) : (
        <div>
          <div
            className={styles.zeshanContainer}
            onClick={() => {
              setFolderOpenBool((prev) => !prev);
            }}
          >
            <img className={styles.chevronZeshan} src={chevronrightPath} />
            <p className={styles.zeshanText}>ZESHANAHAMDDEV</p>
          </div>
          {/* <a href={resumePDFPath}>
            <p className={styles.linkColor}>resume.pdf</p>
          </a> */}
        </div>
      )}
    </div>
  );
};

export default ExplorerZeshanDev;
