import { Injectable } from '@angular/core';

export class Project {
  name = 'New Project';
  tasks: ProjectTask[] = [];
  newTask() {
    this.tasks.push(new ProjectTask());
  }
}

export class ProjectTask {
  completed = false;
  name = 'New Task';
  description = '';
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private dataKey = 'PROJECTS';
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

  newProject() {
    this.projects.push(new Project());
    this.currentIndex = this.projects.length - 1;
    this.save();
  }

  switchTo(index: number) {
    this.currentIndex = index;
  }

  deleteCurrentProject() {
    if (this.currentIndex === undefined) return;
    this.projects.splice(this.currentIndex, 1);
    this.currentIndex = undefined;
    this.save();
  }

  load() {
    const data = localStorage.getItem(this.dataKey);
    if (data === null) this.projects = [];
    else this.projects = JSON.parse(data);
  }

  save() {
    localStorage.setItem(this.dataKey, JSON.stringify(this.projects));
  }
}
