<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210610085840 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE course (id INT AUTO_INCREMENT NOT NULL, mentor_id INT DEFAULT NULL, code VARCHAR(20) NOT NULL, name VARCHAR(100) NOT NULL, start_date DATE NOT NULL, end_date DATE DEFAULT NULL, INDEX IDX_169E6FB9DB403044 (mentor_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE course_student (id INT AUTO_INCREMENT NOT NULL, course_id INT DEFAULT NULL, student_id INT DEFAULT NULL, INDEX IDX_BFE0AADF591CC992 (course_id), INDEX IDX_BFE0AADFCB944F1A (student_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE department (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) DEFAULT NULL, UNIQUE INDEX UNIQ_CD1DE18A5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, department_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, name VARCHAR(45) NOT NULL, surname VARCHAR(45) NOT NULL, picture VARCHAR(255) DEFAULT NULL, bio VARCHAR(255) DEFAULT NULL, links LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649AE80F5DF (department_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE course ADD CONSTRAINT FK_169E6FB9DB403044 FOREIGN KEY (mentor_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE course_student ADD CONSTRAINT FK_BFE0AADF591CC992 FOREIGN KEY (course_id) REFERENCES course (id)');
        $this->addSql('ALTER TABLE course_student ADD CONSTRAINT FK_BFE0AADFCB944F1A FOREIGN KEY (student_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649AE80F5DF FOREIGN KEY (department_id) REFERENCES department (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE course_student DROP FOREIGN KEY FK_BFE0AADF591CC992');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649AE80F5DF');
        $this->addSql('ALTER TABLE course DROP FOREIGN KEY FK_169E6FB9DB403044');
        $this->addSql('ALTER TABLE course_student DROP FOREIGN KEY FK_BFE0AADFCB944F1A');
        $this->addSql('DROP TABLE course');
        $this->addSql('DROP TABLE course_student');
        $this->addSql('DROP TABLE department');
        $this->addSql('DROP TABLE user');
    }
}
