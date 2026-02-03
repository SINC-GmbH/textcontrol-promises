import {
    RequestNumberCallback,
    RequestHorizontalAlignmentCallback,
    RequestStringCallback,
    RequestDirectionCallback,
    RequestFrameCallback,
    RequestFrameStyleCallback,
    RequestJustificationCallback,
    RequestBooleanCallback,
    Callback,
    RequestNumbersCallback,
    RequestTabTypesCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { TabLeader, HorizontalAlignment, Direction, Frame, FrameStyle, Justification, TabType } from '../enums';

export namespace ParagraphFormat {
    /** Determines a certain paragraph format attribute. */
    export enum Attribute {
        /** Specifies the attribute set through the Alignment property. */
        Alignment,
        /** Specifies the attribute set through the LeftIndent property. */
        LeftIndent,
        /** Specifies the attribute set through the RightIndent property. */
        RightIndent,
        /** Specifies the attribute set through the TopDistance property. */
        TopDistance,
        /** Specifies the attribute set through the BottomDistance property. */
        BottomDistance,
        /** Specifies the attribute set through the LineSpacing property. */
        LineSpacing,
        /** Specifies the attribute set through the AbsoluteLineSpacing property. */
        AbsoluteLineSpacing,
        /** Specifies the attribute set through the TabPositions property. */
        TabPositions,
        /** Specifies the attribute set through the TabTypes property. */
        TabTypes,
        /** Specifies the attribute set through the Frame property. */
        Frame,
        /** Specifies the attribute set through the FrameStyle property. */
        FrameStyle,
        /** Specifies the attribute set through the FrameLineWidth property. */
        FrameLineWidth,
        /** Specifies the attribute set through the FrameDistance property. */
        FrameDistance,
        /** Specifies the attribute set through the HangingIndent property. */
        HangingIndent,
        /** Specifies the attribute set through the KeepLinesTogether property. */
        KeepLinesTogether,
        /** Specifies the attribute set through the KeepWithNext property. */
        KeepWithNext,
        /** Specifies the attribute set through the PageBreakBefore property. */
        PageBreakBefore,
        /** Specifies the attribute set through the WidowOrphanLines property. */
        WidowOrphanLines,
        /** Specifies the attribute set through the Direction property. */
        Direction,
        /** Specifies the attribute set through the Justification property. */
        Justification,
        /** Specifies the attribute set through the BackColor property. */
        BackColor,
        /** Specifies the attribute set through the FrameLineColor property. */
        FrameLineColor,
        /** Specifies all attributes of the ParagraphFormat. */
        All,
    }
}

/** Represents the formatting attributes of a paragraph. */
export interface ParagraphFormat {
    /** Gets the line spacing of a paragraph in twips. */
    getAbsoluteLineSpacing(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the horizontal text alignment. */
    getAlignment(callback: RequestHorizontalAlignmentCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color of a paragraph. */
    getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the bottom distance, in twips, between this and the next paragraph. */
    getBottomDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the writing direction. */
    getDirection(callback: RequestDirectionCallback, errorCallback?: ErrorCallback): void;
    /** Gets the framesetting of the paragraph. */
    getFrame(callback: RequestFrameCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, between the text and the paragraph's frame. */
    getFrameDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the color used for the frame lines of a paragraph. */
    getFrameLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the line width, in twips, of the paragraph's frame. */
    getFrameLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style of the paragraph's frame. */
    getFrameStyle(callback: RequestFrameStyleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, for the hanging indent. */
    getHangingIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the kind of justification in documents containing Arabic or Hebrew characters. */
    getJustification(callback: RequestJustificationCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether a page break is allowed within the paragraph. */
    getKeepLinesTogether(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether the paragraph is displayed on the same page as its following paragraph. */
    getKeepWithNext(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, between the left edge of the Text Control and the left edge of the text. */
    getLeftIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the line spacing of a paragraph as a percentage of the font size. */
    getLineSpacing(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether the paragraph is always displayed on top of a page. */
    getPageBreakBefore(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, between the right edge of a Text Control document and the right edge of the text. */
    getRightIndent(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the structure level of a paragraph in the document. */
    getStructureLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets an array containing the tab leaders in a paragraph. */
    getTabLeaders(callback: Callback<TabLeader[]>, errorCallback?: ErrorCallback): void;
    /** Gets the absolute tab stop positions, in twips, in a paragraph. */
    getTabPositions(callback: RequestNumbersCallback, errorCallback?: ErrorCallback): void;
    /** Gets the tab types in a paragraph. */
    getTabTypes(callback: RequestTabTypesCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, between this and the previous paragraph. */
    getTopDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of lines for widow/orphan control. */
    getWidowOrphanLines(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the line spacing of a paragraph in twips. */
    setAbsoluteLineSpacing(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the horizontal text alignment. */
    setAlignment(value: HorizontalAlignment, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color of a paragraph. */
    setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the bottom distance, in twips, between this and the next paragraph. */
    setBottomDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the writing direction. */
    setDirection(value: Direction, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the framesetting of the paragraph. */
    setFrame(value: Frame, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance, in twips, between the text and the paragraph's frame. */
    setFrameDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the color used for the frame lines of a paragraph. */
    setFrameLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the line width, in twips, of the paragraph's frame. */
    setFrameLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the style of the paragraph's frame. */
    setFrameStyle(value: FrameStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance, in twips, for the hanging indent. */
    setHangingIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the kind of justification in documents containing Arabic or Hebrew characters. */
    setJustification(value: Justification, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether a page break is allowed within the paragraph. */
    setKeepLinesTogether(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether paragraph is displayed on the same page as its following paragraph. */
    setKeepWithNext(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance, in twips, between the left edge of the Text Control and the left edge of the text. */
    setLeftIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the line spacing of a paragraph as a percentage of the font size. */
    setLineSpacing(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether the paragraph is always displayed on top of a page. */
    setPageBreakBefore(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance, in twips, between the right edge of a Text Control document and the right edge of the text. */
    setRightIndent(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the structure level of a paragraph in the document. */
    setStructureLevel(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an array containing the tab leaders in a paragraph. */
    setTabLeaders(value: TabLeader[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an array containing the absolute tab stop positions, in twips, in a paragraph. */
    setTabPositions(value: number[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an array containing the tab types in a paragraph. */
    setTabTypes(value: TabType[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets distance, in twips, between this and the previous paragraph. */
    setTopDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the number of lines for widow/orphan control. */
    setWidowOrphanLines(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}
