import { Collection } from "../domain/collection";
import { ITreeNodeObject } from "../domain/treeNode";
import { CollectionGroupDetailsResponse } from "../response/collectionResponse";

import { View } from "./view";

export class CollectionView extends View implements ITreeNodeObject {
  id: string = null;
  organizationId: string = null;
  name: string = null;
  externalId: string = null;
  readOnly: boolean = null;
  hidePasswords: boolean = null;

  constructor(c?: Collection | CollectionGroupDetailsResponse) {
    super();

    if (!c) {
      return;
    }

    this.id = c.id;
    this.organizationId = c.organizationId;
    this.externalId = c.externalId;
    if (c instanceof Collection) {
      this.readOnly = c.readOnly;
      this.hidePasswords = c.hidePasswords;
    }
  }
}
