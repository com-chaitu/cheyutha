import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navigationElements = [
    {
      id: 'whyAbc',
      text: 'Why abc',
      subElements: [
        {
          subId: 'benefits',
          text: 'Benefits',
          url: '/cheyutha/benefits'
        },
        {
          subId: 'ourStory',
          text: 'Our Story',
          url: '/cheyutha/ourStory'
        },
        {
          subId: 'career',
          text: 'Career',
          url: '/cheyutha/career'
        }
      ]
    },
    {
      id: 'help',
      text: 'Help & Support',
      subElements: [
        {
          subId: 'contactUs',
          text: 'Contact Us',
          url: '/cheyutha/contactUs'
        },
        {
          subId: 'faq',
          text: 'FAQs',
          url: '/cheyutha/faqs'
        }
      ]
    },
    {
      id: 'events',
      text: 'Events & Album',
      subElements: [
        {
          subId: 'upcomingEvents',
          text: 'Upcoming Events',
          url: '/cheyutha/upcomingEvents'
        },
        {
          subId: 'album',
          text: 'Album',
          url: '/cheyutha/album'
        }
      ]
    }
  ];

  @HostListener('window:resize') onWindowResize() {
    if (window.innerWidth < 680) {
      this.navGroupStyles = { 'width.%': 100 };
      this.navGroupState = Array(this.navGroupElementsNum).fill(false);
    } else {
      this.navGroupStyles = { 'width.%': 100 / this.navGroupElementsNum };
      this.navGroupState = Array(this.navGroupElementsNum).fill(true);
    }
  }



  navGroupState: Array<boolean>;
  navGroupStyles: any;
  navGroupElementsNum: number;

  constructor() { }

  ngOnInit() {
    this.navGroupElementsNum = this.navigationElements.length;
    this.onWindowResize();
  }

  changeState(index: number) {
    if (window.innerWidth < 680) {
      this.navGroupState[index] = !this.navGroupState[index];
    }
  }

}
