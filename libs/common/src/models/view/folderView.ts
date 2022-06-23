import { Folder } from "../domain/folder";
import { ITreeNodeObject } from "../domain/treeNode";

import { View } from "./view";

export class FolderView extends View implements ITreeNodeObject {
  id: string = null;
  name: string = null;
  revisionDate: Date = null;

  constructor(f?: Folder) {
    super();

    if (!f) {
      return;
    }

    this.id = f.id;
    this.revisionDate = f.revisionDate;
  }
}
