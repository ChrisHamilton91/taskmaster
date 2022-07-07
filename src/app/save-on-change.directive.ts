import { Directive, HostListener, Input, SimpleChanges } from '@angular/core';
import { ProjectService } from './project.service';

@Directive({
  selector: '[saveOnChange]',
})
export class SaveOnChangeDirective {
  constructor(private projectService: ProjectService) {}

  @HostListener('ngModelChange', [])
  onChange() {
    // Queued so it saves AFTER the model is updated
    queueMicrotask(() => this.projectService.save());
  }
}
