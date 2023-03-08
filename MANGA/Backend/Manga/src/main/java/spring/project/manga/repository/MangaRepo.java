package spring.project.manga.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.project.manga.entity.MangaDetails;


public interface MangaRepo extends JpaRepository<MangaDetails, Integer> {

}
