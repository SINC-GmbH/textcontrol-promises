import {
    RequestStringCallback,
    RequestNumberCallback,
    RequestListFormatCharacterCallback,
    RequestNumberFormatCallback,
    RequestBooleanCallback,
    RequestTextTypeCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { ListFormatCharacter, NumberFormat, ListType } from '../enums';

export namespace ListFormat {
    /** Determines a certain list format attribute. */
    export enum Attribute {
        /** Specifies the attribute set through the Level property. */
        Level,
        /** Specifies the attribute set through the LeftIndent property. */
        LeftIndent,
        /** Specifies the attribute set through the FormatCharacter property. */
        FormatCharacter,
        /** Specifies the attribute set through the NumberFormat property. */
        NumberFormat,
        /** Specifies the attribute set through the FirstNumber property. */
        FirstNumber,
        /** Specifies the attribute set through the CharBeforeNumber property. */
        CharBeforeNumber,
        /** Specifies the attribute set through the CharAfterNumber property. */
        CharAfterNumber,
        /** Specifies the attribute set through the RestartNumbering property. */
        RestartNumbering,
        /** Specifies the attribute set through the BulletCharacter property. */
        BulletCharacter,
        /** Specifies the attribute set through the BulletSize property. */
        BulletSize,
        /** Specifies the attribute set through the HangingIndent property. */
        HangingIndent,
        /** Specifies the attribute set through the Type property. */
        Type,
        /** Specifies the attribute set through the TextBeforeNumber property. */
        TextBeforeNumber,
        /** Specifies the attribute set through the TextAfterNumber property. */
        TextAfterNumber,
        /** Specifies the attribute set through the FontName property. */
        FontName,
        /** Specifies all attributes of the ListFormat. */
        All,
    }
}

/** The ListFormat object defines the formatting attributes of a bulleted or numbered list. */
export interface ListFormat {
    /** Gets the symbol character for a bulleted list. */
    getBulletCharacter(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the size of the symbol character for a bulleted list. */
    getBulletSize(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the starting number for a numbered list. */
    getFirstNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the font used for the bullet character. */
    getFontName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the formatting character for a bulleted or numbered list. */
    getFormatCharacter(callback: RequestListFormatCharacterCallback, errorCallback?: ErrorCallback): void;
    /** Gets the hanging indent of a numbered list. */
    getHangingIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the left indent for a numbered list. */
    getLeftIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the level for a bulleted or numbered list. */
    getLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number format for a numbered list. */
    getNumberFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value determining whether a new numbered list begins. */
    getRestartNumbering(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text that is displayed behind the number in a numbered list. */
    getTextAfterNumber(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text that is displayed in front of the number in a numbered list. */
    getTextBeforeNumber(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the type of the list, bulleted, numbered or none. */
    getType(callback: RequestTextTypeCallback, errorCallback?: ErrorCallback): void;
    /** Sets the symbol character for a bulleted list. */
    setBulletCharacter(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the size of the symbol character for a bulleted list. */
    setBulletSize(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the starting number for a numbered list. */
    setFirstNumber(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the font used for the bullet character. */
    setFontName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the formatting character for a bulleted or numbered list. */
    setFormatCharacter(value: ListFormatCharacter, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the hanging indent of a numbered list. */
    setHangingIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the left indent for a numbered list. */
    setLeftIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the level for a bulleted or numbered list. */
    setLevel(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the number format for a numbered list. */
    setNumberFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the value determining whether a new numbered list begins. */
    setRestartNumbering(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text that is displayed behind the number in a numbered list. */
    setTextAfterNumber(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text that is displayed in front of the number in a numbered list. */
    setTextBeforeNumber(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the type of the list, bulleted, numbered or none. */
    setType(value: ListType, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
