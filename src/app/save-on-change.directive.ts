import { Directive, Input, SimpleChanges } from '@angular/core';
import { ProjectService } from './project.service';

@Directive({
  selector: '[saveOnChange]',
})
export class SaveOnChangeDirective {
  @Input() saveOnChange: any;

  constructor(private projectService: ProjectService) {}

  ngOnChanges() {
    this.projectService.save();
  }
}
