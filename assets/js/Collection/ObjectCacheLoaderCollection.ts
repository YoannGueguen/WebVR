import ObjectCacheLoader from "@js/Core/Loader/ObjectCacheLoader";
import Collection from "@js/Collection/Collection";

export default class ObjectCacheLoaderCollection extends Collection<ObjectCacheLoader> {
    public findObject(modelName: string): ObjectCacheLoader | null {
        const objectCacheLoader = this.find(objectCache => objectCache.objectName === modelName);

        return objectCacheLoader || null;
    }
}
