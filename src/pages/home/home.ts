import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NavController, TextInput, Platform, ModalController, Modal } from 'ionic-angular';
import { KeyKoard } from "../../app/Appinstructions/Injectable/Key-board";
import { Subscription } from 'rxjs/Subscription';
import { Camera, CameraOptions } from '@ionic-native/camera';
import $ from 'jquery'
import { VinKeyBoard } from '../../app/Provider/Component/KeyBorads/VinKeyBoard/VinKeyBoard';
import { CustomKeyBoardManager, KeyBoardStyle } from '../../app/Provider/Serve/KeyBoard/CustomKeyBoardManager';
declare var CanvasInput: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  keyboardShow: Subscription = null;
  vinValue: string = ""
  input: any = null;
  vinKey:Modal = null
  @ViewChild(TextInput) textInput: TextInput;
  @ViewChild("Canvas") Canvas: ElementRef;
  @ViewChild("Content") Content:ElementRef;
  constructor(public navCtrl: NavController,
    private netUtil: NetWorkUtilBox,
    private keyboard: KeyKoard,
    private camera: Camera,
    private pla: Platform,
    private render: Renderer2,
    private modalC:ModalController,
    private keyM:CustomKeyBoardManager
  ) {
    // this.netUtil.User().login()
    //<ion-input type="email" class="" placeholder="请输入17位车架号" [ngModel]="vinValue" (ngModelChange)="vinInput($event)"></ion-input>
  }
  ngOnInit() { }
  ionViewDidEnter() {
    let width = this.pla.width() - 64
    let heigh = 35
    this.render.setProperty(this.Canvas.nativeElement, "width", `${width}`)
    this.render.setProperty(this.Canvas.nativeElement, "height", `${heigh}`)
    this.input = new CanvasInput({
      canvas: this.Canvas.nativeElement,
      borderWidth: 0,
      padding: 0,
      borderColor: "white",
      placeHolder: "输入查询的Vin码。",
      width: width,
      height: 20,
      borderRadius: heigh / 2,
      boxShadow: "0px 0px 0px white",
      backgroundColor: "white",
      maxlength: 17,
      innerShadow: "0px 0px 0px white",
      y: 10,
      fontColor: "black"
    })
  }
  ionViewWillEnter() {
    this.keyboardShow = this.keyboard.keyboardWillShow().subscribe(() => {
      this.keyboard.hide()
      this.keyM.showKeyBoard(KeyBoardStyle.VinKeyBoard,this.Content.nativeElement)
      // this.vinKey = this.modalC.create(VinKeyBoard,null,{enableBackdropDismiss:true})
      // this.vinKey.present()  
    })
  }
  ionViewWillLeave() {
    this.keyboardShow && this.keyboardShow.unsubscribe()
  }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((result) => {
      console.log(result)
    })
  }
  vinInput(vin: string) {
    // console.log(1111,this.keyboard.isVisible)
  }
}
