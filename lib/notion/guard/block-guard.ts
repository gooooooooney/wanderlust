import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { isParentPageType } from "./is";

export function getParentPage(parent: PageObjectResponse["parent"]) {
    if (isParentPageType(parent)) {
        return parent;
    }
    return null;
}