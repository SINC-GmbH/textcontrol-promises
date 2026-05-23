import { ParentClass } from "./ParentClass";

export interface ChildClass extends ParentClass {
    ownMethod(value: number): void;
    sharedMethod(): void;
}
