import { Injectable } from '@angular/core';

export class Project {
  name = '';
  expanded = false;
  tasks: ProjectTask[] = [];
}

export class ProjectTask {
  name = '';
  complete = false;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private dataKey = 'TASKMASTER-PROJECTS';
  private currentIndex?: number;
  projects: Project[] = [];

  constructor() {
    this.load();
  }

  get currentProject(): Project | undefined {
    return this.currentIndex !== undefined
      ? this.projects[this.currentIndex]
      : undefined;
  }

  load() {
    const data = localStorage.getItem(this.dataKey);
    if (!data) this.projects = [];
    else this.projects = JSON.parse(data);
    if (this.projects.length > 0) this.currentIndex = 0;
  }

  save() {
    localStorage.setItem(this.dataKey, JSON.stringify(this.projects));
  }

  newProject() {
    this.projects.push(new Project());
    this.currentIndex = this.projects.length - 1;
    this.save();
  }

  switchTo(index: number) {
    this.currentIndex = index;
  }

  newTask() {
    if (this.currentProject === undefined) return;
    this.currentProject.tasks.push(new ProjectTask());
    this.save();
  }

  toggleTask(index: number) {
    if (this.currentProject === undefined) return;
    const task = this.currentProject.tasks[index];
    task.complete = !task.complete;
    this.save();
  }

  deleteTask(index: number) {
    if (this.currentProject === undefined) return;
    this.currentProject.tasks.splice(index, 1);
    this.save();
  }

  deleteCurrentProject() {
    if (this.currentIndex === undefined) return;
    this.projects.splice(this.currentIndex, 1);
    this.currentIndex = undefined;
    this.save();
  }

  deleteAll() {
    this.projects = [];
    this.save();
  }

  moveProjectUp(index: number) {
    this.moveProject(index, index - 1);
  }

  moveProjectDown(index: number) {
    this.moveProject(index, index + 1);
  }

  moveProject(from: number, to: number) {
    if (to < 0) to = 0;
    if (to >= this.projects.length) to = this.projects.length - 1;
    const project = this.projects[from];
    this.projects.splice(from, 1);
    this.projects.splice(to, 0, project);
    this.save();
    // Ensure current project doesn't change
    if (from === this.currentIndex) this.currentIndex = to;
    else if (to === this.currentIndex) {
      if (from < to) this.currentIndex--;
      if (from > to) this.currentIndex++;
    }
  }

  moveTaskUp(index: number) {
    this.moveTask(index, index - 1);
  }

  moveTaskDown(index: number) {
    this.moveTask(index, index + 1);
  }

  moveTask(from: number, to: number) {
    if (this.currentProject === undefined) return;
    const tasks = this.currentProject.tasks;
    if (to < 0) to = 0;
    if (to >= tasks.length) to = tasks.length - 1;
    const task = tasks[from];
    tasks.splice(from, 1);
    tasks.splice(to, 0, task);
    this.save();
  }
}
