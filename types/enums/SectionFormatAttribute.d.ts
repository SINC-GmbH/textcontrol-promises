declare namespace TXTextControl {
    namespace SectionFormat {
        /** Determines a certain section format attribute. */
        enum Attribute {
            /** Specifies the attribute set through the BreakKind property. */
            BreakKind,
            /** Specifies the attribute set through the Landscape property. */
            Landscape,
            /** Specifies the attribute set through the Columns property. */
            Columns,
            /** Specifies the attribute set through the ColumnWidths property. */
            ColumnWidths,
            /** Specifies the attribute set through the ColumnDistances property. */
            ColumnDistances,
            /** Specifies the attribute set through the ColumnLineWidth property. */
            ColumnLineWidth,
            /** Specifies the attribute set through the ColumnLineColor property. */
            ColumnLineColor,
            /** Specifies the attribute set through the EqualColumnWidth property. */
            EqualColumnWidth,
            /** Specifies the attribute set through the RestartPageNumbering property. */
            RestartPageNumbering,
            /** Specifies all attributes of the SectionFormat. */
            All
        }
    }
}