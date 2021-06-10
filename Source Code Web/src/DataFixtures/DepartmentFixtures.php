<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Department;

class DepartmentFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $this->loadDepartments($manager);
    }

    private function loadDepartments($manager)
    {
        foreach($this->getDepartmentData() as $name)
        {
            $department = new Department();
            $department->setName($name);
            $manager->persist($department);
        }

        $manager->flush();
    }

    private function getDepartmentData()
    {
        return [
            'Architecture',
            'Banking and Finance',
            'Banking and Finance (Albanian)',
            'Business Administration',
            'Business Informatics',
            'Civil Engineering',
            'Computer Engineering',
            'Economics',
            'Electronics',
            'International Marketing and Logistics',
            'Law',
            'Political Science',
            'Software Engineering'
        ];
    }
}
