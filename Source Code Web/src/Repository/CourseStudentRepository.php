<?php

namespace App\Repository;

use App\Entity\CourseStudent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CourseStudent|null find($id, $lockMode = null, $lockVersion = null)
 * @method CourseStudent|null findOneBy(array $criteria, array $orderBy = null)
 * @method CourseStudent[]    findAll()
 * @method CourseStudent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourseStudentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CourseStudent::class);
    }

    // /**
    //  * @return CourseStudent[] Returns an array of CourseStudent objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CourseStudent
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
