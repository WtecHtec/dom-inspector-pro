import './style.css';
type Target = HTMLElement | EventTarget | '' | null;
declare class DomInspector {
    theme: string;
    maxZIndex: number;
    mode: 'single' | 'multi';
    env: 'pc' | 'mobile';
    xpath: string | null;
    target: Target;
    status: 'enable' | 'disable' | 'pause';
    private onMoveSelect;
    private onDidSelect;
    private assistEle;
    private _cachedTarget;
    private event;
    private overlay;
    private _throttleOnMove;
    constructor(options?: {
        theme?: string;
        maxZIndex?: number;
        mode?: 'single' | 'multi';
        env?: 'pc' | 'mobile';
        onMoveSelect?: (target: Target) => void;
        onDidSelect?: (target: Target) => void;
    });
    private _addBodyClick;
    enable(mode?: 'single' | 'multi'): null;
    pause(): void;
    disable(): void;
    selectTarget(ele: HTMLElement): void;
    selectTargets(eles: HTMLElement[]): void;
    /** 移除圈选蒙层 */
    private _remove;
    /** 圈选 逻辑 */
    private _onMove;
    private _onMoveEnd;
}
export default DomInspector;
export * from './dom';
