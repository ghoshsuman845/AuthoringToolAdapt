import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  name: string;
  pageLocation: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private _router: Router, private layoutService: LayoutService) { }

  ngOnInit() {
    this.pageLocation = this.layoutService.getPageLocation();
    this.listenRouting();
  }
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        
        target = this.pageLocation;
        this.breadcrumbList.length = 0;
       
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
        
          target = target.find(page => page.path.slice(2) === router);
         
          this.breadcrumbList.push({
            name: target.name,
         
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });
          
         
          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbList);
      }
    });
  }

}
