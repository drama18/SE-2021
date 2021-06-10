<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use App\Entity\Department;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(UserPasswordEncoderInterface $password_encoder)
    {
        $this->password_encoder = $password_encoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as [$name, $surname, $email, $department_id, $password, $roles]){
            $user = new User();
            $user->setName($name);
            $user->setSurname($surname);
            $user->setEmail($email);

            $department = $manager->getRepository(Department::class)->find($department_id);
            $user->setDepartment($department);
            $user->setPassword($this->password_encoder->encodePassword($user, $password));
            $user->setRoles($roles);

            $manager->persist($user);
        }
        $manager->flush();
    }

    private function getUserData(): array
    {
        return [

            ['Denada', 'Rama', 'drama18@epoka.edu.al', 7, 'epokauni', ['ROLE_ADMIN']],
            ['Marilena', 'Shkurti', 'mshkurti18@epoka.edu.al', 7, 'epokauni', ['ROLE_USER']],
            ['Denajd', 'Hoxha', 'dhoxha17@epoka.edu.al', 7, 'epokauni', ['ROLE_USER']]
        ];
    }

    public function getDependencies()
    {
        return array(
            DepartmentFixtures::class
        );
    }
}
