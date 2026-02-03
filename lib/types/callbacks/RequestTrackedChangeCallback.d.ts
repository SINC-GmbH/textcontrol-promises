import { TrackedChange } from "../objects";

/** Callback function for requests expecting a TrackedChange value. */
export type RequestTrackedChangeCallback = (change: TrackedChange) => void;
