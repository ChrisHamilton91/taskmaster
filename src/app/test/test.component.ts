import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  get currentProject() {
    return this.projectService.currentProject;
  }

  get allProjects() {
    return this.projectService.projects;
  }

  switchTo(index: number) {
    this.projectService.switchTo(index);
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

  deleteAll() {
    this.projectService.deleteAll();
  }

  toggleTask(index: number) {
    this.projectService.toggleTask(index);
  }

  deleteTask(index: number) {
    this.projectService.deleteTask(index);
  }

  moveProjectUp(index: number) {
    this.projectService.moveProjectUp(index);
  }

  moveProjectDown(index: number) {
    this.projectService.moveProjectDown(index);
  }

  moveTaskUp(index: number) {
    this.projectService.moveTaskUp(index);
  }

  moveTaskDown(index: number) {
    this.projectService.moveTaskDown(index);
  }
}
