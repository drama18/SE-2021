<?php

namespace App\Controller;

use App\Entity\Course;
use App\Entity\User;
use App\Form\CourseType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("/mentor")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="mentor-home")
     */
    public function mentorHome(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $mentor_id = $this->getUser()->getId();
        $mentor = $entityManager->getRepository(User::class)->find($mentor_id);

        $allCourses = $mentor->getCourses();
        $currentCourses = [];
        foreach ($allCourses as $course){
            if ($course->getEndDate() == NULL)
                array_push($currentCourses, $course);
        }
        return $this->render('admin/mentor-home.html.twig', [
            'currentCourses' => $currentCourses
        ]);
    }

    /**
     * @Route("/achievements", name="mentor-achievements")
     */
    public function mentorAchivements(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $mentor_id = $this->getUser()->getId();
        $mentor = $entityManager->getRepository(User::class)->find($mentor_id);

        $allCourses = $mentor->getCourses();
        $completedCourses = [];
        foreach ($allCourses as $course){
            if ($course->getEndDate() != NULL)
                array_push($completedCourses, $course);
        }
        return $this->render('admin/mentor-achievements.html.twig',[
            'completedCourses' => $completedCourses
        ]);
    }

    /**
     * @Route("/all-courses", name="mentor-all-courses")
     */
    public function mentorAllCourses(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $mentor_id = $this->getUser()->getId();
        $mentor = $entityManager->getRepository(User::class)->find($mentor_id);

        $allCourses = $mentor->getCourses();
        $currentCourses = [];
        $completedCourses = [];
        foreach ($allCourses as $course){
            if ($course->getEndDate() == NULL)
                array_push($currentCourses, $course);
            else
                array_push($completedCourses, $course);
        }

        return $this->render('admin/mentor-all-courses.html.twig', [
            'currentCourses' => $currentCourses,
            'completedCourses' => $completedCourses
        ]);
    }

    /**
     * @Route("/all-students", name="mentor-all-students")
     */
    public function mentorAllStudents(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $mentor_id = $this->getUser()->getId();
        $mentor = $entityManager->getRepository(User::class)->find($mentor_id);

        $allCourses = $mentor->getCourses();
        $currentCourses = [];
        $students = [];
        foreach ($allCourses as $course){
            if ($course->getEndDate() == NULL)
                array_push($currentCourses, $course);
                array_push($students, $course->getStudents());
        }

        dump($currentCourses);
        dump($students);
        return $this->render('admin/mentor-all-students.html.twig');
    }


    /**
     * @Route("/profile", name="mentor-profile")
     */
    public function mentorProfile(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $mentor_id = $this->getUser()->getId();
        $mentor = $entityManager->getRepository(User::class)->find($mentor_id);

        $allCourses = $mentor->getCourses();

        return $this->render('admin/mentor-profile.html.twig', [
            'allCourses' => $allCourses
        ]);
    }

    /**
     * @Route("/timetable", name="mentor-timetable")
     */
    public function mentorTimetable(): Response
    {
        return $this->render('admin/mentor-timetable.html.twig');
    }

    /**
     * @Route("/create-course", name="create-course")
     */
    public function createCourse(Request $request): Response
    {
        $course = new Course();
        $form = $this->createForm(CourseType::class, $course);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $entityManager = $this->getDoctrine()->getManager();

            $course->setCode($request->request->get('course')['code']);
            $course->setName($request->request->get('course')['name']);

            $mentor_id = $this->getUser()->getId();
            $mentor = $entityManager->getRepository(User::class)->find($mentor_id);
            $course->setMentor($mentor);

            $course->setStartDate(new \DateTime());

            $entityManager->persist($course);
            $entityManager->flush();


            return $this->redirectToRoute('mentor-all-courses');
        }
        return $this->render('admin/create-course.html.twig',['form'=>$form->createView()]);
    }
}
