import { Component, Input } from '@angular/core';
import { PageInfo } from 'src/app/Classes/PageInfo';
import { TheaterDataInterface } from 'src/app/Interfaces/TheaterDetailsInterface';

@Component({
  selector: 'app-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.css']
})
export class ModuleHeaderComponent {
 @Input() pageInfoHeader !: PageInfo
 @Input() fetchExternalTheaterDetails !: TheaterDataInterface;
}
