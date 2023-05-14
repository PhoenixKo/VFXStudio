import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://www.thefocus.com/thumbs/2019/10/10/50-50-920-517.5!SSu4byJKJZImPWwt0r986m72TAGHxs1UZvWR9acT.jpeg',
        medium: 'https://www.thefocus.com/thumbs/2019/10/10/50-50-920-517.5!SSu4byJKJZImPWwt0r986m72TAGHxs1UZvWR9acT.jpeg',
        big: 'https://www.thefocus.com/thumbs/2019/10/10/50-50-920-517.5!SSu4byJKJZImPWwt0r986m72TAGHxs1UZvWR9acT.jpeg'
      },
      {
        small: 'https://www.clipstudio.net/wp-content/uploads/2019/09/0034_001-1.jpg',
        medium: 'https://www.clipstudio.net/wp-content/uploads/2019/09/0034_001-1.jpg',
        big: 'https://www.clipstudio.net/wp-content/uploads/2019/09/0034_001-1.jpg'
      },
      {
        small: 'https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/11/06/2b963ed0/scosglen_goatmen.jpg',
        medium: 'https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/11/06/2b963ed0/scosglen_goatmen.jpg',
        big: 'https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2019/11/06/2b963ed0/scosglen_goatmen.jpg'
      },
      {
        small: 'https://i.kinja-img.com/gawker-media/image/upload/s--AgPefPGF--/c_scale,fl_progressive,q_80,w_800/yq66siy4lsdm35k0onaj.jpg',
        // tslint:disable-next-line: max-line-length
        medium: 'https://i.kinja-img.com/gawker-media/image/upload/s--AgPefPGF--/c_scale,fl_progressive,q_80,w_800/yq66siy4lsdm35k0onaj.jpg',
        big: 'https://i.kinja-img.com/gawker-media/image/upload/s--AgPefPGF--/c_scale,fl_progressive,q_80,w_800/yq66siy4lsdm35k0onaj.jpg'
      },
      {
        // tslint:disable-next-line: max-line-length
        small: 'https://images.squarespace-cdn.com/content/542dfd9be4b0251326c8532f/1430864365019-S8DX9JYJU5I2HLEW563B/image-asset.jpeg?content-type=image%2Fjpeg',
        // tslint:disable-next-line: max-line-length
        medium: 'https://images.squarespace-cdn.com/content/542dfd9be4b0251326c8532f/1430864365019-S8DX9JYJU5I2HLEW563B/image-asset.jpeg?content-type=image%2Fjpeg',
        // tslint:disable-next-line: max-line-length
        big: 'https://images.squarespace-cdn.com/content/542dfd9be4b0251326c8532f/1430864365019-S8DX9JYJU5I2HLEW563B/image-asset.jpeg?content-type=image%2Fjpeg'
      },
      {
        small: 'https://www.cgspectrum.edu.au/hubfs/wp-content/vfx-pipeline-feature-image.jpg',
        medium: 'https://www.cgspectrum.edu.au/hubfs/wp-content/vfx-pipeline-feature-image.jpg',
        big: 'https://www.cgspectrum.edu.au/hubfs/wp-content/vfx-pipeline-feature-image.jpg'
      },
      {
        small: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0Y6JIRJSqB9-AiWrS-700x488.jpg',
        medium: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0Y6JIRJSqB9-AiWrS-700x488.jpg',
        big: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0Y6JIRJSqB9-AiWrS-700x488.jpg'
      },
      {
        small: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/sonicthehedgehog-redesign-nunchuks-700x330.jpg',
        medium: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/sonicthehedgehog-redesign-nunchuks-700x330.jpg',
        big: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/sonicthehedgehog-redesign-nunchuks-700x330.jpg'
      },
      {
        small: 'https://i.vimeocdn.com/video/717250598.webp?mw=900&mh=505&q=70',
        medium: 'https://i.vimeocdn.com/video/717250598.webp?mw=900&mh=505&q=70',
        big: 'https://i.vimeocdn.com/video/717250598.webp?mw=900&mh=505&q=70'
      },
      {
        small: 'https://pmcvariety.files.wordpress.com/2018/05/rexfeatures_9641147bd.jpg?w=1000&h=563&crop=1',
        medium: 'https://pmcvariety.files.wordpress.com/2018/05/rexfeatures_9641147bd.jpg?w=1000&h=563&crop=1',
        big: 'https://pmcvariety.files.wordpress.com/2018/05/rexfeatures_9641147bd.jpg?w=1000&h=563&crop=1'
      }
    ];
  }

}
