import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  get projects() {
    return this.projectService.projects;
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  switchTo(index: number) {
    this.projectService.switchTo(index);
  }
}
