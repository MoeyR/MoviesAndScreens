import { Component,Input } from '@angular/core';
import { PageInfo } from 'src/app/Classes/PageInfo';

@Component({
  selector: 'app-module-footer',
  templateUrl: './module-footer.component.html',
  styleUrls: ['./module-footer.component.css']
})
export class ModuleFooterComponent {
  @Input() pageInfoFooter !: PageInfo
}
