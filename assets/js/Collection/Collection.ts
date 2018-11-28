export default class Collection<T> extends Array<T> {
    constructor(items: T[] = []) {
        super(...items);
    }

    /**
     * Get the first element of collection
     */
    public first(): T {
        return this[0];
    }

    /**
     * Get length of collection
     */
    public size(): number {
        return this.length;
    }

    /**
     * Get element by index
     * @param index
     */
    public get(index: number): T {
        return this[index];
    }

    /**
     * Know if element is on collection by key
     * @param key
     */
    public has(key: string): boolean {
        return key in this;
    }

    /**
     * Know if two tables are identical
     */
    public areEquals(array: any[]|Collection<any>): boolean {
        // if the other array is a falsy value, return
        // compare lengths - can save a lot of time
        if (this.length != array.length) {
            return false;
        }

        for (let i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (
                (this[i] instanceof Array || this[i] instanceof Collection)
                && (array[i] instanceof Array || array[i] instanceof Collection)
            ) {
                // recurse into the nested arrays
                // @ts-ignore
                if (!this[i].equals(array[i])) {
                    return false;
                }
            } else if (this[i] != array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }

        return true;
    }
}
