export default class Collection<T> extends Array<T> {
    constructor(items: T[] = []) {
        super();
        items.forEach(item => this.push(item));
    }

    public first(): T {
        return this[0];
    }

    public size(): number {
        return this.length;
    }

    public get(index: number): T {
        return this[index];
    }

    public has(key: string): boolean {
        return key in this;
    }
}
