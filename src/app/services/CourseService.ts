import {Injectable} from "@angular/core";

@Injectable()
export class CourseService{
    findAllCourses = () =>
    fetch('http://student-env.eba-rvpysy23.us-east-2.elasticbeanstalk.com/api/courses')
    .then(response => response.json())
}