import ObjectCacheLoader from "@js/Core/Loader/ObjectCacheLoader";

export default class ObjectCacheLoaderCollection {
    constructor(private objectCache: ObjectCacheLoader[] = []) {
    }

    public findObject(modelName: string): ObjectCacheLoader | null {
        return this.objectCache.find(objectCache => {
            if (objectCache.objectName === modelName) {
                return true;
            }
        }) || null;
    }

    public add(objectCache: ObjectCacheLoader) {
        this.objectCache.push(objectCache);
    }
}