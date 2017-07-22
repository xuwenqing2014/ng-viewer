import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private imgGroup = [
    {
      src: '../assets/images/1.jpg'
    }, {
      src: '../assets/images/2.jpg'
    }, {
      src: '../assets/images/3.jpg'
    }, {
      src: '../assets/images/4.jpg'
    }];
  private imageViewer: any = {
    show: false,
    active: {
        src: '',
        width: 0,
        height: 0,
        index: 0
    },
    result: [
      ...this.imgGroup
    ]
  };
  constructor(private elementRef: ElementRef) {

  }
  private showViewer(src, index) {
    this.imageViewer.active = {
      src,
      index,
      width: this.imageViewer.result[index].width,
      height: this.imageViewer.result[index].height
    };
    this.imageViewer.show = true;
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  private imgLoad(num) {
    const img = this.elementRef.nativeElement.querySelector('#img' + num);
    this.imageViewer.result[num].width = img.naturalWidth;
    this.imageViewer.result[num].height = img.naturalHeight;
  }
  private closeViewerEmit(){
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
}
