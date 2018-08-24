import { NetWorkUtilBox } from './../../app/tools/NetUtils';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, TextInput } from 'ionic-angular';
import { KeyKoard } from "../../app/Appinstructions/Injectable/Key-board";
import { Subscription } from 'rxjs/Subscription';
import { Camera ,CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  keyboardShow: Subscription = null;
  vinValue: string = "a"
  @ViewChild(TextInput) textInput: TextInput;
  constructor(public navCtrl: NavController,
    private netUtil: NetWorkUtilBox,
    private keyboard: KeyKoard,
    private camera: Camera
  ) {
    // this.netUtil.User().login()

  }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.keyboardShow = this.keyboard.keyboardWillShow().subscribe(() => {
      // this.keyboard.hide()
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
