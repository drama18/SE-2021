<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('surname', TextType::class)
            ->add('email', EmailType::class)
            ->add('password', RepeatedType::class, array(
                'type' => PasswordType::class,
                // 'first_options'  => array('label' => 'Password'),
                // 'second_options' => array('label' => 'Repeat Password'),
            ))
            /*
            ->add('role', ChoiceType::class, [
                'choices' => [
                   'Student',
                    'Mentor'
                ]
            ])
            ->add('department', ChoiceType::class, [
                'choices' => [
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
                ]
            ])
            */
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
