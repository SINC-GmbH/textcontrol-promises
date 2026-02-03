import { ActivationState } from "../enums";

/** Callback function for requests expecting an ActivationState value. */
export type RequestActivationStateCallback = (activationState: ActivationState) => void;
