import { Callback } from '../callbacks';
import { FontUnderlineStyle, NumberFormat } from '../enums';

export interface InputFormatEventMap {
    /** Is fired when the property 'AllFrameLines' is changed. */
    allFrameLinesChanged: Callback<boolean>;
    /** Is fired when the property 'bold' is changed. */
    boldChanged: Callback<boolean>;
    /** Is fired when the property 'BottomAligned' is changed. */
    bottomAlignedChanged: Callback<boolean>;
    /** Is fired when the property 'BottomDistance' is changed. */
    bottomDistanceChanged: Callback<number>;
    /** Is fired when the property 'BottomFrameLine' is changed. */
    bottomFrameLineChanged: Callback<boolean>;
    /** Is fired when the property 'BoxFrame' is changed. */
    boxFrameChanged: Callback<boolean>;
    /** Is fired when the property 'BulletCharacter' is changed. */
    bulletCharacterChanged: Callback<string>;
    /** Is fired when the property 'BulletedList' is changed. */
    bulletedListChanged: Callback<boolean>;
    /** Is fired when the property 'Centered' is changed. */
    centeredChanged: Callback<boolean>;
    /** Is fired when the property 'FontFamily' is changed. */
    fontFamilyChanged: Callback<string>;
    /** Is fired when the property 'FontSize' is changed. */
    fontSizeChanged: Callback<number>;
    /** Is fired when the property 'FrameFillColor' is changed. */
    frameFillColorChanged: Callback<string>;
    /** Is fired when the property 'FrameLineColor' is changed. */
    frameLineColorChanged: Callback<string>;
    /** Is fired when the property 'FrameLineWidth' is changed. */
    frameLineWidthChanged: Callback<number>;
    /** Is fired when the property 'HangingIndent' is changed. */
    hangingIndentChanged: Callback<number>;
    /** Is fired when the property 'InnerHorizontalFrameLines' is changed. */
    innerHorizontalFrameLinesChanged: Callback<boolean>;
    /** Is fired when the property 'InnerVerticalFrameLines' is changed. */
    innerVerticalFrameLinesChanged: Callback<boolean>;
    /** Is fired when the property 'Italic' is changed. */
    italicChanged: Callback<boolean>;
    /** Is fired when the property 'Justified' is changed. */
    justifiedChanged: Callback<boolean>;
    /** Is fired when the property 'LeftAligned' is changed. */
    leftAlignedChanged: Callback<boolean>;
    /** Is fired when the property 'LeftFrameLine' is changed. */
    leftFrameLineChanged: Callback<boolean>;
    /** Is fired when the property 'LeftIndent' is changed. */
    leftIndentChanged: Callback<number>;
    /** Is fired when the property 'LeftToRight' is changed. */
    leftToRightChanged: Callback<boolean>;
    /** Is fired when the property 'LineSpacing' is changed. */
    lineSpacingChanged: Callback<number>;
    /** Is fired when the property 'NumberedList' is changed. */
    numberedListChanged: Callback<boolean>;
    /** Is fired when the property 'NumberedListFormat' is changed. */
    numberedListFormatChanged: Callback<NumberFormat>;
    /** Is fired when the property 'NumberFormat' is changed. */
    numberFormatChanged: Callback<string>;
    /** Is fired when the property 'NumberTextType' is changed. */
    numberTextTypeChanged: Callback<boolean>;
    /** Is fired when the property 'RightAligned' is changed. */
    rightAlignedChanged: Callback<boolean>;
    /** Is fired when the property 'RightFrameLine' is changed. */
    rightFrameLineChanged: Callback<boolean>;
    /** Is fired when the property 'RightIndent' is changed. */
    rightIndentChanged: Callback<number>;
    /** Is fired when the property 'RightToLeft' is changed. */
    rightToLeftChanged: Callback<boolean>;
    /** Is fired when the property 'StandardTextType' is changed. */
    standardTextTypeChanged: Callback<boolean>;
    /** Is fired when the property 'Strikeout' is changed. */
    strikeoutChanged: Callback<boolean>;
    /** Is fired when the property 'StructuredList' is changed. */
    structuredListChanged: Callback<boolean>;
    /** Is fired when the property 'StructuredListFormat' is changed. */
    structuredListFormatChanged: Callback<NumberFormat>;
    /** Is fired when the property 'StyleName' is changed. */
    styleNameChanged: Callback<string>;
    /** Is fired when the property 'StyleNames' is changed. */
    styleNamesChanged: Callback<string[]>;
    /** Is fired when the property 'Subscript' is changed. */
    subscriptChanged: Callback<boolean>;
    /** Is fired when the property 'Superscript' is changed. */
    superscriptChanged: Callback<boolean>;
    /** Is fired when the property 'TextBackColor' is changed. */
    textBackColorChanged: Callback<string>;
    /** Is fired when the property 'TextColor' is changed. */
    textColorChanged: Callback<string>;
    /** Is fired when the property 'TopAligned' is changed. */
    topAlignedChanged: Callback<boolean>;
    /** Is fired when the property 'TopDistance' is changed. */
    topDistanceChanged: Callback<number>;
    /** Is fired when the property 'TopFrameLine' is changed. */
    topFrameLineChanged: Callback<boolean>;
    /** Is fired when the property 'Underline' is changed. */
    underlineChanged: Callback<boolean>;
    /** Is fired when the property 'UnderlineStyle' is changed. */
    underlineStyleChanged: Callback<FontUnderlineStyle>;
    /** Is fired when the property 'VerticallyCentered' is changed. */
    verticallyCenteredChanged: Callback<boolean>;
}
