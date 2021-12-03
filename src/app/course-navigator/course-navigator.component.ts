import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses: any[] | undefined;
  selectedCourse = { modules: [{id:undefined,title:undefined,course_id:undefined}],
  id:undefined};
  selectedModule= {lessons:[{id:undefined,title:undefined,module_id:undefined}],
    id:undefined};
  selectedLesson= {id:undefined};
  constructor(private courseService:CourseService) { }
  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  ngOnInit(): void {
    this.courseService.findAllCourses()
    .then(courses=>this.courses=courses);
  }

  selectModule(module: any) {
    this.selectedModule =module
  }
  selectLesson(lesson: any) {
    this.selectedLesson =lesson
  }

}
