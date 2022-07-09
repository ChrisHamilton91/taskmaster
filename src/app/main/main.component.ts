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

  toggleTask(index: number) {
    this.projectService.toggleTask(index);
  }

  moveTaskUp(index: number) {
    this.projectService.moveTaskUp(index);
  }

  moveTaskDown(index: number) {
    this.projectService.moveTaskDown(index);
  }

  deleteTask(index: number) {
    this.projectService.deleteTask(index);
  }
}
