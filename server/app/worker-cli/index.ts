import { IWorkerMessage } from "domain-worker/IWorkerMessage";

const worker: IWorkerMessage<any> = { 
    name: "yo",
    payload: {
        type: "message",
        value: {
            data: true
        }
    }
}

console.log(worker);