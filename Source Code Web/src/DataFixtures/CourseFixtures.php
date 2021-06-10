<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CourseFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getCourseData() as [$code, $name, $mentor_id, $start, $end]){
            $course = new Course();
            $course->setName($name);
            $course->setCode($code);

            $mentor = $manager->getRepository(User::class)->find($mentor_id);
            $course->setMentor($mentor);
            $course->setStartDate(new \DateTime($start));
            if($end != NULL){
                $course->setEndDate(new \DateTime($end));
            }
            $manager->persist($course);
        }
        $manager->flush();
    }

    private function getCourseData(): array
    {
        return [

            ['CEN 110', 'C Programming', 1, '2020-09-02', '2021-02-13'],
            ['CEN 307', 'Computer Networks', 1, '2020-09-02', '2020-09-02'],
            ['MTH 206', 'Numerical Analysis', 1, '2021-03-16', NULL],
        ];
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class
        );
    }
}
