<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;
use App\Form\UserType;

class SecurityController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        if ($this->isGranted('ROLE_ADMIN'))
        {
            return $this->redirectToRoute('mentor-home');
        }
        else if($this->isGranted('ROLE_USER'))
        {
            return $this->redirectToRoute('student-all-courses');
        }
        else
        {
            return $this->redirectToRoute('login');
        }
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(AuthenticationUtils $helper)
    {
        return $this->render('security/login.html.twig', [
            'error' => $helper->getLastAuthenticationError()
        ]);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout() : void
    {
        throw new \Exception('This should never be reached!');
    }

    /**
     * @Route("/register", name="register")
     */
    public function register(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            dd('registering user ...');
        }
        return $this->render('security/register.html.twig',['form'=>$form->createView()]);
    }
}
