/**
 * This file was generated from NPS.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface NPSContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    npsAttribute: EditableValue<Big>;
    onChange?: ActionValue;
}

export interface NPSPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    npsAttribute: string;
    onChange: {} | null;
}
