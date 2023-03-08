package spring.project.manga.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.project.manga.entity.MangaDetails;
import spring.project.manga.repository.MangaRepo;

import java.util.List;
@Service
public class MangaService {

	@Autowired
	private MangaRepo com;
	public MangaDetails savedata(MangaDetails s) {
		return com.save(s);
	}
	public List<MangaDetails> findall(){
		return com.findAll();
	}
	public void deletedata(int bookId) {
		com.deleteById(bookId);
	}
	public MangaDetails updatedata(MangaDetails s) {
		return com.saveAndFlush(s);
	}
}
