<?php

namespace App\Controller;

use App\Entity\Course;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * @Route("/student")
 */
class FrontController extends AbstractController
{

    /**
     * @Route("/", name="student-all-courses")
     */
    public function studentAllCourses(): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        $student_id = $this->getUser()->getId();
        $student = $entityManager->getRepository(User::class)->find($student_id);

        $allEnrolledCourses = $student->getEnrolledCourses();
        $currentlyEnrolledCourses = [];
        $completedEnrolledCourses = [];
        foreach ($allEnrolledCourses as $course){
            $c = $course->getCourse();
            if ($c->getEndDate() == NULL)
                array_push($currentlyEnrolledCourses, $c);
            else
                array_push($completedEnrolledCourses, $c);
        }

        return $this->render('front/student-all-courses.html.twig',[
            'currentlyEnrolledCourses' => $currentlyEnrolledCourses,
            'completedEnrolledCourses' => $completedEnrolledCourses
        ]);
    }

    /**
     * @Route("/request-appointment", name="student-appointment")
     */
    public function studentAppointment(): Response
    {
        return $this->render('front/student-appointment.html.twig');
    }

    /**
     * @Route("/timetable", name="student-timetable")
     */
    public function studentTimetable(): Response
    {
        return $this->render('front/student-timetable.html.twig');
    }

    /**
     * @Route("/view-profile", name="student-view-profile")
     */
    public function studentViewProfile(): Response
    {
        return $this->render('front/student-view-profile.html.twig');
    }

    /**
     * @Route("/course-stream", name="student-course-stream")
     */
    public function studentCourseStream(): Response
    {
        return $this->render('front/student-view-profile.html.twig');
    }

    /**
     * @Route("/explore", name="explore-all-courses")
     */
    public function studentExplore(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $student_id = $this->getUser()->getId();
        $student = $entityManager->getRepository(User::class)->find($student_id);

        $allCourses = $entityManager->getRepository(Course::class)->findAll();
        $currentCourses = [];
        $allStudents = [];
        foreach ($allCourses as $course){
            if ($course->getEndDate() == NULL){
                array_push($currentCourses, $course);
                array_push($allStudents, $course->getStudents());
            }
        }

        return $this->render('front/explore-all-courses.html.twig',[
            'allCourses' => $currentCourses,
            'student' => $student,
            'allStudents' => $allStudents
        ]);
    }

}
