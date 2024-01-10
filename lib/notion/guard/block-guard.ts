import { ImageBlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { isImageExternal, isImageFile, isParentPageType } from "./is";

export function getParentPage(parent: PageObjectResponse["parent"]) {
    if (isParentPageType(parent)) {
        return parent;
    }
    return null;
}

export function getImageUrl(image: ImageBlockObjectResponse) {
    if (isImageExternal(image.image)) {
        return image.image.external.url;
    } else if (isImageFile(image.image)) {
        return image.image.file.url;
    }
    return ""
}