export interface IWorkerMessage<T> {
    name: String,
    payload: {
        type: String,
        value: T
    }
}