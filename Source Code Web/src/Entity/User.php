<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank(message = "Please enter a valid email address.")
     * @Assert\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(message = "Please enter a valid password")
     * @Assert\Length(max=4096)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "Valid first name is required.")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "Valid last name is required.")
     */
    private $surname;

    /**
     * @ORM\ManyToOne(targetEntity=Department::class)
     */
    private $department;

    /**
     * @ORM\OneToMany(targetEntity=Course::class, mappedBy="mentor", orphanRemoval=true)
     */
    private $courses;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $bio;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $links = [];

    /**
     * @ORM\OneToMany(targetEntity=CourseStudent::class, mappedBy="student")
     */
    private $enrolledCourses;

    public function __construct()
    {
        $this->courses = new ArrayCollection();
        $this->enrolledCourses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }

    public function getDepartment(): ?Department
    {
        return $this->department;
    }

    public function setDepartment(?Department $department): self
    {
        $this->department = $department;

        return $this;
    }

    /**
     * @return Collection|Course[]
     */
    public function getCourses(): Collection
    {
        return $this->courses;
    }

    public function addCourse(Course $course): self
    {
        if (!$this->courses->contains($course)) {
            $this->courses[] = $course;
            $course->setMentor($this);
        }

        return $this;
    }

    public function removeCourse(Course $course): self
    {
        if ($this->courses->removeElement($course)) {
            // set the owning side to null (unless already changed)
            if ($course->getMentor() === $this) {
                $course->setMentor(null);
            }
        }

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }

    public function getLinks(): ?array
    {
        return $this->links;
    }

    public function setLinks(?array $links): self
    {
        $this->links = $links;

        return $this;
    }

    /**
     * @return Collection|CourseStudent[]
     */
    public function getEnrolledCourses(): Collection
    {
        return $this->enrolledCourses;
    }

    public function addEnrolledCourse(CourseStudent $enrolledCourse): self
    {
        if (!$this->enrolledCourses->contains($enrolledCourse)) {
            $this->enrolledCourses[] = $enrolledCourse;
            $enrolledCourse->setStudent($this);
        }

        return $this;
    }

    public function removeEnrolledCourse(CourseStudent $enrolledCourse): self
    {
        if ($this->enrolledCourses->removeElement($enrolledCourse)) {
            // set the owning side to null (unless already changed)
            if ($enrolledCourse->getStudent() === $this) {
                $enrolledCourse->setStudent(null);
            }
        }

        return $this;
    }

}
