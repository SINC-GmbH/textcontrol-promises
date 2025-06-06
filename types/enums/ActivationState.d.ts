declare namespace TXTextControl {
    /** The current activation state. */
    enum ActivationState {
        /** The control is activated, which means that it has the keyboard input focus. */
        Activated,
        /** The control is deactivated, which means that it has not the keyboard input focus. */
        Deactivated,
        /** The control is disabled, which means that it cannot get the keyboard input focus. */
        Disabled
    }
}