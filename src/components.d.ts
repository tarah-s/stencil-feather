/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FIcon {
        "name": string;
        "size": string;
    }
}
declare global {
    interface HTMLFIconElement extends Components.FIcon, HTMLStencilElement {
    }
    var HTMLFIconElement: {
        prototype: HTMLFIconElement;
        new (): HTMLFIconElement;
    };
    interface HTMLElementTagNameMap {
        "f-icon": HTMLFIconElement;
    }
}
declare namespace LocalJSX {
    interface FIcon {
        "name"?: string;
        "size"?: string;
    }
    interface IntrinsicElements {
        "f-icon": FIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "f-icon": LocalJSX.FIcon & JSXBase.HTMLAttributes<HTMLFIconElement>;
        }
    }
}