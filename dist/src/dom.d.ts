export declare function isDOM(obj: any): any;
export declare function $(selector: string, parent?: HTMLElement): Element | null;
/** 添加元素style样式  */
export declare function addRule(selector: HTMLElement, cssObj: {
    [key: string]: any;
}): void;
export declare function findIndex(ele: Element | null, currentTag: string): number;
export declare function getElementInfo(ele: HTMLElement): {
    [key: string]: any;
};
export declare function getMaxZIndex(): number;
export declare function createElement(tag: string, attr: {
    [key: string]: any;
}, content?: string): HTMLElement;
/** 创建围绕的节点 */
export declare function createSurroundEle(parent: HTMLElement, className?: string, content?: string): HTMLElement;
/** 加选择蒙层节点 */
export declare function addOverlay({ target, root, id, assistEle, theme, maxZIndex, }: {
    target: HTMLElement;
    root: HTMLElement;
    id?: string;
    assistEle: HTMLElement;
    theme?: string;
    maxZIndex?: number;
}): (() => void) | null;
export declare function detectList(ele: Element | null): false | {
    listEl: Element | ParentNode;
    ele: Element;
    preLevel: number;
};
/** 获取 圈选 目标节点元素  */
export declare function getTouchMouseTargetElement(e: TouchEvent | MouseEvent): EventTarget | null;
export declare function getXpath(ele: HTMLElement, allId?: boolean): string | null;
export declare function getXpathList(ele: HTMLElement, preLevel?: number): string | null;
export declare function getEleByXpath(xpath: string): Node | null;
export declare function getElesByXpath(xpath: string, max?: number): Node[];
export declare function getNearestNoSvgXpath(xpath: string): string;
