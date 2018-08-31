import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component, ViewChild, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NavController, TextInput, Platform, ModalController, Modal } from 'ionic-angular';
import { KeyKoard } from "../../app/Appinstructions/Injectable/Key-board";
import { Subscription } from 'rxjs/Subscription';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VinKeyBoard } from '../../app/Provider/Component/KeyBorads/VinKeyBoard/VinKeyBoard';

declare var CanvasInput: any;
import $ from 'jquery'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  vinValue: string = ""
  private input: any = null;//输入框
  private keyboardShow: Subscription = null; //系统键盘弹出监听
  customKeyBoard: string = "inactive"//inactive
  @ViewChild(TextInput) textInput: TextInput;
  @ViewChild("Canvas") Canvas: ElementRef;
  @ViewChild("Content") Content: ElementRef;
  constructor(public navCtrl: NavController,
    private netUtil: NetWorkUtilBox,
    private keyboard: KeyKoard,
    private camera: Camera,
    private pla: Platform,
    private render: Renderer2
  ) {

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
      this.customKeyBoard = "active"
    })
  }
  ionViewWillLeave() {
    this.keyboardShow && this.keyboardShow.unsubscribe()
    this.customKeyBoard = "inactive"
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
  //点击其他地方移除键盘
  ContentClick() {
    this.customKeyBoard = "inactive"
  }
  //键盘事件
  keyPress(event) {
    switch (event.key) {
      case "Input":
        if (this.vinValue.length == 17) return
        this.vinValue += event.value;
        this.input._value = this.vinValue
        this.input.render()

        break
      case "Voice":
        let value = event.value as boolean

        break
      case "Delete":
        this.vinValue = this.vinValue.substring(0, this.vinValue.length - 1)
        this.input._value = this.vinValue
        this.input.render()
        break
      case "Share":
        break
      case "Search":
        break
    }

    // this.input.render()
  }
}
