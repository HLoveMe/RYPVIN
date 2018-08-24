var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
var KeyKoard = (function (_super) {
    __extends(KeyKoard, _super);
    function KeyKoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyKoard.prototype.hideFormAccessoryBar = function (status, completeCallback) { };
    KeyKoard.prototype.hide = function () { };
    KeyKoard.prototype.show = function () { };
    KeyKoard.prototype.keyboardDidHide = function () { return; };
    KeyKoard.prototype.keyboardDidShow = function () { return; };
    KeyKoard.prototype.keyboardWillShow = function () { return; };
    KeyKoard.prototype.keyboardWillHide = function () { return; };
    KeyKoard.decorators = [
        { type: Injectable },
    ];
    __decorate([
        CordovaProperty,
        __metadata("design:type", Boolean)
    ], KeyKoard.prototype, "isVisible", void 0);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, Function]),
        __metadata("design:returntype", void 0)
    ], KeyKoard.prototype, "hideFormAccessoryBar", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeyKoard.prototype, "hide", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeyKoard.prototype, "show", null);
    __decorate([
        Cordova({
            event: 'keyboardDidHide',
            element: window,
            eventObservable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], KeyKoard.prototype, "keyboardDidHide", null);
    __decorate([
        Cordova({
            event: 'keyboardDidShow',
            element: window,
            eventObservable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], KeyKoard.prototype, "keyboardDidShow", null);
    __decorate([
        Cordova({
            event: 'keyboardWillShow',
            element: window,
            eventObservable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], KeyKoard.prototype, "keyboardWillShow", null);
    __decorate([
        Cordova({
            event: 'keyboardWillHide',
            element: window,
            eventObservable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], KeyKoard.prototype, "keyboardWillHide", null);
    KeyKoard = __decorate([
        Plugin({
            pluginName: 'KeyKoard',
            plugin: 'cordova-plugin-ionic-keyboard',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'window.Keyboard',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS', 'Windows'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], KeyKoard);
    return KeyKoard;
}(IonicNativePlugin));
export { KeyKoard };
//# sourceMappingURL=index.js.map