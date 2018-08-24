import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export declare class KeyKoard extends IonicNativePlugin {
    /**
     * window.addEventListener('keyboardDidHide', () => {});
     * window.addEventListener('keyboardDidShow', (event) => {});
     * window.addEventListener('keyboardWillShow', (event) => {});
     * window.addEventListener('keyboardWillHide', () => {})
     */
    isVisible: boolean;
    hideFormAccessoryBar(status?: boolean, completeCallback?: Function): void;
    hide(): void;
    show(): void;
    keyboardDidHide(): Observable<void>;
    keyboardDidShow(): Observable<Event>;
    keyboardWillShow(): Observable<Event>;
    keyboardWillHide(): Observable<void>;
}
