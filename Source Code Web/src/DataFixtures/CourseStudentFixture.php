<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\CourseStudent;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CourseStudentFixture extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getCourseData() as [$student_id, $course_id]){
            $c = new CourseStudent();

            $student = $manager->getRepository(User::class)->find($student_id);
            $c->setStudent($student);
            $course = $manager->getRepository(Course::class)->find($course_id);
            $c->setCourse($course);
            $manager->persist($c);
        }
        $manager->flush();
    }

    private function getCourseData(): array
    {
        return [

            [2, 1],
            [2, 2],
            [2, 3],
            [3, 2],
            [3, 3]
        ];
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            CourseFixtures::class
        );
    }
}
