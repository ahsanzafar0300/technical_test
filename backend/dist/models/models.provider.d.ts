export declare const modelProviders: ({
    provide: string;
    useValue: typeof import("./applications/application.entity").Application;
} | {
    provide: string;
    useValue: typeof import("./tasks/task.entity").Task;
} | {
    provide: string;
    useValue: typeof import("./brokers/broker.entity").Broker;
})[];
