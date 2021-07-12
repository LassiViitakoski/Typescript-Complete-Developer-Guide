import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(value: T): void;
    getAll(): T;
}

export interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise; 
}

export interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

interface HasId {
    id?: number
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    get = this.attributes.get;
    on = this.events.on;
    trigger = this.events.trigger;

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');
        
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }

    save(): void {
        this.sync
            .save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }

    // get on() {
    //     return this.events.on;
    // }

    // Equivalent with below
    
    // on = this.events.on;

    // We can't use this approach if we are defining events property on constructor with style

    // constructor() {
    //     this.events = events;
    // }

    // We can use this style if we are defining events property on constructor with style
    // constructor(public events: Events) {}
}