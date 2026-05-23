import { ErrorArgument } from '../args';
import { SelectionBounds } from '../objects';

/** Callback function that receives the selection bounds. */
export type RequestSelectionBoundsCallback = (bounds: SelectionBounds, err: ErrorArgument) => void;
