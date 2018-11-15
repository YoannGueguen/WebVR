import ObjectCacheLoader from "@js/Core/Loader/ObjectCacheLoader";

export default class ObjectCacheLoaderCollection extends Array {
    public findObject(modelName: string): ObjectCacheLoader | null {
        return this.find((objectCache: ObjectCacheLoader) => {
            if (objectCache.objectName === modelName) {
                return true;
            }
        }) || null;
    }

    public add(objectCache: ObjectCacheLoader) {
        this.push(objectCache);
    }
}