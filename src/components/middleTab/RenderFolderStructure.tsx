import { useState } from "react";

interface FolderStructure {
  folderName: string;
  folderContent: string[];
}

const RenderFolderStructure = (props: FolderStructure) => {
  const [folderOpenBool, setFolderOpenBool] = useState(false);
  return (
    <div>
      {folderOpenBool ? (
        <div>
          <p></p>
        </div>
      ) : (
        <div>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default RenderFolderStructure;
