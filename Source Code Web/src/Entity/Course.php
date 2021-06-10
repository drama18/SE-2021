<?php

namespace App\Entity;

use App\Repository\CourseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CourseRepository::class)
 */
class Course
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="date")
     */
    private $start_date;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $end_date;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="courses")
     * @ORM\JoinColumn(nullable=true)
     */
    private $mentor;

    /**
     * @ORM\OneToMany(targetEntity=CourseStudent::class, mappedBy="course")
     */
    private $students;

    public function __construct()
    {
        $this->students = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->start_date;
    }

    public function setStartDate(\DateTimeInterface $start_date): self
    {
        $this->start_date = $start_date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->end_date;
    }

    public function setEndDate(\DateTimeInterface $end_date): self
    {
        $this->end_date = $end_date;

        return $this;
    }

    public function getMentor(): ?User
    {
        return $this->mentor;
    }

    public function setMentor(?User $mentor): self
    {
        $this->mentor = $mentor;

        return $this;
    }

    /**
     * @return Collection|CourseStudent[]
     */
    public function getStudents(): Collection
    {
        return $this->students;
    }

    public function addStudent(CourseStudent $student): self
    {
        if (!$this->students->contains($student)) {
            $this->students[] = $student;
            $student->setCourse($this);
        }

        return $this;
    }

    public function removeStudent(CourseStudent $student): self
    {
        if ($this->students->removeElement($student)) {
            // set the owning side to null (unless already changed)
            if ($student->getCourse() === $this) {
                $student->setCourse(null);
            }
        }

        return $this;
    }


}
