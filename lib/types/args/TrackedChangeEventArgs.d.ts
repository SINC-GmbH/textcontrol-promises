import { TrackedChangeInfo } from "../objects";

/** The event argument for a tracked change related event. */
export interface TrackedChangeEventArgs {
    /** The tracked change's information. */
    trackedChange: TrackedChangeInfo;
}
