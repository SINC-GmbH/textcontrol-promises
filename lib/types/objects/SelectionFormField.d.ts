import { RequestNumberCallback, RequestBooleanCallback, RequestStringsCallback, EmptyRequestCallback } from '../callbacks';
import { FormField } from './FormField';

/**
 * The SelectionFormField objet represents a combobox or a drop-down list on a form.
 * It can be initially empty and it can have a horizontal extension, when it is empty.
 * Depending on whether it is editable, the SelectionFormField is either a combobox or a drop-down list.
 */
export interface SelectionFormField extends FormField {
    /** Gets the horizontal extension, in twips, of the text formfield, when it is empty. */
    getEmptyWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether a dropdown arrow is shown so that the user can select an item. */
    getIsDropDownArrowVisible(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a list of items for the SelectionFormField. An item must not be an empty string. */
    getItems(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets the index of the selected item of the SelectionFormField.
     * If the property value is -1, no item is selected and the currently selected item is deselected.
     */
    getSelectedIndex(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the horizontal extension, in twips, of the text formfield, when it is empty. */
    setEmptyWidth(emptyWidth: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether a dropdown arrow is shown so that the user can select an item. */
    setIsDropDownArrowVisible(isDropDownArrowVisible: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a list of items for the SelectionFormField. An item must not be an empty string. */
    setItems(items: string[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Sets the index of the selected item of the SelectionFormField.
     * If the property value is -1, no item is selected and the currently selected item is deselected.
     */
    setSelectedIndex(index: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
