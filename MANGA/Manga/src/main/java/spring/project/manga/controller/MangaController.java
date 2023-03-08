package spring.project.manga.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import spring.project.manga.entity.MangaDetails;
import spring.project.manga.service.MangaService;

@RestController
@CrossOrigin
public class MangaController {

	@Autowired
	 private MangaService  cs;
	 
	 @PostMapping("/save")
	 public String savingBook(@RequestBody MangaDetails d) {
		  cs.savedata(d);
		  return "saved";
	 }
	 @GetMapping("/findall")
	 public List<MangaDetails> listing()
	  {
	 	 return cs.findall();
	  }
	 @PutMapping("/updatedata")
	 public String updateCompany(@RequestBody MangaDetails d) {
		  cs.updatedata(d);
		  return "updated";
	 }
	 @DeleteMapping("/delete{bookId}")
	 public String deleteCompany(@PathVariable("bookId")int bookId) {
		 cs.deletedata(bookId);
		 return "deleted";
	 }	
}
