import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  get project() {
    return this.projectService.currentProject;
  }

  newProject() {
    this.projectService.newProject();
  }

  deleteProject() {
    this.projectService.deleteCurrentProject();
  }

  newTask() {
    this.projectService.newTask();
  }
}
